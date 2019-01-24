# [Intermediate Algorithm Scripting: Map the Debris](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris)

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format `{name: 'name', avgAlt: avgAlt}`.

You can read about orbital periods [on Wikipedia](http://en.wikipedia.org/wiki/Orbital_period).

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

## Setup
```js
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
```

## Solution 1
```js
// Basic Code: Using for...in, Math.PI, Math.pow, Math.sqrt, Math.round, and push
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];
  const getOrbPeriod = function(obj) {
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  };

  for (let elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); // [{"name":"sputnik","orbitalPeriod":86400}]
```

## Solution 2
```js
// Intermediate Code: Using for...in, Math.PI, Math.pow, Math.sqrt, and Math.round
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  //Looping through each key in arr object
  for (let prop in arr) {
    //Rounding off the orbital period value
    const orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM));
    //deleting the avgAlt property
    delete arr[prop].avgAlt;
    //adding orbitalPeriod property
    arr[prop].orbitalPeriod = orbitalPer;
  }

  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); // [{"name":"sputnik","orbitalPeriod":86400}]
```

## Solution 3
```js
// Advanced Code: Using forEach, Math.PI, Math.pow, Math.sqrt, and Math.round
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  // Loop through each item in the array arr
  arr.forEach(function(item) {
    // Calculate the Orbital period value
    const tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));
    //Delete the avgAlt property
    delete item.avgAlt;
    //Add orbitalPeriod property
    item.orbitalPeriod = tmp;
  });
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); // [{"name":"sputnik","orbitalPeriod":86400}]
```