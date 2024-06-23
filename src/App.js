import CourseHome from './component/pages/coursePage/courseHome';
import './asset/style/App.css';
import './asset/style/card.css';
import './asset/style/font.css';
import './asset/style/guide.css';
import './asset/style/headerfooter.css';
import './asset/style/index.css';
import './asset/style/style.css';
import './asset/style/course.css';
import './asset/style/article.css';
import './asset/style/page.css';
import './asset/style/responsive.css';




// simple routing for version 2
import { Route, Routes, RouterProvider } from 'react-router-dom';

import About from './component/pages/sidePages/about';
import Course from './component/pages/coursePage/singleCoursePage/course'
import ArticleList from './component/pages/articlePage/Articles';
import Article from './component/pages/articlePage/Article';
import Video from './component/pages/video/videoPlay'
import LightPaper from './component/pages/sidePages/lightPaper';
import TermsOfUse from './component/pages/sidePages/termsOfUse';
import PrivacyPolicy from './component/pages/sidePages/privacyPolicy';
import Router from "./routing"

function App() {

  return (
    <>
      <RouterProvider router={Router} />
    </>

  );
}


function App3() {
  return (
    <div className="App">
      <Router />
    </div>)
}

function App2() {
  return (
    <div className="App">

      <Routes>
        {/* Starting from homepage */}
        <Route path='/' element={<CourseHome />} />


        {/* Courses */}
        <Route path='/course/:id' component={<Course />} />
        <Route path='/video/:id' element={<Video />} />


        {/* Articles */}
        <Route path="/article/:id" element={<Article />} />
        <Route path='/articles' component={<ArticleList />} />


        {/* Side pages */}
        <Route path='/about' element={<About />} />
        <Route path='/lightpaper' element={<LightPaper />} />
        <Route path='/terms_of_use' element={<TermsOfUse />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />


        {/* Not found - 404 */}
        <Route path='*' element={<CourseHome />} />


      </Routes>

    </div>
  );
}

export default App;
