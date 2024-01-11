import * as Realm from "realm-web";
const appR = new Realm.App({ id: 'application-0-azhdg' });
const credentials = Realm.Credentials.anonymous();
await appR.logIn(credentials);
const mongo = appR.currentUser.mongoClient('mongodb-atlas');

const fetchArticles = async () => {

      const collection = mongo.db('test').collection('articles');
      return await collection.find({})
}

const fetchSingleArticle = async (id) => {

      const collection = mongo.db('test').collection('articles');
      return await collection.find({ id: id })
}
const fetchCourses = async () => {

      const collection = mongo.db('test').collection('courses');
      return await collection.find({})
}

const fetchSingleCourse = async (id) => {

      const collection = mongo.db('test').collection('courses');
      return await collection.find({ id: id })
}











export { fetchCourses, fetchSingleCourse, fetchArticles, fetchSingleArticle }
