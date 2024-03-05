(() =>{

  let productTitle = 'My product';

  // productTitle = 1212 error.

  productTitle = 'My product changes'
  console.log('productTitle', productTitle)


  let productTitle2: string = 'My product 2'
  let number = 30;
  let isBoolean = true;

  const sum = `
  title: ${productTitle}
  description: ${productTitle2}
  number: ${number}
  boolean: ${isBoolean}
  `;

  console.log('sum',sum)
})();
