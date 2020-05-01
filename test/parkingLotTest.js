const assert = require('chai').assert;
const parkingLotSystem = require('../main/parkingLot');

// creating a class & calling the existing class 
const parkingLotArea = new parkingLotSystem();

// Test cases for parking lot system
// U.C 1: Make sure driver is able to park their car to catch flight
describe('Parking lot system tests', () => {
    // Test case for vehicle parking
    it('should verify parking lot system', () => {
        vehicle = new Object(); // taking vehicle as an object
        assert.isUndefined(parkingLotArea.parkTheCar.vehicle, "Verify parking lot");
    });
});