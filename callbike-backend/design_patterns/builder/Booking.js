class Booking {
    constructor(builder) {
        this.phoneNumber = builder.phoneNumber;
        this.address = builder.address;
        this.gpsCoordinates = builder.gpsCoordinates;
        this.bookingTime = builder.bookingTime || Date.now();
    }

    confirmBooking() {
        return this.customer.getBooking().confirm();
    }
}

module.exports = Booking;