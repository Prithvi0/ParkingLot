const parkingLotSystem = require('../main/parkingLot');

class ParkingOwner {
    constructor() {
        parkingLotSystem.length === 1;
    }
    parkingFull() {
        return parkingLotSystem.length;
    }
    parkingAvailable() {
        if (parkingLotSystem.length === 1)
            return this.parkingFull();
        return parkingLotSystem.length - 1;
    }
}

module.exports = new ParkingOwner();