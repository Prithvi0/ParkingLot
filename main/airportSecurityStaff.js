class AirportSecurityPersonal {

    constructor() {
        this.parkedFull = false;
    }

    parkingFull() {
        return this.parkedFull = true;
    }
}
module.exports = new AirportSecurityPersonal;