import { useState, useCallback, useEffect } from "react";

import * as config from "../../config.json";
import { useQuery } from "react-query";

import * as Linking from "expo-linking";

export default function ({ navigation }) {
  const [articles, setArticles] = useState([]);
  const fetchNews = () => {
    return fetch(
      `https://newsapi.org/v2/everything?q=apple&from=2022-07-05&to=2022-07-05&sortBy=popularity&apiKey=${config.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };
  let news = useQuery("news", () => {
    return fetchNews();
  });
  let { isFetching, refetch } = news;

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 700);
    };
  };
  let search = (word) => {
    let filteredArticle = articles.filter((n) => n.title.includes(word));
    setArticles(filteredArticle);
  };
  const omptimizedSearch = useCallback(debounce(search), [articles]);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  useEffect(() => {
    setArticles(news?.data?.articles);
  }, [isFetching]);

  let handleURL = async () => {
    let url = await Linking.getInitialURL();
    let titleStartIndex = url.lastIndexOf("/");

    let title = url.slice(titleStartIndex + 1, url.length);

    let article = articles && articles.find((a) => a.title.includes(title));
    navigation.navigate("NewsArticle", { Details: article });
  };

  useEffect(() => {
    Linking.addEventListener("url", handleURL);
  }, []);

  return { articles, isFetching, refetch, wait, omptimizedSearch };
}
