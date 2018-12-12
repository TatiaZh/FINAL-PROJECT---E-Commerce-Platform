class Product {
  constructor({ id, title, desc, price, images, stock, nutritionFacts }) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.price = price;
    this.images = images;
    this.stock = stock;
    this.timesBought = 0;
    this.nutritionFacts = nutritionFacts;
    this.reviews = [];
    this.enabled = true;
  }

  static update(
    oldProd,
    { title, desc, price, images, stock, nutritionFacts }
  ) {
    oldProd.title = title || oldProd.title;
    oldProd.desc = desc || oldProd.desc;
    oldProd.price = price || oldProd.price;
    oldProd.images = images || oldProd.images;
    oldProd.stock = stock || oldProd.stock;
    oldProd.nutritionFacts = nutritionFacts || oldProd.nutritionFacts;
  }

  incTimesBought(quantity) {
    this.timesBought = this.timesBought + quantity;
  }

  updateReviews(review) {
    this.reviews.push(review);
  }

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }
}

module.exports = Product;
