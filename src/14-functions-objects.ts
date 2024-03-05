(() => {
  // const login = (email: string, password: string) => {
  //   console.log(email, password)
  // }

  // login('chirayair@gmail.com', '25829856') Forma normal de resivir datos en mi fuctions.


  const login = (data:{email: string, password: string}) => {
    console.log(data)
  }

  login({
    email: 'chirayair@gmail.com',
    password:'25829856',
  })

  const products: any[] = [];
  type Sizes = 'S' | 'M' | 'L' | 'XL';


  const aggProduct = ( data:{
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }
  ) => {
    products.push(data)
  }

  aggProduct({
    title: 'shirt',
    createAt: new Date,
    stock: 34,
    size: 'M',
  })

  console.log(products)

})();
