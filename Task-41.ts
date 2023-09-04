const magician_names:string[] = ["magician1", "magician2", "magician3", "magician4", "magician5", "magician6"]

function show_magicians (array:string[]) {
    for (let i =0; i < array.length; i++)
    console.log(array[i])
}

show_magicians(magician_names)