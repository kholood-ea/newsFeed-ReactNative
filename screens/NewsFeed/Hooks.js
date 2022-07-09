import React, { Component, useState } from "react";

import * as config from "../../config.json";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export default function () {
  const fetchNews = () => {
    return fetch(
      `https://newsapi.org/v2/everything?q=apple&from=2022-07-05&to=2022-07-05&sortBy=popularity&apiKey=${config.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };
  let { data, isFetching, refetch } = useQuery("news", () => {
    return fetchNews();
  });

  // console.log(data);

  return { data, isFetching, refetch };
}
