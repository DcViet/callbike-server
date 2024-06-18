// MobileApp.js
class MobileApp {
    requestBooking(phoneNumber, address, gpsCoordinates) {
        console.log(`Booking requested by ${phoneNumber}, address: ${address}, GPS: ${gpsCoordinates}`);
    }
}

module.exports = MobileApp;
