import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ArticlesList from './component/pages/articlePage/Articles'
import Article from './component/pages/articlePage/Article'
import Video from './component/pages/video/videoPlay'
import Course from './component/pages/coursePage/singleCoursePage/course'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Articles", element: <ArticlesList />,
  },
  {
    path: "Article/:id", element: <Article />,
  },
  {
    path: "video/:id", element: <Video />,
  },
  // {
  //   path: "Course", element: <CoursesList />,
  // },  
  {
    path: "Course/:id", element: <Course />,
  },
  // {
  //   path: "/Course",
  //   element: <Course />,
  // },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
