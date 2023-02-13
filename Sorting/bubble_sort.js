// Bubble Sort

let data = [39, 21, 4, 41, 50, 44, 29, 11, 17, 2];

function bubble( arr ) {
  let noSwap;

  for ( let i = arr.length; i > 0; i-- ) {
    noSwap = true;
    for ( let j = 0; j < i - 1; j++ ){
      if ( arr[j] > arr[j + 1] ) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if ( noSwap ) break;
  }
  console.log( arr );
  return arr;
}

bubble( data );