// DriverHandler.js
class DriverHandler {
    constructor() {
        this.next = null;
    }

    setNext(handler) {
        this.next = handler;
    }

    handle(bookingInfo) {
        throw new Error("This method must be overridden.");
    }
}

module.exports = DriverHandler;
