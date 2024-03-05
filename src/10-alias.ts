(()=> {
  type UserID = string | number;
  let userId: UserID;


  // literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtZine: Sizes;
  shirtZine = 'M';
  shirtZine = 'L';
  shirtZine = 'XL';
  // shirtZine = 'sd'
  // shirtZine = 's'

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLocaleLowerCase()}`);
    }
  }

  greeting('hello', 'L');

})()
