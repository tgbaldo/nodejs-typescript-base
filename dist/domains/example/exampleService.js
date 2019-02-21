"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExampleService {
    /**
     * @param {string} email
     * @returns {boolean}
     */
    checkEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
}
exports.default = new ExampleService();
//# sourceMappingURL=exampleService.js.map