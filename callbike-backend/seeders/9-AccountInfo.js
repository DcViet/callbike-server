'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const accountInfos = [
      {
        accountId: 1,
        customerId: 1,
        idNumber: 123456789,
        createdAt: new Date(),
        updatedAt: new Date(),
        paymentInfo: JSON.stringify({
          "method": "credit_card",
          "card": { 
            "number": "1234 5678 9012 3456", 
            "expiry": "12/26", 
            "cvv": "123" 
          }
        })

      },
      {
        accountId: 2,
        customerId: 2,
        idNumber: 987654321,
        createdAt: new Date(),
        updatedAt: new Date(),
        paymentInfo: JSON.stringify({
          "method": "credit_card",
          "card": { 
            "number": "1234 5678 9012 3456", 
            "expiry": "12/26", 
            "cvv": "123" 
          }
        })
      },
      {
        accountId: 3,
        customerId: 3,
        idNumber: 234567890,
        createdAt: new Date(),
        updatedAt: new Date(),
        paymentInfo: JSON.stringify({
          "method": "credit_card",
          "card": { 
            "number": "1234 5678 9012 3456", 
            "expiry": "12/26", 
            "cvv": "123" 
          }
        })
      },
      {
        accountId: 4,
        customerId: 4,
        idNumber: 345678901,
        createdAt: new Date(),
        updatedAt: new Date(),
        paymentInfo: JSON.stringify({
          "method": "credit_card",
          "card": { 
            "number": "1234 5678 9012 3456", 
            "expiry": "12/26", 
            "cvv": "123" 
          }
        })
      },
      {
        accountId: 5,
        customerId: 5,
        idNumber: 456789012,
        createdAt: new Date(),
        updatedAt: new Date(),
        paymentInfo: JSON.stringify({
          "method": "credit_card",
          "card": { 
            "number": "1234 5678 9012 3456", 
            "expiry": "12/26", 
            "cvv": "123" 
          }
        })
      },
      {
        accountId: 6,
        customerId: 6,
        idNumber: 567890123,
        createdAt: new Date(),
        updatedAt: new Date(),
        paymentInfo: JSON.stringify({
          "method": "credit_card",
          "card": { 
            "number": "1234 5678 9012 3456", 
            "expiry": "12/26", 
            "cvv": "123" 
          }
        })
      },
      {
        accountId: 7,
        customerId: 7,
        idNumber: 678901234,
        createdAt: new Date(),
        updatedAt: new Date(),
        paymentInfo: JSON.stringify({
          "method": "credit_card",
          "card": { 
            "number": "1234 5678 9012 3456", 
            "expiry": "12/26", 
            "cvv": "123" 
          }
        })
      },
      {
        accountId: 8,
        customerId: 8,
        idNumber: 789012345,
        createdAt: new Date(),
        updatedAt: new Date(),
        paymentInfo: JSON.stringify({
          "method": "credit_card",
          "card": { 
            "number": "1234 5678 9012 3456", 
            "expiry": "12/26", 
            "cvv": "123" 
          }
        })
      },
      {
        accountId: 9,
        customerId: 9,
        idNumber: 901234567,
        createdAt: new Date(),
        updatedAt: new Date(),
        paymentInfo: JSON.stringify({
          "method": "credit_card",
          "card": { 
            "number": "1234 5678 9012 3456", 
            "expiry": "12/26", 
            "cvv": "123" 
          }
        })
      },
      {
        accountId: 10,
        customerId: 10,
        idNumber: 123456789,
        createdAt: new Date(),
        updatedAt: new Date(),
        paymentInfo: JSON.stringify({
          "method": "credit_card",
          "card": { 
            "number": "1234 5678 9012 3456", 
            "expiry": "12/26", 
            "cvv": "123" 
          }
        })
      }
    ];

    await queryInterface.bulkInsert('AccountInfos', accountInfos, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('AccountInfos', null, {});
  }
};
