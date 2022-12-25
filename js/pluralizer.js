let animal = "pup";
let count = 26;

function pluralizer(animal, count) {
    if (count > 1){
        console.log(count + ' ' + animal + 's')
    } else if (count === 1) {
        console.log(count + ' ' + animal)
    }
}

pluralizer(animal, count)