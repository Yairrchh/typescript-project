(() => {

  let productPrice = 100;
  productPrice = 300;
  console.log('product Price', productPrice);

  let customAge: number = 28;
  //customAge = customAge + '1'
  customAge = customAge + 1;
  console.log('customAge ' + customAge);

  let productInStock: number;
  console.log('producInStock', productInStock)

  if (productInStock > 10) {
    console.log('is greater')
  }

  let discount = parseInt('100');
  console.log('discount', discount);
  if (discount < 200) {
    console.log('apply');
  } else {
    console.log('no apply');
  }


  let hex = 0xfff;
  console.log('hex', hex);

  let bin = 0b101010; //10
  console.log('bin', bin);

  const myNumber: Number = 10; // No, we have to do it in lowercase

})();
