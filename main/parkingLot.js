const parkingOwner = require('../main/owner')
const airportPersonal = require('../main/airportSecurityStaff')

// class instantiation
class ParkingLot {

    constructor() {
        this.parkingLot = [];
    }

    // function to park the car
    parkVehicle(vehicle) {
        if (this.isFull()) {
            parkingOwner.parkingFull();
            airportPersonal.parkingFull();
        }
        else {
            if (typeof vehicle === 'object' && vehicle != null) {
                this.parkingLot.push(vehicle);
                return true;
            }
            throw new Error('car is not an object');
        }
        throw new Error('Parking Lot Full')
    }

    // function to check if parking is full
    isFull() {
        if (this.parkingLot.length >= 2) {
            return true;
        }
        return false;
    }

    // function to unpark the vehicle
    unparkVehicle(vehicle) {
        if (vehicle === null || vehicle === undefined) {
            throw new Error('vehicle is not an object');
        }
        if (typeof vehicle === 'object' && this.parkingLot.includes(vehicle)) {
            this.parkingLot.pop(vehicle);
            parkingOwner.parkingAvailable();
            return true;
        }
        throw new Error('car not parked');
    }

    // function to check available slots to parking the vehicle
    availableParkingSlots() {
        for (let slot = 0; slot <= this.parkingLot.length; slot++) {
            if (this.parkingLot[slot] === null)
                return slot;
        }
        return false;
    }

    // function to find the car
    findVehicle(vehicle) {
        if (this.parkingLot.includes(vehicle)) {
            let driverCar = this.parkingLot.indexOf(vehicle);
            return driverCar;
        }
        return false;
    }
}

module.exports = ParkingLot;