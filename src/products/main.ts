import { aggProduct, calcStock, products } from "./product.service";

aggProduct({
  name: 'shirt',
  createAt: new Date,
  stock: 34,
  size: 'M',
});

aggProduct({
  name: 'shoes',
  createAt: new Date,
  stock: 44,
})

console.log(products);

const total = calcStock();

console.log(total);
