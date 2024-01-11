function convertDuration(duration) {
      var hour = Number(duration.split('H')[0])
      var min = Number(duration.split('H')[1].split('M')[0])
      var sec = Number(duration.split('H')[1].split('M')[1].split('S')[0])
      var res = ''
      if (hour < 10) res += ('0' + hour.toString())
      else res += (hour.toString())
      if (min < 10) res += (' : 0' + min.toString())
      else res += (' : ' + min.toString())
      if (sec < 10) res += (' : 0' + sec.toString())
      else res += (' : ' + sec.toString())
      return res
}

function convertDurationString(duration) {
      var hour = Number(duration.split('H')[0])
      var min = Number(duration.split('H')[1].split('M')[0])
      var res = hour + ' Hours and ' + min + ' Minutes '
      return res
}

function getDifficulityLevelString(levelNumber) {
      if (levelNumber === 0) return 'Begginer'
      if (levelNumber === 1) return 'Intermediate'
      if (levelNumber === 2) return 'Advanced'
}

function kewordsArrayToString(array) {
      var res = ''
      array.forEach(element => {
            res += element + ','
      });
      return res.substring(0, res.length - 1)
}
export { convertDuration, convertDurationString, getDifficulityLevelString, kewordsArrayToString }