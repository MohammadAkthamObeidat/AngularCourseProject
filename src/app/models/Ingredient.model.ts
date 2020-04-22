export class Ingredient {
  /**
   *  This is a short way to declare class member variables and initialize them using constructor.
   * @param name The name of ingredient.
   * @param amount The amount of ingredient.
   */
  constructor(private name: String, private amount: Number) {}

  /**
   * GetterName
   * @return {String}
   */
  public getName(): String {
    return this.name;
  }

  /**
   * GetterAmount
   * @return {Number}
   */
  public getAmount(): Number {
    return this.amount;
  }

  /**
   * SetterName
   * @param {String} name
   */
  public setName(name: String) {
    this.name = name;
  }

  /**
   * SetterAmount
   * @param {Number} amount
   */
  public setAmount(amount: Number) {
    this.amount = amount;
  }
}
