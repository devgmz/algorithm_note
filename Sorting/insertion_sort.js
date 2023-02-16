//Insertion Sort

// 두 번째 원소부터 시작.
// 그 앞의 원소들과 비교하며 swap.
// index가 1일 때, 첫 번째 자료 => index가 2일 때, 두 번째와 첫 번째...
let data = [39, 21, 4, 41, 50, 44, 29, 11, 17, 2];

function insertion( arr ) {
  for ( let i = 1; i < arr.length; i++ ) {
    let temp = arr[i];
    let idx = i;
    while ( idx > 0 && temp < arr[idx - 1] ) {
      arr[idx] = arr[idx - 1];
      idx--;
    }
    arr[idx] = temp;
  }
  console.log( arr );
  return arr;
}

insertion( data );