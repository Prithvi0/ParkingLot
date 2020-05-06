const parkingOwner = require("../main/owner")

// class instantiation
class ParkingLot {
    constructor() {
        this.ParkingLot = new Array();
    }

    // function to park the vehicle
    parkVehicle(vehicle) {
        if (typeof vehicle === 'object' && this.ParkingLot.length === 0) {
            this.ParkingLot.push(vehicle);
            return true, this;
        }

        if (typeof vehicle === 'undefined' || typeof vehicle === 'number' || typeof vehicle === 'string')
            throw new Error('car is not an object');
        
        if (this.ParkingLot.length > 1)
            parkingOwner.parkingFull();
        }

    // function to unpark the vehicle
    unparkVehicle(vehicle) {
        if (typeof vehicle === 'object' && this.ParkingLot.includes(vehicle)) {
            this.ParkingLot.pop(vehicle);
            return true, this;
        }

        if (typeof vehicle === 'undefined' || typeof vehicle === 'number' || typeof vehicle === 'string')
            throw new Error('car is not an object');
        }
    }

module.exports = ParkingLot;