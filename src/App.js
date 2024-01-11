import CourseHome from './component/pages/coursePage/courseHome';
import MainLayout from './component/pages/template/MainLayout';
import './asset/style/App.css';
import './asset/style/card.css';
import './asset/style/font.css';
import './asset/style/guide.css';
import './asset/style/headerfooter.css';
import './asset/style/index.css';
import './asset/style/style.css';
import './asset/style/course.css';
import './asset/style/article.css';




function App() {
  return (
    <MainLayout>
      <CourseHome />
    </MainLayout>
  );
}

export default App;
