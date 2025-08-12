function Vehicle(color, speed) {
    this.color = color;
    this.speed = speed;
}

Vehicle.prototype.turnLeft = function () {
    console.log("left");
};
Vehicle.prototype.turnRight = function () {
    console.log("right");
};
Vehicle.prototype.start = function () {
    console.log("start");
    return true;
};
Vehicle.prototype.stop = function () {
    console.log("stop");
    return true;
};
Vehicle.prototype.goBackward = function (speed, accel) {
    console.log("backward speed: "+speed+" and acceleration: "+accel);
};
Vehicle.prototype.goForward = function (speed, accel) {
    console.log("forward speed: "+speed+" and acceleration: "+accel);
};

//Bicycle -> Vehicle
function Bicycle(speed, color) {
    Vehicle.call(this, speed, color);
}
Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

Bicycle.prototype.ringBell = function () {
    console.log("ringbell");
};


//MotorVehicle -> Vehicle
function MotorVehicle(speed, color, sizeOfEngine, licencePlate) {
    Vehicle.call(this, speed, color);
    this.sizeOfEngine = sizeOfEngine;
    this.licencePlate = licencePlate;
}
MotorVehicle.prototype = Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle;
MotorVehicle.prototype.getSizeOfEngine = function () {
    return this.sizeOfEngine;
};
MotorVehicle.prototype.getLicensePlate = function () {
    return this.licencePlate;
};

//DumpTruck -> MotorVehicle
function DumpTruck(speed, color, sizeOfEngine, licencePlate, loadCapacity, numWheels, weight) {
    MotorVehicle.call(this, speed, color, sizeOfEngine, licencePlate);
    this.loadCapacity = loadCapacity;
    this.numWheels = numWheels;
    this.weight = weight;
}
DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;
DumpTruck.prototype.raiseLoad = function () {
    console.log("raiseload");
};
DumpTruck.prototype.lowerLoad = function () {
    console.log("lowerLoad");
};


//Car -> MotorVehicle
function Car(speed, color, sizeOfEngine, licencePlate, numOfDoors, numWheels, weight) {
    MotorVehicle.call(this, speed, color, sizeOfEngine, licencePlate);
    this.numOfDoors = numOfDoors;
    this.numWheels = numWheels;
    this.weight = weight;
}
Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.getNumOfDoors = function () {
    return this.numOfDoors;
};
Car.prototype.switchOnAirCon = function () {
    console.log("turn on Air Con");
};


var bike = new Bicycle(100, "red");
bike.start();
bike.turnLeft();
bike.turnRight();
bike.goForward(12, 3);
bike.goBackward(25,4);
bike.ringBell();
bike.stop();

var car = new Car(200, "blue", 6.0, "test123", 2, 3, 400);
car.switchOnAirCon();


var truck = new DumpTruck(250, "white", 6.0, "test321", 800, 2, 2500);
truck.raiseLoad();
truck.lowerLoad();
