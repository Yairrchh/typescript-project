(() =>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes,

  ) {
    return {
      title,
      createAt,
      stock,
      size,
    }
  }

  const product1 = createProductToJson('shirt', new Date, 23, 'S')
  console.log(product1),
  console.log(product1.createAt)
  console.log(product1.size)


  const createProductToJsonV2 = (
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes

  ) => {
    return {
      title,
      createAt,
      stock,
      size,
    }
  }

  const product2 = createProductToJsonV2('shirt', new Date, 23,)
  console.log(product2),
  console.log(product2.createAt)
  console.log(product2.size)
})()
