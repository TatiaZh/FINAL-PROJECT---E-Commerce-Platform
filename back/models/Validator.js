function validateProduct(product) {
  const { title, desc, price, images, stock, nutritionFacts } = product;
  if (typeof title !== 'string' || typeof desc !== 'string') {
    return {
      error:
        'product mus have title/desc parameters and they must be in string format'
    };
  }
  if (!price || !stock) {
    return { error: 'product must have price and stock parameters' };
  }
  if (!(images instanceof Array)) {
    return {
      error: 'product must have images parameter and it must be in array format'
    };
  }
  return { title, desc, price, images, stock, nutritionFacts };
}

module.exports = validateProduct;
