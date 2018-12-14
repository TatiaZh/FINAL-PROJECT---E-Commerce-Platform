class Product {
  constructor({ id, title, text, sender, dateSent }) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.sender = sender;
    this.dateSent = dateSent;
    this.responded = false;
  }
}

module.exports = Product;
