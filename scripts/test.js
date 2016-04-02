"use strict";
console.log('Script loaded');

let container = d3.select('#container')

let data = null;

d3.csv("./data/rocketLeagueStats_cleaned.csv",(d) => {
        console.log("loaded");
        console.log(d);
        data = d;
});


