// customerObserver.js
const notificationService = require('./notificationService');

class CustomerObserver {
    notify(message) {
        // Notify customer about driver's live location and ETA
    }
}

const customerObserver = new CustomerObserver();
notificationService.addObserver(customerObserver);
module.exports = customerObserver;
