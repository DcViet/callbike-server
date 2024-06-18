// notificationService.js
class NotificationService {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers(message) {
        this.observers.forEach(observer => observer.notify(message));
    }
}

const notificationService = new NotificationService();
module.exports = notificationService;
