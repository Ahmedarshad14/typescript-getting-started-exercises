
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow any other properties
}

function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
    const car: Car = { manufacturer, model };

    for (const [key, value] of options) {
        car[key] = value;
    }

    return car;
}

const car1 = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
const car2 = createCar("Honda", "Civic", ["color", "maroon"], ["sunroof", true], ["year", 2023]);

console.log(car1);
console.log(car2);