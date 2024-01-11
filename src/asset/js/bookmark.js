import isWalletConnected from "./web3integration/walletConnect"
// import { Cook } from "react-cookie";
// import Cookies from 'universal-cookie';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
async function toggleBookmark(id) {

      if (await isWalletConnected()) {
            // Bookmark must be saved on the server
      } else {

            var allBookmarked = await cookies.get('M-7t-bookmarks-');
            if (allBookmarked == undefined) {
                  var inp = new Array()
                  inp.push(id)


                  const toSave = JSON.stringify(inp)
                  // console.log(typeof (toSave))
                  // console.log((toSave))

                  setBookmarkOnCookie(toSave)
                  console.log('bookmark has been instantiated')
                  return 'is'
            } else {
                  // console.log('current bookmarks:')
                  // console.info(typeof (allBookmarked))
                  // console.info(allBookmarked)
                  // var par = JSON.parse(allBookmarked.toString())
                  // console.info('-----------')
                  // console.info(typeof (par))
                  // console.info(par)
                  // //var newArray = Object.keys(allBookmarked).map((key) => [allBookmarked[key]]);
                  var ids = new Array()
                  allBookmarked.forEach(element => {
                        ids.push(element)
                  });
                  // console.info('-----------')
                  // console.info(typeof (ids))
                  // console.info(ids)



                  if (ids.includes(id)) {
                        console.log('   course exists')
                        const index = ids.indexOf(id);
                        if (index > -1) { // only splice array when item is found
                              ids.splice(index, 1); // 2nd parameter means remove one item only
                        }
                        setBookmarkOnCookie(ids)
                        return 'isnt'

                  } else {
                        ids.push(id)
                        setBookmarkOnCookie(ids)
                        return 'is'

                  }
            }
      }
}


function setBookmarkOnCookie(inp) {
      let d = new Date();
      //console.log('from setBookmarkOnCookie type of inp: ' + typeof (inp))
      d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
      cookies.set("M-7t-bookmarks-", inp, { path: "/", expires: d });
}


async function getAllBookmarkedCoursesFromCookie() {
      if (await isWalletConnected()) {
            // Bookmark must be fethced from the server if user wallet is connected
      } else {
            var all = await cookies.get("M-7t-bookmarks-")
            if (all === null || all === undefined) {
                  setBookmarkOnCookie([])
                  return []
            } else {
                  return all;
            }
      }
}
export { toggleBookmark, getAllBookmarkedCoursesFromCookie }