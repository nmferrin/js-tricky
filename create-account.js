function createAccount(pin, initialDeposit) {
    let currentBalance = initialDeposit;
    let currentPin = pin;

    return {
        checkBalance: function(enteredPin) {
            if (enteredPin !== currentPin) {
                return "Invalid PIN.";
            }
            return `Current balance: $${currentBalance}.`;
        },

        deposit: function(enteredPin, amount) {
            if (enteredPin !== currentPin) {
                return "Invalid PIN.";
            }
            currentBalance += amount;
            return `Successfully deposited $${amount}. Current balance: $${currentBalance}.`;
        },

        withdraw: function(enteredPin, amount) {
            if (enteredPin !== currentPin) {
                return "Invalid PIN.";
            }
            if (amount > currentBalance) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            }
            currentBalance -= amount;
            return `Successfully withdrew $${amount}. Current balance: $${currentBalance}.`;
        },

        changePin: function(oldPin, newPin) {
            if (oldPin !== currentPin) {
                return "Invalid PIN.";
            }
            currentPin = newPin;
            return "PIN successfully changed!";
        }
    };
}
