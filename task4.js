class UberPrice {
  constructor() {
    this.pricePerKm = 8;
  }
  totalPrice(kmTravelled) {
    return this.pricePerKm * kmTravelled;
  }
}

const uberPrice = new UberPrice();
priceAmount = uberPrice.totalPrice(15);
console.log(priceAmount);
