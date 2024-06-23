import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, HashRouter, createHashRouter } from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ArticlesList from './component/pages/articlePage/Articles'
import Article from './component/pages/articlePage/Article'
import Video from './component/pages/video/videoPlay'
import Course from './component/pages/coursePage/singleCoursePage/course'
import LightPaper from './component/pages/sidePages/lightPaper'
import About from './component/pages/sidePages/about';
import TermsOfUse from './component/pages/sidePages/termsOfUse';
import PrivacyPolicy from './component/pages/sidePages/privacyPolicy';
import Test from './component/testerComponent';
import CourseList from './component/pages/coursePage/courseList';

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/Articles/:rootCategory?/:mainCategory?/:subCategory?/:title?",
//     element: <ArticlesList />,
//   },
//   {
//     path: "/Article/:id",
//     element: <Article />,
//   },
//   {
//     path: "/video/:id",
//     element: <Video />,
//   },
//   {
//     path: "/Course/:id",
//     element: <Course />,
//   },
//   {
//     path: "/lightpaper",
//     element: <LightPaper />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/terms_of_use",
//     element: <TermsOfUse />,
//   },
//   {
//     path: "/privacy",
//     element: <PrivacyPolicy />,
//   },
//   {
//     path: "/courseList/:rootCategory?/:mainCategory?/:subCategory?/:title?",
//     element: <CourseList />,
//   },
//   {
//     path: "/*",
//     element: <App />,
//   }
// ]
// );


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );


import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App />
      // <React.StrictMode>
      //       <BrowserRouter>
      //             <App />
      //       </BrowserRouter>
      // </React.StrictMode>
);






// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.return (<Router>     <App />     </Router>, document.getElementById('root'))
// render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     {/* <RouterProvider router={router} /> */}
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
