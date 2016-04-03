"use strict";

let container = d3.select('#container')

let data = null;
let svgWidth = window.innerWidth * .8,
    svgheight = 500;

// import data
d3.csv("./data/rocketLeagueStats_cleaned.csv",(d) => {
        data = d;
        let headers = data.shift();

        //make type adjustments
        data.forEach(e=>{
            for(let prop in e){
                if(prop !== 'Vehicle'){
                        e[prop] = parseInt(e[prop])
                }
            }
        });

        buildGraph(data,'Rankings');
});


// horizontal bar chart
// make it relative off screen size for mobile
let buildGraph = function(data, prop){

    let svg = d3.select('#container').append('svg')
            .attr('width',svgWidth)
            .attr('height',svgHeight),
        xScale = d3.scale.linear(),
        yScale = d3.scale.ordinal(),
        xDomain = d3.extent(data => data[prop]);

    // set domains/ranges
    xScale.range([0,svg.width])
        .domain(xDomain);
    yScale.range([0,svg.height]);

    let yAxis = d3.svg.axis()
            .scale(yScale);

    svg.append('g')
        .attr('class','y-axis')
        .call(yAxis);
}

let buildSvg = function(xScale, yScale){
    
}
