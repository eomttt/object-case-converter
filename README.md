# object-case-converter

## decamelize
```js
const object = {
  one: 1,
  twoThree: 23,
  fourFiveSix: {
    four: 4,
    fiVe: 5,
    sixSeven: 67,
  }
}

const res = decamelize(object)
/*
{
  one: 1,
  two_three: 23,
  four_five_six: { four: 4, fi_ve: 5, six_seven: 67 }
}
*/
```

## camelize
```js
const object = {
  one: 1,
  two_three: 23,
  four_five_six: { four: 4, five: 5, six_seven: 67 }
}

const res = camelize(object)
/*
{
  one: 1,
  twoThree: 23,
  fourFiveSix: { four: 4, fiVe: 5, sixSeven: 67 }
}
*/
```
