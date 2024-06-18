// SmsNotificationStrategy.js
class SmsNotificationStrategy extends NotificationStrategy {
    notify(message) {
        console.log(`Sending SMS: ${message}`);
    }
}

const smsNotification = new SmsNotificationStrategy();
smsNotification.notify("Your booking is confirmed.");
