import { Booking} from './Booking';

// BookingBuilder.js
class BookingBuilder {
    constructor(phoneNumber, address, gpsCoordinates) {
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.gpsCoordinates = gpsCoordinates;
    }

    setBookingTime(bookingTime) {
        this.bookingTime = bookingTime;
        return this;
    }

    build() {
        return new Booking(this);
    }
}

// Director.js
class Director {
    constructor(builder) {
        this.builder = builder;
    }

    bookScheduledRide(bookingTime) {
        this.builder.setBookingTime(bookingTime);
    }

    bookImmediateRide() {
        this.builder.setBookingTime(Date.now());
    }

    buildBooking() {
        return this.builder.build();
    }
}

module.exports = { BookingBuilder, Director };
