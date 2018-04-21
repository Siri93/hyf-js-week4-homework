/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with car objects with random color and speed
 * @param {integer} numberOfCars - The number of cars
 * @returns {array} Array containing the car objects
 */
function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW', 'Fiat', 'Skoda', 'Volvo'];
    const carColors = ['lightgrey', 'lightcyan', 'lightyellow', 'lightgreen', 'lightcoral', 'lightpink'];

    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }

    return cars;
}

console.log("Generate Car List ");
const cars = generateCars(10);
console.log(cars);


function getCarSpeed(car) {
    return car.speed 
}

function getCarMake(car) {
    return car.make
}
const speedLimits = cars.filter(cars => cars.speed >= 30 && cars.speed >= 60 )
console.log("Cars speed between 30 - 60 ");
console.log(speedLimits);

console.log("Cars are not lightyellow ")
const carMake = cars.filter(cars => cars.color !== "lightyellow").map(getCarMake);
console.log(carMake);

function danishVersion(car) {
    return {
        maerke: car.make,
        farve: car.color,
        fart: car.speed,
    };
}

const printDanishVersion = cars.map(danishVersion);
console.log(printDanishVersion);
