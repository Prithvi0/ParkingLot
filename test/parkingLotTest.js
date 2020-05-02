const assert = require('chai').assert;
const parkingLotSystem = require('../main/parkingLot');

// creating a class & calling the existing class 
const parkingLotArea = new parkingLotSystem();

describe('Parking lot system tests:', () => {
    // U.C 1: Make sure driver is able to park their car to catch flight
    describe('\n\tTests for Parking vehicles:', () => {
        // T.C 1.1: Test case for vehicle parking
        it('should verify parking lot system', () => {
            car = new Object();
            assert.isUndefined(parkingLotArea.parkVehicle().car, "Verify parking lot");
        });

        // T.C 1.2: Test case to return true when car is parked
        it('should return true when car is parked', () => {
            car = new Object();
            assert.isTrue(parkingLotArea.parkVehicle(car));
        });
    });
    
    // U.C 2: Make sure driver is able to unpark their car to return home
    describe('\n\tTests for Unparking vehicles:', () => {
        // T.C 2.1: Test case for vehicle unparking
        it('should verify unparking vehicle', () => {
            car = new Object();
            assert.isUndefined(parkingLotArea.unparkVehicle(car));
        });
    });
}); 