const ClientError = require("./ClientError");
 
class InputValidationError extends ClientError {
    constructor(message) {
        super(message);
        this.name = 'InputValidationError';
    }
}

module.exports = InputValidationError;
