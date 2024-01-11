
import intermediate from "@as/image/Icons/int.svg"
import beginner from "@as/image/Icons/beg.svg"
import advanced from "@as/image/Icons/adv.svg"

function DifficultyLevelBox({ dif }) {
      var levelImage = intermediate, difClass = "card-info dif-lvl-int", courseDifficultyLevel = 'Intermediate';
      if (dif === 0) { levelImage = beginner; difClass = "card-info dif-lvl-beg"; courseDifficultyLevel = 'beginner' }
      if (dif === 2) { levelImage = advanced; difClass = "card-info dif-lvl-adv"; courseDifficultyLevel = 'advanced' }
      return (
            <div className={difClass} title="Difficulty Level"><span><img className="info-icon" src={levelImage} alt="" /></span>
                  {courseDifficultyLevel}
            </div>
      )
}

export default DifficultyLevelBox