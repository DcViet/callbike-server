// CallCenterAdapter.js
class CallCenterAdapter {
    constructor(callCenter) {
        this.callCenter = callCenter;
    }

    requestBooking(phoneNumber, address, gpsCoordinates) {
        this.callCenter.receiveCall(phoneNumber, address);
    }
}

module.exports = CallCenterAdapter;
