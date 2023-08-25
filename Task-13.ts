
let favCars: Array<[make: string, transport: string]> = [];

favCars.push(['Honda', 'Bike']);
favCars.push(['Audi', 'Car']);
favCars.push(['Kawasaki', 'Bike']);

favCars.forEach(([make, transport]) => {
    if (make[0] === 'A'|| make[0] === 'E' ||make[0] === 'I' ||make[0] === 'O' ||make[0] ===  'U') {
        console.log(`I would like to own an ${make} ${transport}.`)
    } else {
        console.log(`I would like to own a ${make} ${transport}.`)
    }
});

