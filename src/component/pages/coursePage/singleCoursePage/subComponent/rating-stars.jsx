// import starFull from "@as/image/Icons/star-full.svg"
// import starHalf from "../../../../../asset/image/Icons/star-hals.svg"
import full from '@as/image/Icons/star-full.svg';
import half from '@as/image/Icons/star-half.svg';
import empt from '@as/image/Icons/star-empty.svg';
// import logo from '../../../../../asset/image/Icons/star-full.svg';
// import starEmpt from "../../../../../asset/image/Icons/star-emmpty.svg"


function RatingStars({ number }) {
      const rateing = 'Rating: ' + number.toString()
      var fulls = Math.floor(number);
      var empties = 5 - (fulls + 1);
      var halfs = 0;
      (number % 1) >= 0.4 ? halfs = 1 : empties++;
      (number % 1) >= 0.84 ? halfs = 0 : halfs = halfs;
      (number % 1) >= 0.84 ? fulls++ : halfs = halfs;
      if (fulls + empties + halfs > 5) {
            window.alert(number)
      }

      var Stars = '';
      for (let i = 0; i < fulls; i++) { Stars += `<img class="rating-star-img" src=${full} alt="rating-full-star" />` }
      for (let i = 0; i < halfs; i++) { Stars += `<img class="rating-star-img" src=${half} alt="rating-half-star" />` }
      for (let i = 0; i < empties; i++) { Stars += `<img class="rating-star-img" src=${empt} alt="rating-empty-star" />` }
      return (
            <div className='reating-stars' title={rateing} dangerouslySetInnerHTML={{ __html: Stars }}></div>
      )
}

export default RatingStars
