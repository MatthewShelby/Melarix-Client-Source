// import { Course } from "schema-dts";
import { helmetJsonLdProp } from "react-schemaorg";
import { getDifficulityLevelString, kewordsArrayToString } from "../../../asset/js/custom";
import { getCategoryForBreadcrumb } from "@as/js/categoryGuide"
// import { Person as PersonSchema } from "schema-dts";
import { Helmet } from "react-helmet";





/**
 * ╔═══════════════════════════════════╗
 * ║                                   ║
 * ║        Helmet returns             ║
 * ║                                   ║
 * ╚═══════════════════════════════════╝
 */

function CourseHelmet({ course }) {
      var json = {
            "@context": "http://schema.org",
            "@type": "Course",
            "@id": course.id,
            "availableLanguage": course.language,
            "inLanguage": course.language,
            "courseCode": course.id,
            "coursePrerequisites": course.prerequisites,
            "audience": {
                  "@type": "Audience",
                  "audienceType": course.audience
            },
            "copyrightHolder": course.provider,
            "copyrightYear": course.createDate,
            "creator": course.producer,
            "dateCreated": course.createDate,
            "dateModified": course.dateModified,
            "datePublished": course.datePublished,
            "discussionUrl": course.url,
            "educationalLevel": getDifficulityLevelString(course.difficultyLevel),
            "isAccessibleForFree": course.isAccessibleForFree,
            "isFamilyFriendly": true,
            "keywords": kewordsArrayToString(course.keywords),
            "provider": course.producer,
            "publisher": course.provider,
            "teaches": course.shortDescription,
            "thumbnailUrl": course.thumbnailUrl,
            // "timeRequired": {
            //       "@type": "Duration",
            //       "activityDuration": 'T' + course.duration
            // },
            "timeRequired": course.duration,
            "name": course.schemaName,
            "image": course.mainImage,
            "description": course.schemaDescription,
            "url": course.url,
            "hasCourseInstance": {
                  "@type": "CourseInstance",
                  "courseMode": "online",
                  "endDate": add3Years(new Date(course.createDate)),
                  "startDate": course.createDate
            }
      }
      if (!course.isAccessibleForFree) json.offers = getOffers(course.acceptedPayments);
      return WrapperHelmet([json, Breadcrumb(course.category)])
}

function ArticleHelmet({ article }) {
      var json = {
            "@context": "http://schema.org",
            "@type": "Article",
            "@id": article.id,
            "url": article.url,
            "inLanguage": article.language,
            "mainEntityOfPage": article.url,
            "headline": article.shortDescription,
            "description": article.schemaDescription,
            "articleBody": getTextFromBody(article.body), //////// ###############################
            "keywords": kewordsArrayToString(article.keywords),
            "datePublished": article.datePublished,
            "dateModified": article.dateModified,
            "author": article.author,

            "publisher": article.publisher,
            "image": [{
                  "@type": "ImageObject",
                  "@id": 'img' + article.id,
                  "url": article.mainImage,
            }, {
                  "@type": "ImageObject",
                  "@id": 'img2' + article.id,
                  "url": article.image,
            }, {
                  "@type": "ImageObject",
                  "@id": 'imgthumbnail' + article.id,
                  "url": article.thumbnailUrl,
            }]
      }
      return WrapperHelmet([json, Breadcrumb(article.category)])

}

function VideoHelmet({ video }) {
      console.log(' From Video Helmet: video and course:')
      console.info(video)

      var json = {
            "@context": "https://schema.org/",
            "@type": "VideoObject",
            "name": video.title,
            "@id": video.id,
            "datePublished": video.parentCourse.datePublished,
            "author": video.parentCourse.producer,
            "duration": video.parentCourse.duration,
            "keywords": kewordsArrayToString(video.parentCourse.keywords),
            "description": video.parentCourse.schemaDescription,
            "educationalLevel": getDifficulityLevelString(video.parentCourse.difficultyLevel),
            "thumbnailUrl": video.thumbnailUrl

      }
      return WrapperHelmet([json, Breadcrumb(video.parentCourse.category)])
}


