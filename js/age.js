
function printAge(age) {
    if (age === 0) {
        console.log("infant")
    } else if(age < 4) {
        console.log("toddler")
    } else if(age < 12) {
        console.log("child")
    } else if(age < 15) {
        console.log("preteen")
    } else if(age < 18) {
        console.log("teen")
    } else if(age < 20) {
        console.log("young adult")
    }
}

printAge(age)