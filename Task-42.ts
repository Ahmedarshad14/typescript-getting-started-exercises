
const magician_names:string[] = ["magician1", "magician2", "magician3", "magician4", "magician5", "magician6"]

function show_magicians (array:string[]) {
    for (let i =0; i < array.length; i++)
    console.log(array[i])
}

//show_magicians(magician_names)


function make_great (array:string[]) {
    for (let i =0; i < array.length; i++){
    array[i] = (`The Great ${array[i]}`) 

    }
    return array
}
console.log('New Updated Array with Great Magicians');

console.log(make_great(magician_names))
console.log('Original Magicians Array Modified');
console.log(magician_names)


