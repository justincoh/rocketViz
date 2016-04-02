"use strict";
console.log('Script loaded');

let container = d3.select('#container')

let data = null;
let svg ={
    width:500,
    height: 500
};

d3.csv("./data/rocketLeagueStats_cleaned.csv",(d) => {
        console.log("loaded");
        console.log(d);
        data = d;
});

let xscale = d3.scale.ordinal(),
    yscale = d3.scale.linear();

xscale.range([0,svg.width]); //tbd
yscale.range([0,svg.height]);

