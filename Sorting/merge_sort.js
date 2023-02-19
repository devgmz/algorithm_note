// Merge Sort O(n+m)
let data = [39, 21, 4, 41, 50, 44, 29, 11, 17, 2];

function merge( arr1, arr2 ) {
  let result = [];
  let i = 0;
  let j = 0;
  
  while ( i < arr1.length && j < arr2.length ) {
    if (arr2[j] > arr1[i]) {
      result.push( arr1[i] );
      i++;
    } else {
      result.push( arr2[j] );
      j++;
    }
  }

  while ( i < arr1.length ) {
    result.push( arr1[i] );
    i++;
  }

  while ( j < arr2.length ) {
    result.push( arr2[j] );
    j++;
  }

  return result;
}

//recrusive
function mergeSort(arr) {
  if ( arr.length <= 1 ) return arr;
  let mid = Math.floor( arr.length / 2 );
  let left = mergeSort( arr.slice( 0, mid ) );
  let right = mergeSort( arr.slice( mid ) );

  return merge( left, right );
}

mergeSort( data );