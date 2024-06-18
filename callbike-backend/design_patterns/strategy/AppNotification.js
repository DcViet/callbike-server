// AppNotificationStrategy.js
class AppNotificationStrategy extends NotificationStrategy {
    notify(message) {
        console.log(`Sending app notification: ${message}`);
    }
}

// Sử dụng Strategy Pattern
const appNotification = new AppNotificationStrategy();
appNotification.notify("Your booking is confirmed.");

