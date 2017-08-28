function evenRound( arr ) {
  const decimal = -~arr.map(function( a ){ return a % 1; })
    .reduce(function( a, b ){ return a + b; }); // Ceil of total sum of decimals
  for ( let i = 0; i < decimal; ++i ) {
    if (arr[ i ]) {
      arr[ i ] = ++arr[ i ]; // compensate error by adding 1 the the first n items
    }
  }
  return arr.map(function( a ){ return ~~a; }); // floor all other numbers
}

const calculateValuePercentArray = (total, values): number[] => {
  let valuePercentArray = [];
  let percentSum = 0;

  values.forEach((value) => {
    let percentValue = value / total * 100;
    let roundedPercentValue = Math.round(percentValue);

    percentSum += roundedPercentValue;

    valuePercentArray.push(roundedPercentValue);
  });

  if (percentSum !== 100) {
    valuePercentArray = evenRound(valuePercentArray);
  }

  return valuePercentArray;
};

export default calculateValuePercentArray;
