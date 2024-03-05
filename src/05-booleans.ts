(() => {
  let isEnable = true;
  //implicit

  let isActive: boolean = false;
  //explicitly

  const random = Math.random();
  console.log('random', random);

  const isNew = random >= 0.5? true : false;
  console.log('isNew', isNew);

})();
