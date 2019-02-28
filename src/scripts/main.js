let bandNumber = 1

const takeNumber = function (band) {
        return bandNumber++ + "." + band
}

const scum = takeNumber("Galactic Scum")
console.log(scum)

const under = takeNumber("Underdogs")
console.log(under)

const cats = takeNumber("Smelly Cats")
console.log(cats)

const pumpkins = takeNumber("Smashing Pumpkins")
console.log(pumpkins)