/**
 * Content of this file has been copied from Server/model/TypeCategory.js on 2024/01/02
 * It must be either dynamic or be updated constantly 
 */








/**
 * ╔═══════════════════════════════╗
 * ║                               ║
 * ║        CATEGORIES             ║
 * ║                               ║
 * ╚═══════════════════════════════╝
 */




// Category Level => 0 - Root
class rootCategory {
      constructor(num, title, mainCategories) {
            this.num = num;
            this.title = title;
            this.mainCategories = mainCategories;// => Array of main categories.
      }
}


// Category Level => 1 - Main
class mainCategory {
      constructor(num, title, subCategories) {
            this.num = num;
            this.title = title;
            this.subCategories = subCategories;// => Array of sub categories.
      }
}


// Category Level => 2 - Sub
class subCategory {
      constructor(num, title) {
            this.num = num;
            this.title = title;
      }
}


var Categories = [
      new rootCategory(0, 'Development', [
            new mainCategory(0, 'Blockchain', [
                  new subCategory(0, 'NFT'),
                  new subCategory(1, 'DeFi'),
                  new subCategory(2, 'Metaverse'),
                  new subCategory(3, 'Crypto'),
                  new subCategory(4, 'Wallet'),
                  new subCategory(5, 'General'),
            ]),
            new mainCategory(1, 'Web', [
                  new subCategory(0, 'Frontend'),
                  new subCategory(1, 'Backend'),
                  new subCategory(2, 'Server Setup'),
                  new subCategory(3, 'Other'),
            ]),
      ]),
      new rootCategory(1, 'Design', [
            new mainCategory(0, 'Graphic Design', [
                  new subCategory(0, 'Logo Design'),
                  new subCategory(1, '3D Graphics'),
                  new subCategory(2, 'Typography'),
                  new subCategory(3, 'Other'),
            ]),
            new mainCategory(1, 'Web Design', [
                  new subCategory(0, 'UI Design'),
                  new subCategory(1, 'Responsive Design'),
                  new subCategory(2, 'Visual Design'),
                  new subCategory(3, 'Other'),
            ]),
      ]),
]

function getCategoryFor(r, m, s) {
      return [Categories[r].title,
      Categories[r].mainCategories[m].title,
      Categories[r].mainCategories[m].subCategories[s].title,
      ]
}

function getCategoryForString(array) {

      var res = getCategoryFor(array[0], array[1], array[2])
      return ` ${res[0]}   >   ${res[1]}   >   ${res[2]}`
}

function getCategoryForBreadcrumb(array) {
      return getCategoryFor(array[0], array[1], array[2])
}

export { getCategoryForString, getCategoryForBreadcrumb }