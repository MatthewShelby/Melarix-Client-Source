// Person Schema
var matthewShelby = {
      //www.linkedin.com/in/mt-shelby


      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "001",
      "gender": "male",
      "name": "Matthew",
      "url": "https://matthewshelby.github.io/portfolio/",// # Edit needed here . change it to the profile on the melarix
      "email": "matthewshelb@gmail.com",
      "sameAs": "[https://www.linkedin.com/in/mt-shelby,https://matthewshelby.github.io/portfolio/]",
      "familyName": "Shelby",
      "alternateName": "Mtthew Shelby",
      "jobTitle": "Blockchain Developer"
}

// Organization Schema
var MelarixOrganization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "002",
      "name": "Melarix",
      "url": "https://www.melarix.com/",
      "logo": "https://www.melarix.com/MelarixLogo.png",
      "sameAs": [
            "https://instagram.com/mela.rix?igshid=MzMyNGUyNmU2YQ==",
            "https://discord.gg/BaMGvB63",
            "https://www.linkedin.com/company/melarix/",
            "https://melarix.medium.com/",
            "https://www.youtube.com/@Melarix-com"],

      "founder": matthewShelby
      //https://www.youtube.com/@Melarix-com
      //https://youtu.be/zLdmPF0gPZk
      //https://matthewshelby.github.io/Melarix/assets/videos/Install-Metamask-Chrome.mp4
}


var allIds = {
      "001": matthewShelby,
      "002": MelarixOrganization,
      "101": MetamaskOnChrome,
}





// Schema for my first coure
var MetamaskOnChrome = {
      "@context": "http://schema.org",
      "@type": "Course",
      "@id": "101",
      // Identifies the main Category, category, sub category, - , number of a course
      // like                 
      "courseCode": "111-1",

      // value of prereq can be test or object of another course. Empty string if none
      "coursePrerequisites": "",


      "name": "Install Metamask on Chrome",
      "image": "https://matthewshelby.github.io/Melarix/assets/images/Metamask-Chrome.png",
      "description": "Learn How to add Metamask extenssion to chrome browser",
      "availableLanguage": "en",

      "publisher": MelarixOrganization,
      "provider": matthewShelby
}
function getMetamaskOnChrome() {
      return schema
}


// A sample of a full schema for a course
var schema = {
      "@context": "http://schema.org",
      "@type": "Course",
      "@id": "101",
      "availableLanguage": "en",
      "inLanguage": "en",


      // Identifies the main Category, category, sub category, - , number of a course
      // like                 
      "courseCode": "111-1",

      // value of prereq can be text or object of another course. Empty string if none
      "coursePrerequisites": "",


      "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "ratingCount": 4,
            "bestRating": 5,
            "worstRating": 1
      },

      "audience": {
            "@type": "Audience",
            "audienceType": [
                  "New blockchain users",
                  "Beginners who want to start with swap",
                  "Investors who want to enter the DeFi",
                  "Developers who woking on ethereum integration"
            ]
      },
      "copyrightHolder": MelarixOrganization,
      "copyrightYear": 2023,
      "creator": matthewShelby,
      "dateCreated": new Date("2023/10/17"),
      "dateModified": new Date("2023/10/17"),
      "datePublished": new Date("2023/10/17"),
      "discussionUrl": "Discussion page url if valiable",

      // 'beginner', 'intermediate' or 'advanced',
      "educationalLevel": "beginner",
      "isAccessibleForFree": true,
      "isFamilyFriendly": true,

      // Check for series later
      //"isPartOf":true,
      // The position of the asset in the sequence
      //"position":""


      "keywords": "Metamask,Chrome,Extension",
      // # Edit needed here
      "offers": {
            "@type": "Offer",
            "price": "13.00",
            "priceCurrency": "USD",
            "url": "http://www.ticketfly.com/purchase/309433",
            "availability": "https://schema.org/InStock"
      },

      // Provider must be a person or an Organization. Mostly the person who teaches the course
      "provider": matthewShelby,



      // publisher must be a person or an Organization. Mostly the Organization who promotes the course

      "publisher": MelarixOrganization,

      // # Review Onject cration path
      // an array of review objects
      "review": [
            {
                  "@type": "Review",
                  "author": {
                        "@type": "Person",
                        "name": "Ellie"
                  },
                  "datePublished": "2011-04-01",
                  "reviewBody": "The lamp burned out and now I have to replace it.",
                  "name": "Not a happy camper",
                  "reviewRating": {
                        "@type": "Rating",
                        "bestRating": "5",
                        "ratingValue": "1",
                        "worstRating": "1"
                  }
            }],


      "teaches": "How to install Metamask extension on Chrome browser",

      // A textual content of the work. Search more
      //"text":"Download the extension, Set up a wallet, pin it to easy access"
      "thumbnailUrl": "",

      "timeRequired": {
            "@type": "Duration",
            "activityDuration": "P0Y0M0DT0H10M"
      },


      "name": "Install Metamask on Chrome",
      "image": "https://matthewshelby.github.io/Melarix/assets/images/Metamask-Chrome.png",
      "description": "Learn How to add Metamask extenssion to chrome browser",
      "url": "The Coure URL # edit here"
}



