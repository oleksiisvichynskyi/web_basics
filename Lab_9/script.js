//Lec_1

let dots = 9;
let step = 8;

for (let i = 0; i < 10; i++) {
    console.log("*".repeat(dots));

    dots += step;
    step -= 2;
}


let timer = new Date().getTime();
let end = timer + 10000;

while (new Date().getTime() < end) {
}

console.log ("Пройшло 10 секунд");

let car = {
    speedometer: 0
}

Object.assign(car, {
    setSpeed(value) {
        car.speedometer = value;
        return car;
    },
    getSpeed() {
        console.log(car.speedometer);
        return car;
    },
    clearSpeed() {
        car.speedometer = 0;
        return car;
    }
});

console.log(car);

class Cars {
    constructor(brand) {
        this.brand = brand;
    }

}

class LightCar extends Cars {
    constructor(brand, weight) {
        super(brand);
        this.weight = weight;
    }
}

class MiniVan extends LightCar {
    constructor(brand, weight, seats) {
        super(brand, weight);
        this.seats = seats;
    }
}
