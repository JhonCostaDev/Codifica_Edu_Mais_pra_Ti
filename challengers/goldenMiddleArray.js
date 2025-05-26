// Given are two arrays a and b, both have three elements. Return a new array of length 2 containing both middle (index 1) elements of the arrays.

function goldenMiddle(a, b) {
    return [a[1], b[1]];
}




console.log(goldenMiddle(
  [1,6,8],
  [4,6,2]
))

goldenMiddle(
  [4,7,2],
  [2,6,4]
)

goldenMiddle(
  [2,6,1],
  [2,2,5]
)

goldenMiddle(
  [9,2,5],
  [6,7,6]
)