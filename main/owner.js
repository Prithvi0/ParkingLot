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
    availableParkingSlot() {
        let slots = new Array();
        if (this.parkingAvailable()) {
            for (let slot = 0; slot <= parkingLotSystem.length; slot++) {
                if (parkingLotSystem[slot])
                    slots.push(slot + 1);            
            }
            return slots;
        }
    }
}

module.exports = new ParkingOwner();