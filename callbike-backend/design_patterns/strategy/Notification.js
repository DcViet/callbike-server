// NotificationStrategy.js
class NotificationStrategy {
    notify(message) {
        throw new Error("This method must be overridden.");
    }
}

// Sử dụng Strategy Pattern
const appNotification = new AppNotificationStrategy();
appNotification.notify("Your booking is confirmed.");

const smsNotification = new SmsNotificationStrategy();
smsNotification.notify("Your booking is confirmed.");
