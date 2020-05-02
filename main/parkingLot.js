// class instantiation
class ParkingLot {
    constructor() {
        this.ParkingLot = new Array();
    }
    // initialising function to park the vehicle
    parkVehicle(car) {
        this.ParkingLot.push(car);
        return true;
    }
}

module.exports = ParkingLot;