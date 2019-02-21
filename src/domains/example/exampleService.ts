class ExampleService {
    /**
     * @param {string} email
     * @returns {boolean}
     */
    public checkEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }
}

export default new ExampleService();
