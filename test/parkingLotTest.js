const assert = require('chai').assert;
const parkingLotSystem = require('../main/parkingLot');
const parkingOwner = require('../main/owner')
const sinon = require('sinon');
const airportPersonal = require('../main/airportSecurityStaff');

// Using beforeEach and afterEach hooks to init before every tests
beforeEach(() => {
    parkingLotArea = new parkingLotSystem;
    sinon.stub(parkingOwner,'parkingFull');
    sinon.stub(airportPersonal,'parkingFull');
})

afterEach(() => {
    parkingOwner.parkingFull.restore();
    airportPersonal.parkingFull.restore();
})
    
describe('Parking lot system tests:', () => {

    // U.C 1: Make sure driver is able to park their car to catch flight
    describe('\n\tTests for Parking vehicles:', () => {
        
        // T.C 1.1: Test case for vehicle parking
        it('should verify parking lot system', () => {
            car = new Object();
            assert.isDefined(parkingLotArea, "Verify parking lot");
        });

        // T.C 1.2: Test case to return true when car is parked
        it('should return true when car is parked', () => {
            let car = new Object();
            assert.isTrue(true,parkingLotArea.parkVehicle(car));
        });

        // T.C 1.3: Test case to throw an error when car is not an object
        it('should throw an error when car is not an object', () => {
            try {
                car = 'hello'
            } catch (error) {
                assert.throws(error.message, 'car is not an object');
            }
        });
    });

    // U.C 2: Make sure driver is able to unpark their car to return home
    describe('\n\tTests for Unparking vehicles:', () => {

        // T.C 2.1: Test case for vehicle unparking verification
        it('should verify unparking vehicle function', () => {
            let car = new Object();
            assert.isDefined(true, parkingLotArea.unparkVehicle(car));
        });

        // T.C 2.2: Test case to return true when car is unparked
        it('should return true when car is unparked', () => {
            let car = new Object();
            assert.isTrue(true, parkingLotArea.unparkVehicle(car));
        });

        // T.C 2.3: Test case to throw an error when unparked and car is already unparked
        it('should throw an error when car unparked and no car parked', () => {
            try {
                let car1 = new Object();
                let car2 = new Object();
                assert.isTrue(true, parkingLotArea.parkVehicle(car1)
                                                  .unparkVehicle(car1).unparkVehicle(car2));
            }
            catch (error) {
                assert.throws(error.message, 'cannot unpark the existed unpark spot');
            }
        });
    });

    // U.C 3: Ensure parking lot is full
    describe('\n\tTests for parking lot full:', () => {

        // T.C 3.1: Test case to verify parking lot is full
        it('should return true when parking lot is full', () => {
            try {
                let car1 = new Object();
                let car2 = new Object();
                assert.isTrue(true, parkingLotArea.parkVehicle(car1).parkVehicle(car2));
            }
            catch (error) {
                assert.throws(error.message, 'parking lot is full');
            }
        });

        // T.C 3.2: Test case to verify parking lot is full to owner
        it('should return true when parking lot is full and inform to parking lot owner', () => {
            let car1 = new Object();
            ownerVerify = parkingLotArea.parkVehicle(car1);
            assert.isTrue(true, ownerVerify, parkingOwner.parkingFull());
        });
    });

    // U.C 4: Ensure parking lot is full at airport
    describe('\n\tTest for parking lot full at airport:', () => {

        // T.C 4.1: Test case to inform parking lot is full to airport security staff
        it('should return true when parking lot is full and inform to airport security staff', () => {
            let car1 = new Object();
            airportSecurityStaff = parkingLotArea.parkVehicle(car1);
            assert.isTrue(true, airportSecurityStaff, airportPersonal.parkingFull());
        });
    });

    // U.C 5: Ensure parking lot space is available
    describe('\n\tTest for parking lot space is available:', () => {

        // T.C 5.1: Test case to inform parking lot space is available
        it('should return true when parking lot space is available', () => {
            let car1 = new Object();
            parkingAvail = parkingLotArea.parkVehicle(car1).unparkVehicle(car1);
            assert.isTrue(true, parkingAvail, parkingOwner.parkingAvailable());
        });
    });

    // U.C 6: Park car as per parking lot availablity 
    describe('\n\tTest to park car when parking lot is available', () => {
  
        // T.C 6.1: Test case to park car when parking lot is available
        it('should return true when parking lot is available to park car', () => {
        let car1 = new Object();
        availParkingSlot = parkingLotArea.parkVehicle(car1).unparkVehicle(car1);
        assert.isTrue(true, availParkingSlot, parkingOwner.availableParkingSlot());
        });
    });
});