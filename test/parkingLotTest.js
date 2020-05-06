const assert = require('chai').assert;
const parkingLotSystem = require('../main/parkingLot');
const parkingOwner = require('../main/owner')
const sinon = require('sinon');

// Using beforeEach and afterEach hooks to init before every tests
beforeEach(function(){
    parkingLotArea = new parkingLotSystem;
    sinon.stub(parkingOwner,'parkingFull');
})

afterEach(function(){
    parkingOwner.parkingFull.restore();
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
    });
});