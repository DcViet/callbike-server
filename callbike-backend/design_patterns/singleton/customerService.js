// customerService.js
class CustomerService {
    constructor() {
        if (!CustomerService.instance) {
            this.customerId = null;
            CustomerService.instance = this;
        }
        return CustomerService.instance;
    }

    setCustomerId(customerId) {
        this.customerId = customerId;
    }

    getCustomerId() {
        return this.customerId;
    }
}

const customerService = new CustomerService();
module.exports = customerService;
