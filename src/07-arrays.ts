(() => {

  let price = [1,2,4,5,6,7,3]
  console.log('price', price)
  price.push(4)
  console.log('price', price)
  price = [2,3,1,2,3]
  console.log('price', price)

  let price2 = [1,2,4,5, 'log', true]
  console.log('price2', price2)
  price2.push(4)
  console.log('price2', price2)
  price2.push(true)
  console.log('price2', price2)
  // Tambien puede haber un string con diferentes tipos de datos y hacerle push a diferentes datos


  let product = ['banana', true];
  // aqui no puedo hacerle push y enviar un dato diferente con el que inicialice el array
  // aqui tendria que hacerlo de manera explicita para poder agregar un number

  let mix: (number | string | boolean | Object)[] = [4,5, true]
  console.log('mix', mix)
  mix.push('banana')
  console.log('mix', mix)
  console.log({});
  //Tambien podemos agregar objetos pero no es recomendable para el manejo de errores en el modulo 5 lo veremos de mejor manera.

  let price4 = [1,2,4,5,6,7,3]
  price4.map(item => item*4);
})()
