(() => {
  // let myNumber: number = undefined; X
  // let myString: string = undefined; X

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null; //
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString= 'aas';

  // function hi2(name: string | null) {
  //   let hello = 'hello';
  //   if(name) {
  //     hello += 'name';
  //   } else {
  //     hello += 'no Body';
  //   }
  //   console.log(hello)
  // }

  function hi(name: string | null) {
    let hello = 'hello';
    hello += name?.toLocaleLowerCase() || 'no body';
    console.log(hello)
  }



  hi('yair');
  hi(null);
})()
