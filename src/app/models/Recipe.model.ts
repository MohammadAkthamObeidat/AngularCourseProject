export class Recipe {
  // Member Variables
  private name: String;
  private description: String;
  private imgUrl: String;

  /**
   *
   * @param name The name of Recipe.
   * @param description The description of Recipe.
   * @param imgUrl The imgUrl of Recipe.
   */
  constructor(name: String, description: String, imgUrl: String) {
    this.name = name;
    this.description = description;
    this.imgUrl = imgUrl;
  }

  //Getters & Setters

  /**
   * GetterName
   * @return {String}
   */
  public getName(): String {
    return this.name;
  }

  /**
   * GetterDescription
   * @return {String}
   */
  public getDescription(): String {
    return this.description;
  }

  /**
   * GetterImgUrl
   * @return {String}
   */
  public getImgUrl(): String {
    return this.imgUrl;
  }

  /**
   * SetterName
   * @param {String} name
   */
  public setName(name: String) {
    this.name = name;
  }

  /**
   * SetterDescription
   * @param {String} description
   */
  public setDescription(description: String) {
    this.description = description;
  }

  /**
   * SetterImgUrl
   * @param {String} imgUrl
   */
  public setImgUrl(imgUrl: String) {
    this.imgUrl = imgUrl;
  }
}
