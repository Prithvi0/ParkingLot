// class instantiation
class ParkingLot {
    constructor() {
        this.ParkingLot = new Array();
    }

    // function to park the vehicle
    parkVehicle(car) {
        if (typeof car === 'object') {
            this.ParkingLot.push(car);
            return true;
        }
        if (typeof car === 'undefined' || typeof car === 'number' || typeof car === 'string')
            throw new Error('car is not an object');
    }
}

module.exports = ParkingLot;