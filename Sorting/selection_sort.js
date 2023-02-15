// Selection Sort

// 첫 번째 값으로 시작.
// 첫 번째 값과 비교하며 최솟값을 찾은 후 자리를 swap.
// 정렬된 값은 다시 비교하지 않는다.

let data = [39, 21, 4, 41, 50, 44, 29, 11, 17, 2];

function selection( arr ) {
  for ( let i = 0; i < arr.length; i++ ) {
    let min = i;
    for ( let j = i + 1; j < arr.length; j++ ) {
      if ( arr[j] < arr[min] ) {
        min = j;
      }
    }
    if ( i !== min ) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  console.log( arr );
  return arr;
}

selection( data );


