
/**creates a bank account object */
function createAccount(pin, amount=0) {
    return {
        checkBalance:(enteredPin)=>{
        if(enteredPin !== pin) return "Invalid PIN."
        return `$${amount}`
        },

        deposit: (enteredPin, depAmount)=>{
            if(enteredPin !== pin) return "Invalid PIN."
            amount += depAmount;
            return `Succesfully deposited $${depAmount}. Current balance: $${amount}.`
        },

        withdraw:(enteredPin, withAmount)=>{
            if(enteredPin !== pin) return "Invalid PIN."
            if(withAmount> amount) return "Withdrawal amount exceeds account balance. Transaction cancelled."
            amount -= withAmount;
            return `Succesfully withdrew $${withAmount}. Current balance: $${amount}.`

        },
        changePin:(enteredPin, newPin)=>{
            if(enteredPin !== pin) return "Invalid PIN."
            pin = newPin;
            return "PIN successfully changed!"
        }

    }
}

module.exports = { createAccount };