function WrapperHelmet(schema) {

      return (
            <Helmet>
                  <script type="application/ld+json">
                        {JSON.stringify(schema)}
                  </script>
            </Helmet>
      )
}

// function PersonSchema(person) {
//       var Json = {
//             "@context": "https://schema.org",
//             "@type": "Person",
//             alumniOf: {
//                   "@type": "Organization",
//                   name: ["Melarix", "Melarix.com"],
//             },
//             knowsAbout: ["BLockchain", "Web3", "Crypto Currency"],
//             "@id": person.id,
//             alternateName: person.name + ' ' + person.familyName,
//             gender: person.gender,
//             name: person.name,
//             url: person.url,// # Edit needed here . change it to the profile on the melarix
//             email: person.email,//"matthewshelb@gmail.com",
//             sameAs: person.sameAs,//"[https://www.linkedin.com/in/mt-shelby,https://matthewshelby.github.io/portfolio/]",
//             familyName: person.familyName,//"Shelby",
//             alternateName: person.alternateName,//"Mtthew Shelby",
//             jobTitle: person.jobTitle//"Blockchain Developer"
//       }
//       return Json
// }

// function OrganizationSchema















/**
 * ╔═══════════════════════════════════╗
 * ║                                   ║
 * ║         Side  returns             ║
 * ║                                   ║
 * ╚═══════════════════════════════════╝
 */




function getOffers(acceptedPayments) {
      var res = new Array()
      acceptedPayments.forEach(element => {
            res.push({
                  "@type": "Offer",
                  "price": element.amount,
                  "priceCurrency": element.symbol,
                  "url": element.gateURL,
                  "availability": "https://schema.org/InStock",
                  "category": "Normal-Offer"
            })
      });
      return res
}

function add3Years(inp) {
      console.log(' in add3Years inp: ' + inp)
      const aYearFromNow = inp;
      aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);
      return aYearFromNow
}

function getTextFromBody(html) {
      var divContainer = document.createElement("div");
      divContainer.innerHTML = html;
      return divContainer.textContent || divContainer.innerText || "";
}

function fixDuration(duration) {
      var year = Number(duration.split('Y')[0])
      var month = Number(duration.split('M')[0])
      var day = Number(duration.split('D')[0])
      var hour = Number(duration.split('H')[0])
      var min = Number(duration.split('H')[1].split('M')[0])
      var sec = Number(duration.split('H')[1].split('M')[1].split('S')[0])

      if (!year) year = 0
      if (!month) month = 0
      if (!day) day = 0
      return year + 'Y' + month + 'M' + day + 'D' + hour + 'H' + min + 'M' + sec + 'S';

      // if (hour < 10) res += ('0' + hour.toString())
      // else res += (hour.toString())
      // if (min < 10) res += (' : 0' + min.toString())
      // else res += (' : ' + min.toString())
      // if (sec < 10) res += (' : 0' + sec.toString())
      // else res += (' : ' + sec.toString())
      // return res
}

function Breadcrumb(category) {
      const strings = getCategoryForBreadcrumb(category)
      var json = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
                  "@type": "ListItem",
                  "position": 1,
                  "name": strings[0],
                  "item": "https://www.melarix.com/articles/" + strings[0]
            }, {
                  "@type": "ListItem",
                  "position": 2,
                  "name": strings[1],
                  "item": "https://www.melarix.com/articles/" + strings[0] + '/' + strings[1]
            }, {
                  "@type": "ListItem",
                  "position": 3,
                  "name": strings[2],
                  "item": "https://www.melarix.com/articles/" + strings[0] + '/' + strings[1] + '/' + strings[2]
            }]
      }
      return json
}


function AnaliticsTag() {
      return (
            <>
                  {/* <!-- Google tag (gtag.js) --> */}
                  {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-3Q62G33G36"></script>
                  <script>
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments)}
                        gtag('js', new Date());

                        gtag('config', 'G-3Q62G33G36');
                  </script> */}
            </>)
}


export { ArticleHelmet, CourseHelmet, VideoHelmet }