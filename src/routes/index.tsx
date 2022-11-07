import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "../pages/landing";
import News from "../pages/news";
import NewsDetail from "../pages/news/detail";

function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsdetail/:id" element={<NewsDetail />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;