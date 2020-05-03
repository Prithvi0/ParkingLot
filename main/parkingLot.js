// class instantiation
class ParkingLot {
    constructor() {
        this.ParkingLot = new Array();
    }

    // function to park the vehicle
    parkVehicle(vehicle) {
        if (typeof vehicle === 'object') {
            this.ParkingLot.push(vehicle);
            return true;
        }
        if (typeof vehicle === 'undefined' || typeof vehicle === 'number' || typeof vehicle === 'string')
            throw new Error('car is not an object');
    }
}

module.exports = ParkingLot;