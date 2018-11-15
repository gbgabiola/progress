# [Manipulating Complex Objects](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects)

Sometimes you may want to store data in a _flexible Data Structure_. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of _strings_, _numbers_, _booleans_, _arrays_, _functions_, and _objects_.

Here's an example of a complex data structure:

```js
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
```

This is an array which contains one object inside. The object has various pieces of _metadata_ about an album. It also has a nested `"formats"` array. If you want to add more album records, you can do this by adding records to the top level array.

Objects hold data in a property, which has a key-value format. In the example above, `"artist": "Daft Punk"` is a property that has a key of `"artist"` and a value of `"Daft Punk"`.

[JavaScript Object Notation](http://www.json.org/) or `JSON` is a related data interchange format used to store data.

```js
{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
```

**Note**  
You will need to place a comma after every object in the array, unless it is the last object in the array.

---

Add a new album to the `myMusic` array. Add `artist` and `title` strings, `release_year` number, and a `formats` array of strings.

## Setup

```js
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  // Add record here
];
```

## Solution

```js
{
  artist: "Chris Tomlin",
  title: "Arriving",
  release_year: 2004,
  formats: [
    "CD",
    "Cassette",
    "LP"
  ]
}
```