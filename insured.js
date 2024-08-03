/**
 * Třída reprezentující pojištěnce.
 */
class Insured {
    /**
     * Vytvoří nového pojištěnce.
     * @param {string} firstName - Křestní jméno pojištěnce.
     * @param {string} lastName - Příjmení pojištěnce.
     * @param {number} age - Věk pojištěnce.
     * @param {string} phone - Telefonní číslo pojištěnce.
     */
    constructor(firstName, lastName, age, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phone = phone;
    }
    
    /**
     * Vrátí textovou reprezentaci pojištěnce.
     * @returns {string} - Textová reprezentace pojištěnce.
     */
    toString() {
        return `${this.firstName} ${this.lastName}, věk ${this.age}, telefon ${this.phone}`;
    }
}
