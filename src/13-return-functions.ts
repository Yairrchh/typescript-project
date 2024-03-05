(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    })
    return total.toString();
  }

  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log(`el total es ${rta} `)
  }


  printTotal([200,230,143,398]);



})()
