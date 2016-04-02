"use strict";
console.log('herro hans brix');

let container = d3.select('#container')

let data = null;

d3.csv("./data/rocketLeagueStats.csv",(d) => {
        console.log("loaded");
        console.log(d);
        data = d;
});


