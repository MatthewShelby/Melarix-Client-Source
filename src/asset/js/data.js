var data = require('./cluster.json');


const fetchArticles = async () => {
      return await data.Article
}

const fetchSingleArticle = async (id) => {
      return await data.Article.filter(a => a.title == id || a.id == id)
}

const fetchCourses = async () => {
      var allCourses = await data.Course
      allCourses.forEach(element => {
            element.datePublished = new Date(element.datePublished)
      });
      allCourses.sort(function (a, b) { return b.datePublished - a.datePublished })
      return allCourses
      // return await data.Course.filter(c => c.isPublished == true)
}

const fetchSingleCourse = async (id) => {
      return await data.Course.filter(C => C.title == id || C.id == id)
}


async function getVideosFor(ids) {


      console.log('Video Request ids: ' + ids)


      var allExistingVideos = await data.Video;
      var resultVideos = new Array();
      ids.forEach(element => {
            resultVideos.push(allExistingVideos.filter(v => v.title == element || v.id == element)[0])
      });

      console.log('FromDAta Before return Videos[]')

      console.info(resultVideos)
      return resultVideos

}

async function getAssetsFor(ids) {
      console.log('Asset Request ids: ' + ids)

      var allExistingAssets = await data.Asset;
      var resultAssets = new Array();


      ids.forEach(element => {
            resultAssets.push(allExistingAssets.filter(v => v.title == element || v.id == element)[0])
      });

      console.log('FromDAta Before return Assets[]')

      console.info(resultAssets)
      return resultAssets

}


async function getVideoById(id) {
      return await data.Video.filter(v => v.title == id || v.id == id)
}

async function getVideoAndCourseById(id) {

      var nvideo = await data.Video.filter(v => v.title == id || v.id == id)
      console.info(nvideo)
      var course = await fetchSingleCourse(nvideo[0].courseId)
      var video = nvideo[0];
      video.parentCourse = course[0]
      return video

}

const getKVData = async (key) => {
      return await data.kvdata.filter(a => a.key == key || a.id == key)
}






export {
      fetchCourses, fetchSingleCourse, fetchArticles, fetchSingleArticle, getVideosFor, getAssetsFor,
      getVideoById, getVideoAndCourseById, getKVData
}
