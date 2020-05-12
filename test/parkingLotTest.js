const assert = require('chai').assert;
const parkingLotSystem = require('../main/parkingLot');
const parkingOwner = require('../main/owner');
const sinon = require('sinon');
const airportPersonal = require('../main/airportSecurityStaff');
let parkingLotArea;

// Using beforeEach and afterEach hooks to init before every tests
beforeEach(() => {
    parkingLotArea = new parkingLotSystem();
});

describe('Tests for Parking Lot System:', () => {

    // U.C 1: Make sure driver is able to park their car to catch flight
    describe('\n\tTests for Parking vehicles:', () => {

        // T.C 1.1: Test case for parking lot verification
        it('given function when parking lot system should verify parking', () => {
            assert.isDefined(parkingLotArea, "Verify parking lot");
        });

        // T.C 1.2: Test case to return equal when car is parked
        it('given car when parked should return equal', () => {
            let car = { 'company': "Tata" };
            assert.equal(parkingLotArea.parkVehicle(car), true);
        });

        // T.C 1.3: Test case to throw an error when car is not an object
        it('given car when not an object should throw an error', () => {
            try {
                car = 'hello';
                parkingLotArea.parkVehicle(car);
            } catch (error) {
                assert.equal(error.message, 'car is not an object');
            }
        });
    });

    // U.C 2: Make sure driver is able to unpark their car to return home
    describe('\n\tTests for Unparking vehicles:', () => {

        // T.C 2.1: Test case to return true when car is unparked
        it('given car when unparked should return equal', () => {
            let car = {};
            parkingLotArea.parkVehicle(car);
            vehicleUnparked = parkingLotArea.unparkVehicle(car);
            assert.equal(vehicleUnparked, true);
        });

        // T.C 2.2: Test case to throw an error when unparked and car is already unparked
        it('given car when unparked and no car parked should throw an error', () => {
            try {
                let car = {};
                parkingLotArea.parkVehicle(car);
                parkingLotArea.unparkVehicle(car);
                parkingLotArea.unparkVehicle(car);
            } catch (error) {
                assert.equal(error.message, 'car not parked');
            }
        });
    });

    // U.C 3: Ensure parking lot is full
    describe('\n\tTests for parking lot full:', () => {

        // T.C 3.1: Test case to verify parking lot is full
        it('given parking lot when full then inform owner should return true', () => {
            sinon.stub(parkingLotArea, "isFull").onFirstCall().returns(false)
                .onSecondCall().returns(true);
            let car1 = {};
            assert.isTrue(parkingLotArea.parkVehicle(car1));
            assert.isTrue(parkingLotArea.isFull());
            parkingLotArea.isFull.restore();
        });

        // T.C 3.2: Test case to verify parking lot is full to owner
        it('given parking lot when full inform to parking lot owner should return equal', () => {
            try {
                let car1 = {}; let car2 = {}; let car3 = {}
                assert.isTrue(parkingLotArea.parkVehicle(car1));
                assert.isTrue(parkingLotArea.parkVehicle(car2));
                assert.isTrue(parkingLotArea.parkVehicle(car3));
            }
            catch (error) {
                assert.equal(parkingLotArea.isFull(), true);
            }
        });
    });

    // U.C 4: Ensure parking lot is full at airport
    describe('\n\tTest for parking lot full at airport:', () => {

        // T.C 4.1: Test case to inform parking lot is full to airport security staff
        it('given parking lot when full then inform to airport security staff should return equal', () => {
            let car1 = {}; let car2 = {};
            parkingLotArea.parkVehicle(car1);
            let parkedVehicles = parkingLotArea.parkVehicle(car2);
            assert.isTrue(parkedVehicles);
            assert.equal(airportPersonal.parkingFull(), true);
        });
    });

    // U.C 5: Ensure parking lot space is available
    describe('\n\tTest for parking lot space is available:', () => {

        // T.C 5.1: Test case to inform parking lot space is available
        it('given parking lot space when available should return equal', () => {
            let car1 = {}; let car2 = {};
            parkingLotArea.parkVehicle(car1);
            parkingLotArea.parkVehicle(car2);
            parkingAvail = parkingLotArea.unparkVehicle(car1);
            assert.equal(true, parkingAvail, parkingOwner.parkingAvailable());
        });
    });

    // U.C 6: Park car as per parking lot availablity 
    describe('\n\tTest to park car when parking lot is available', () => {

        // T.C 6.1: Test case to park car when parking lot is available
        it('given parking lot when available should return equal then park the car', () => {
            let car = {};
            let parkedVehicles = parkingLotArea.parkVehicle(car);
            assert.equal(true, parkedVehicles, parkingLotArea.availableParkingSlots());
        });

        // T.C 6.2: Test case to return false when parking lot is full
        it('given parking lot when fully occupied should return false', () => {
            let car1 = {}; let car2 = {};
            parkingLotArea.parkVehicle(car1);
            parkingLotArea.parkVehicle(car2);
            assert.equal(false, parkingLotArea.availableParkingSlots());
        });
    });

    // U.C 7: Ensure driver finds their car to go home
    describe('\n\tTest to ensure driver finds their car to go home', () => {

        // T.C 7.1: Test case to ensure driver finds their car to go home
        it('given parking lot when driver finds their car to go home should return true', () => {
            car1 = { numberPlate: 'TS 01 MH 1000' }; car2 = { numberPlate: 'MH 04 AD 0987' }
            assert.isTrue(parkingLotArea.parkVehicle(car1));
            assert.isTrue(parkingLotArea.parkVehicle(car2));
            let driverCar = parkingLotArea.findVehicle(car2);
            assert.equal(1, driverCar);
        });
    });

    // U.C 8: Let the parking owner know when car was parked
    describe('\n\tTest to ensure driver finds their car to go home', () => {

        it('given parking lot when car parked should inform owner', () => {
            let car = {};
            assert.isTrue(parkingLotArea.parkVehicle(car));
            let vehicleParkTime = parkingLotArea.getParkingTime();
            assert.equal(vehicleParkTime, new Date().getTime());
        });
    });
});