import { createBrowserRouter } from "react-router-dom";
import CourseHome from './component/pages/coursePage/courseHome';

import About from './component/pages/sidePages/about';
import Course from './component/pages/coursePage/singleCoursePage/course'
import ArticleList from './component/pages/articlePage/Articles';
import Article from './component/pages/articlePage/Article';
import Video from './component/pages/video/videoPlay'
import LightPaper from './component/pages/sidePages/lightPaper';
import TermsOfUse from './component/pages/sidePages/termsOfUse';
import PrivacyPolicy from './component/pages/sidePages/privacyPolicy';

const Router = createBrowserRouter([
      {
            path: "/",
            element: <CourseHome />,
      },
      {
            path: "/Articles",
            // path: "/Articles/:rootCategory?/:mainCategory?/:subCategory?/:title?",
            element: <ArticleList />,
      },
      {
            path: "/Article/:id",
            element: <Article />,
      },
      {
            path: "/video/:id",
            element: <Video />,
      },
      {
            path: "/Course/:id",
            element: <Course />,
      },
      {
            path: "/lightpaper",
            element: <LightPaper />,
      },
      {
            path: "/about",
            element: <About />,
      },
      {
            path: "/terms_of_use",
            element: <TermsOfUse />,
      },
      {
            path: "/privacy",
            element: <PrivacyPolicy />,
      },
 
      {
            path: "/*",
            element: <CourseHome />,
      }

])

export default Router