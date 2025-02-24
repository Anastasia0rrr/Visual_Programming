"use strict";

import {orderBy} from './orederBy.js';

let User =[ 
    {name: "Mars", age: 43},
    {name: "Piter", age: 5},
    {name: "Ruben", age: 19},
    {name: "Fogot", age: 109},
    {name: "Mars", age: 36},
];

const Sorted_User = orderBy(User, ["name", "age"]);

console.log("First array:", User);
console.log("Sorted array:", Sorted_User);

