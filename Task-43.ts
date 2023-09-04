const magician_names:string[] = ["magician1", "magician2", "magician3", "magician4", "magician5", "magician6"]

function show_magicians (array:string[]) {
    for (let i =0; i < array.length; i++)
    console.log(array[i])
}

//show_magicians(magician_names)


function make_great (array:string[]) {
    const greatMagicians:string[] = []
    for (let i =0; i < array.length; i++){
    greatMagicians.push(`The Great ${array[i]}`) 

    }
    return greatMagicians
}
const greatMagicians = make_great(magician_names)
console.log('>> Newly Created Great Magicians Array');

show_magicians(greatMagicians)
console.log('>> Original Array Unchanged');

show_magicians(magician_names)