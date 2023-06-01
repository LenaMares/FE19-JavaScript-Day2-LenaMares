//Time Convert

const timeConvert = (minutes) => {
    let hours = Math.floor(minutes / 60)
    let mins = minutes - hours*60
    
    let hoursText = ""
    let minsText = ""

    if (hours === 1) {
        hoursText = "hour"
    } else {
        hoursText = "hours"
    }

    if (mins === 1) {
        minsText = "minute"
    } else {
        minsText = "minutes"
    }

    console.log (`${minutes} minutes are ${hours} ${hoursText} and ${mins} ${minsText}.`)
}

timeConvert(61)