(() => {
  let userId: string | number;
  userId = 65;
  userId = 'jobs';


  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLocaleLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(2)}`);
    }
  }

  greeting('adasdas');
  greeting(7.24234234);

})();