const fromMediumArticle = {
      "@context": "http://schema.org",
      "@type": "NewsArticle",
      "image": ["https://miro.medium.com/v2/resize:fit:1200/1*6VxUDpeYDb1T3gR3liawwQ.png"],
      "url": "https://blog.stackademic.com/how-to-make-your-nodejs-application-handle-millions-of-api-requests-fc4f1c031e58",
      "dateCreated": "2023-09-07T15:12:45.151Z",
      "datePublished": "2023-09-07T15:12:45.151Z",
      "dateModified": "2023-12-30T22:54:26.462Z",
      "headline": "How to Make Your Node.js Application Handle Millions of API Requests",
      "name": "How to Make Your Node.js Application Handle Millions of API Requests",
      "description": "Welcome to the ultimate guide on optimizing your NodeJS application to handle millions of API requests! If you’re a developer looking to scale your application, you’re in the right place. In this…",
      "identifier": "fc4f1c031e58",
      "author": {
            "@type": "Person",
            "name": "Nicolet Junior",
            "url": "https://blog.stackademic.com/@nicoletjunior"
      },
      "creator": ["Nicolet Junior"],
      "publisher": {
            "@type": "Organization",
            "name": "Stackademic",
            "url": "blog.stackademic.com",
            "logo": {
                  "@type": "ImageObject",
                  "width": 60,
                  "height": 60,
                  "url": "https://miro.medium.com/v2/resize:fit:60/1*U-kjsW7IZUobnoy1gAp1UQ.png"
            }
      },
      "mainEntityOfPage": "https://blog.stackademic.com/how-to-make-your-nodejs-application-handle-millions-of-api-requests-fc4f1c031e58"
}

const gramerlyFAQ =
{
      "@context": "https:\/\/schema.org",
      "@type": "FAQPage",
      "@id": "https:\/\/www.grammarly.com\/blog\/articles\/#FAQPage",
      "headline": "Articles",
      "keywords": "Awareness, FAQ, Grammarly Free, Make Progress, syntax,",
      "datePublished": "2016-03-24T00:00:00Z",
      "dateModified": "2022-09-23T00:00:00Z",
      "dateCreated": "2016-03-24T00:00:00Z",
      "author": {
            "@type": "Person",
            "name": "Marika Wegerbauer"
      },
      "mainEntity": [{
            "@type": "Question",
            "name": "What is an article?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An article is a word that comes before a noun to show if it\u2019s specific or general. Specific nouns use the article the and general nouns use the article a (or an if the next word starts with a vowel sound).\u00a0"
            }
      },
      {
            "@type": "Question",
            "name": "What is an example of an article in grammar?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "\u201cThe hammer\u201d refers to only one hammer, but \u201ca hammer\u201d refers to any hammer.\u00a0\r\n"
            }
      },
      {
            "@type": "Question",
            "name": "When should we not use articles?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You don\u2019t use articles with uncountable nouns or possessive pronouns. Certain nouns such as nationalities, school subjects, and sports don\u2019t need articles, especially if they refer to abstract ideas.\u00a0\r\n"
            }
      }],
      "image": [{
            "@type": "ImageObject",
            "@id": "https:\/\/www.grammarly.com\/blog\/articles\/#primaryimage",
            "url": "https:\/\/contenthub-static.grammarly.com\/blog\/wp-content\/uploads\/2019\/08\/August-blog-header-Amplification.png",
            "width": "2048", "height": "1092"
      },
      {
            "@type": "ImageObject",
            "url": "https:\/\/contenthub-static.grammarly.com\/blog\/wp-content\/uploads\/2019\/08\/August-blog-header-Amplification.png",
            "width": "1200", "height": "900"
      },
      {
            "@type": "ImageObject",
            "url": "https:\/\/contenthub-static.grammarly.com\/blog\/wp-content\/uploads\/2019\/08\/August-blog-header-Amplification.png",
            "width": "1200", "height": "675"
      }]
}

const gramerlyArticle = {
      "@context": "http://schema.org",
      "@type": "Article",
      "@id": "",
      "url": "",
      "inLanguage": "en",
      "mainEntityOfPage": "url",
      "headline": "Articles: A Complete Grammar Guide | Grammarly",
      "description": "Articles are used to indicate whether a noun in a sentence is specific or general. This guide will help you learn more about the articles in English.",
      "articleBody": "What are articles?  Articles are words that identify a noun as being specific or unspecific. Consider the following examples:  After the long day, the cup of tea tasted particularly good.",
      "keywords": "ESL, FAQ, ",
      "datePublished": "2023-04-27T07:00:29+00:00",
      "dateModified": "2022-09-23T15:24:49+00:00",
      "author": {
            "@type": "Person",
            "name": "Grammarly",
            "description": "",
            "url": "https:\/\/www.grammarly.com\/blog\/author\/grammarly\/",
            "sameAs": [],
            "image": {
                  "@type": "ImageObject",
                  "url": "https:\/\/contenthub-static.grammarly.com\/blog\/wp-content\/uploads\/2018\/06\/LOGO-FINAL.jpg",
                  "height": 96, "width": 96
            }
      },

      "publisher": {
            "@type": "Organization",
            "name": "Grammarly Blog",
            "url": "https:\/\/contenthub-private.grammarly.com\/blog"
      },
      "image": [{
            "@type": "ImageObject",
            "@id": "https:\/\/www.grammarly.com\/blog\/articles\/#primaryimage",
            "url": "https:\/\/contenthub-static.grammarly.com\/blog\/wp-content\/uploads\/2019\/08\/August-blog-header-Amplification.png",
            "width": "2048",
            "height": "1092"
      },
      {
            "@type": "ImageObject",
            "url": "https:\/\/contenthub-static.grammarly.com\/blog\/wp-content\/uploads\/2019\/08\/August-blog-header-Amplification.png",
            "width": "1200",
            "height": "900"
      },
      {
            "@type": "ImageObject",
            "url": "https:\/\/contenthub-static.grammarly.com\/blog\/wp-content\/uploads\/2019\/08\/August-blog-header-Amplification.png",
            "width": "1200",
            "height": "675"
      }]
}

