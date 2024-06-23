import { useState, useEffect } from "react"
import * as Data from "../../../../asset/js/data"
import { useParams, useNavigate } from "react-router-dom"
import SingleCourse from "./singleCourse"
import MainLayout from '../../../../component/pages/template/MainLayout';
import { CourseHelmet } from "../../template/helmet"
import Loading from "../../../loading";


function Course() {
      const { id } = useParams();
      const [content, setContent] = useState()
      const navigate = useNavigate();

      useEffect(() => {
            fetchTheCourse(id)
      }, [])


      async function fetchTheCourse(inp) {
            var course = await Data.fetchSingleCourse(inp)
            //console.log(typeof (course[0].createDate))
            if (course.length == 0) {
                  navigate("/");
            }
            console.info(course)
            setContent(course[0])
      }






      // const singleCourseTest = {
      //       "_id": "65734c5b7ead873ee4757314",
      //       "id": "3",
      //       "keywords": [
      //             "ala",
      //             "bela"
      //       ],
      //       "category": [
      //             0,
      //             0,
      //             1
      //       ],
      //       "technologiesUsed": [
      //             "ERC-721",
      //             "Ethers.js",
      //             "EVM",
      //             "Solidity",
      //             "Remix",
      //       ],
      //       "audience": [
      //             ""
      //       ],
      //       "videos": [
      //             ""
      //       ],
      //       "otherImages": [
      //             ""
      //       ],
      //       "sideAssets": [
      //             ""
      //       ],
      //       "suggestedArticles": [
      //             ""
      //       ],
      //       "keyTakeaways": [
      //             {
      //                   "head": "Learning  Online",
      //                   "body": "This course will teach you everything online. There is no need to attendance."
      //             },
      //             {
      //                   "head": "Free access",
      //                   "body": "This course will give you everything free. You can gain your access by having your wallet connected."
      //             },
      //             {
      //                   "head": "Building Portfolio",
      //                   "body": "You will be instructed to develop your personal portfolio during this course. This will help you to understand the concept better and be able to implement your own products."
      //             }
      //       ],
      //       "acceptedPayments": [
      //             {
      //                   "gateURL": "url1",
      //                   "symbol": "BTC",
      //                   "chain": "Bitcoin",
      //                   "amount": "0.002",
      //                   "info": ""
      //             },
      //             {
      //                   "gateURL": "url2",
      //                   "symbol": "BNB",
      //                   "chain": "BSC",
      //                   "amount": "0.12",
      //                   "info": "normal Payment",
      //                   "extraInfo": {
      //                         "extra0": "value0"
      //                   },
      //                   "promotions": {
      //                         "foo": "Bar"
      //                   }
      //             }
      //       ],
      //       "number": 1,
      //       "courseId": "2",
      //       "courseName": "New Test React",
      //       "articleId": "",
      //       "articleName": "",
      //       "title": "Short title test",
      //       "description":
      //             `


      //                               <h2>Aut quam saepe et voluptates totam ea aliquid nihil. </h2>
      //                               <p>Lorem ipsum dolor sit amet. Et aliquid magnam et possimus officiis et deleniti
      //                                     delectus a accusamus laboriosam eum
      //                                     sequi quod ut laborum doloremque ut quam totam. At voluptatum nobis sit atque
      //                                     consectetur vel nulla accusantium et
      //                                     cupiditate perspiciatis et amet ipsam est officia voluptatem. Et adipisci
      //                                     laudantiu vel fugit eveniet ut possimus
      //                                     fugiat! Non blanditiis amet aut molestiae aspernatur hic commodi galisum in
      //                                     placeat
      //                                     voluptatem quo quos atque qui
      //                                     rerum consectetur et facilis esse? Et quia itaque At commodi quam cum
      //                                     asperiores
      //                                     sint et unde quaerat ut impedit
      //                                     omnis sit modi beatae. Nam numquam repudiandae est alias veritatis rem
      //                                     adipisci quia
      //                                     et maxime ipsam. Ex quos
      //                                     molestiae 33 minus fugiat et placeat perspiciatis non eius galisum ut
      //                                     aspernatur
      //                                     omnis? Et corporis itaque aut
      //                                     exercitationem explicabo sed velit voluptatem sit assumenda officia et
      //                                     molestiae
      //                                     modi et reprehenderit cumque. Sed
      //                                     dolorem laudantium hic quaerat inventore cum tempore excepturi sit repudiandae
      //                                     consequatur ea itaque porro? </p>

      //                         **********


      //                               <h2>Rem galisum necessitatibus ut voluptas voluptatum. </h2>
      //                               <p>Qui ducimus nemo ad temporibus dolorem eos magnam placeat qui quia eveniet. Et
      //                                     architecto obcaecati et harum dolorem
      //                                     ut voluptatibus voluptates et dolores quia nam exercitationem placeat sed vero
      //                                     facilis. Est nihil libero est saepe
      //                                     magnam ut natus temporibus et animi sint. In odio exercitationem est rerum
      //                                     numquam a
      //                                     quibusdam fugiat rem
      //                                     aspernatur aspernatur et beatae necessitatibus. Sed dolorem voluptas id sequi
      //                                     debitis eum sequi voluptatum rem
      //                                     unde impedit qui corrupti voluptas qui autem tempore quo enim mollitia. </p>
      //                               <h2>Sit dolores voluptas sit laborum optio. </h2>
      //                               <p>33 fugiat sapiente ut accusantium illum et quaerat possimus. Qui velit neque id
      //                                     aperiam
      //                                     deserunt ex quas quod. Et
      //                                     dolores voluptatem qui rerum culpa et modi molestiae 33 debitis porro aut quas
      //                                     minima in nihil galisum et
      //                                     reprehenderit expedita? Aut omnis dolorem aut nihil molestiae rem dolores quod
      //                                     qui
      //                                     dicta dolorum. Et quis soluta
      //                                     ut error dignissimos aut illo molestias non eius quia est galisum sint est
      //                                     magni
      //                                     voluptatem et excepturi illum?
      //                               </p>
      //                               <h2>Sit dolores voluptas sit laborum optio. </h2>
      //                               <p>33 fugiat sapiente ut accusantium illum et quaerat possimus. Qui velit neque id
      //                                     aperiam
      //                                     deserunt ex quas quod. Et
      //                                     dolores voluptatem qui rerum culpa et modi molestiae 33 debitis porro aut quas
      //                                     minima in nihil galisum et
      //                                     reprehenderit expedita? Aut omnis dolorem aut nihil molestiae rem dolores quod
      //                                     qui
      //                                     dicta dolorum. Et quis soluta
      //                                     ut error dignissimos aut illo molestias non eius quia est galisum sint est
      //                                     magni
      //                                     voluptatem et excepturi illum?
      //                               </p>
      //                               <h2>Rem galisum necessitatibus ut voluptas voluptatum. </h2>
      //                               <p>Qui ducimus nemo ad temporibus dolorem eos magnam placeat qui quia eveniet. Et
      //                                     architecto obcaecati et harum dolorem
      //                                     ut voluptatibus voluptates et dolores quia nam exercitationem placeat sed vero
      //                                     facilis. Est nihil libero est saepe
      //                                     magnam ut natus temporibus et animi sint. In odio exercitationem est rerum
      //                                     numquam a
      //                                     quibusdam fugiat rem
      //                                     aspernatur aspernatur et beatae necessitatibus. Sed dolorem voluptas id sequi
      //                                     debitis eum sequi voluptatum rem
      //                                     unde impedit qui corrupti voluptas qui autem tempore quo enim mollitia. </p>
      //                               <h2>Sit dolores voluptas sit laborum optio. </h2>
      //                               <p>33 fugiat sapiente ut accusantium illum et quaerat possimus. Qui velit neque id
      //                                     aperiam
      //                                     deserunt ex quas quod. Et
      //                                     dolores voluptatem qui rerum culpa et modi molestiae 33 debitis porro aut quas
      //                                     minima in nihil galisum et
      //                                     reprehenderit expedita? Aut omnis dolorem aut nihil molestiae rem dolores quod
      //                                     qui
      //                                     dicta dolorum. Et quis soluta
      //                                     ut error dignissimos aut illo molestias non eius quia est galisum sint est
      //                                     magni
      //                                     voluptatem et excepturi illum?
      //                               </p>
      //                               <h2>Sit dolores voluptas sit laborum optio. </h2>
      //                               <p>33 fugiat sapiente ut accusantium illum et quaerat possimus. Qui velit neque id
      //                                     aperiam
      //                                     deserunt ex quas quod. Et
      //                                     dolores voluptatem qui rerum culpa et modi molestiae 33 debitis porro aut quas
      //                                     minima in nihil galisum et
      //                                     reprehenderit expedita? Aut omnis dolorem aut nihil molestiae rem dolores quod
      //                                     qui
      //                                     dicta dolorum. Et quis soluta
      //                                     ut error dignissimos aut illo molestias non eius quia est galisum sint est
      //                                     magni
      //                                     voluptatem et excepturi illum?
      //                               </p>

      //       `
      //       ,
      //       "contentType": 1,
      //       "language": "en",
      //       "url": "",
      //       "thumbnailUrl": "",
      //       "image": "https://raw.githubusercontent.com/MatthewShelby/Melarix/main/assets/Course/004-1/image/MetamaskChrome-Image.png",
      //       "producer": {
      //             "_id": "65351a3961365d51864867c9",
      //             "key": "MatthewShelby",
      //             "object": {
      //                   "@context": "https://schema.org",
      //                   "@type": "Person",
      //                   "@id": "001",
      //                   "gender": "male",
      //                   "name": "Matthew",
      //                   "url": "https://matthewshelby.github.io/portfolio/",
      //                   "email": "matthewshelb@gmail.com",
      //                   "sameAs": "[https://www.linkedin.com/in/mt-shelby,https://matthewshelby.github.io/portfolio/]",
      //                   "familyName": "Shelby",
      //                   "alternateName": "Mtthew Shelby",
      //                   "jobTitle": "Blockchain Developer"
      //             },
      //             "__v": 0
      //       },
      //       "provider": {
      //             "_id": "65352f3120b29fd2c6f91238",
      //             "key": "MelarixOrganizationSchema",
      //             "object": {
      //                   "@context": "https://schema.org",
      //                   "@type": "Organization",
      //                   "@id": "002",
      //                   "name": "Melarix",
      //                   "url": "https://www.melarix.com/",
      //                   "logo": "https://www.melarix.com/MelarixLogo.png",
      //                   "sameAs": [
      //                         "https://instagram.com/mela.rix?igshid=MzMyNGUyNmU2YQ==",
      //                         "https://discord.gg/BaMGvB63",
      //                         "https://www.linkedin.com/company/melarix/",
      //                         "https://melarix.medium.com/",
      //                         "https://www.youtube.com/@Melarix-com"
      //                   ],
      //                   "founder": {
      //                         "@context": "https://schema.org",
      //                         "@type": "Person",
      //                         "@id": "001",
      //                         "gender": "male",
      //                         "name": "Matthew",
      //                         "url": "https://matthewshelby.github.io/portfolio/",
      //                         "email": "matthewshelb@gmail.com",
      //                         "sameAs": "[https://www.linkedin.com/in/mt-shelby,https://matthewshelby.github.io/portfolio/]",
      //                         "familyName": "Shelby",
      //                         "alternateName": "Mtthew Shelby",
      //                         "jobTitle": "Blockchain Developer"
      //                   }
      //             },
      //             "__v": 0
      //       },
      //       "createDate": "2023-12-08T17:03:23.003Z",
      //       "updateDate": "2023-12-27T09:58:41.702Z",
      //       "code": "22",
      //       "shortTitle": "Short title test",
      //       "longTitle": "q React",
      //       "schemaName": "",
      //       "shortDescription": "Short description which I thing it will be necessary to have card guide for future to tell which text goes where. Also if its longer then the predefined length, its over flow most be act as defined",
      //       "longDescription": "",
      //       "schemaDescription": "",
      //       "timeRequired": "",
      //       "mainImage": "https://raw.githubusercontent.com/MatthewShelby/Melarix/main/assets/Course/004-1/image/MetamaskChrome-Image.png",
      //       "courseBody": "<p>React</p>",
      //       "about": "",
      //       "abstract": "",
      //       "author": {
      //             "_id": "65351a3961365d51864867c9",
      //             "key": "MatthewShelby",
      //             "object": {
      //                   "@context": "https://schema.org",
      //                   "@type": "Person",
      //                   "@id": "001",
      //                   "gender": "male",
      //                   "name": "Matthew",
      //                   "url": "https://matthewshelby.github.io/portfolio/",
      //                   "email": "matthewshelb@gmail.com",
      //                   "sameAs": "[https://www.linkedin.com/in/mt-shelby,https://matthewshelby.github.io/portfolio/]",
      //                   "familyName": "Shelby",
      //                   "alternateName": "Mtthew Shelby",
      //                   "jobTitle": "Blockchain Developer"
      //             },
      //             "__v": 0
      //       },
      //       "commentCount": 0,
      //       "dateModified": "2023-12-27T09:58:41.702Z",
      //       "datePublished": null,
      //       "isPublished": false,
      //       "prerequisites": "",
      //       "duration": "4H2M",
      //       "numberOfAllVideos": 0,
      //       "numberOfReleasedVideos": 2,
      //       "isAccessibleForFree": false,
      //       "priceInBTC": 0.0000142587401,
      //       "discount": 0,
      //       "numberOfSales": 0,
      //       "quizRelated": "",
      //       "badge": "",
      //       "award": "",
      //       "isCourseFinished": false,
      //       "difficultyLevel": 1,
      //       "__v": 0,
      //       "reviews": [],
      //       "courseType": 0
      // }

      return (

            <MainLayout>

                  {content ?
                        <><CourseHelmet course={content} />
                              <SingleCourse courseData={content} /></>
                        : <Loading />}
            </MainLayout>

      )
}
export default Course
