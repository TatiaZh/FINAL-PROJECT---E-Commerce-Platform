class Product {
  constructor({ id, title, desc, price, images, stock, nutritionFacts }) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.price = price;
    this.images = images;
    this.stock = stock;
    this.timesBought = '0';
    this.nutritionFacts = nutritionFacts;
    this.reviews = [];
    this.enabled = true;
  }

  static update(
    oldProd,
    { title, desc, price, images, stock, nutritionFacts, timesBought }
  ) {
    oldProd.title = title || oldProd.title;
    oldProd.desc = desc || oldProd.desc;
    oldProd.price = price || oldProd.price;
    oldProd.images = images || oldProd.images;
    oldProd.stock = stock || oldProd.stock;
    oldProd.nutritionFacts = nutritionFacts || oldProd.nutritionFacts;
    oldProd.timesBought = timesBought || oldProd.timesBought;
  }

  static updateReviews(product, review) {
    product.reviews.push(review);
  }

  static updateAvrStars(product, avrStars) {
    product.avrStars = product.avrStars || avrStars;
  }

  static updateTimesBought(product, timesBought) {
    product.timesBought = product.timesBought || timesBought;
  }

  static updateStock(product, stock) {
    product.stock = product.stock || stock;
  }
}

module.exports = Product;
