class ParkingOwner {

    parkingFull() {
        return this.parkedFull = true;
    }

    parkingAvailable() {
        return this.parkedFull = false;
    }
}
module.exports = new ParkingOwner();