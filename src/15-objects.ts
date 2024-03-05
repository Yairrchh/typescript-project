(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  };

  const products: Product[] = [];

  const aggProduct = (data: Product) => {
    products.push(data)
  }

  aggProduct({
    title: 'shirt',
    createAt: new Date,
    stock: 34,
    size: 'M',
  })

  console.log(products)
  products.push({
    title: 'g',
    createAt: new Date,
    stock: 9,
  })
})()
