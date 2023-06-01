//Capitalize

const capitalize = (function(string){
    const capitalLetter = string.charAt(0).toUpperCase()
    const capitalString = capitalLetter + string.substr(2-string.length-1)

    console.log(capitalString)
})

capitalize("hello my name is Lena")


//Average Grade

const averageGrade = (gradeMath, gradePhysics, gradeEnglish) => {
    const grade = (gradeMath + gradePhysics + gradeEnglish) / 3

    console.log(`Your average grade is ${grade}.`)
}

averageGrade(3, 4, 5)