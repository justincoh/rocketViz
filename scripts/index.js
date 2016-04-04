"use strict";

let container = d3.select('#container')

let data = null;
let svgWidth = window.innerWidth * .9,
    svgHeight = window.innerHeight * .9;

let names = [],
    colors = d3.scale.category20();
// import data
d3.csv("./data/rocketLeagueStats_cleaned.csv",(d) => {
        data = d;
        let headers = data.shift();

        //make type adjustments
        data.forEach(e=>{
            names.push(e['Vehicle']);
            for(let prop in e){
                if(prop !== 'Vehicle'){
                        e[prop] = parseInt(e[prop])
                }
            }
        });

        colors.domain(names)
        buildGraph(data,'Rankings');
});


// horizontal bar chart
// make it relative off screen size for mobile
let buildGraph = function(data, prop){

    //update header
    d3.select('h1').text(prop);

    let svg = d3.select('#container').append('svg')
            .attr('width',svgWidth)
            .attr('height',svgHeight)
            .style('overflow','visible'),
        xScale = d3.scale.linear(),
        yScale = d3.scale.ordinal(),
        xDomain = d3.extent(data, d => d[prop]);

    // set domains/ranges
    xScale.range([0,svgWidth])
        .domain(xDomain);
    yScale.range([svgHeight,0])
        .domain([names]);

    let yAxis = d3.svg.axis()
            .scale(yScale)
            .orient('left');

    svg.append('g')
        .attr('class','y-axis')
        .call(yAxis);

    // draw the bars
    let bars = svg.selectAll('bars')
        .data(data)
        .enter()
        .append('rect')
        .style('fill', d => colors(d['Vehicle']))
        .attr('width',d => xScale( d[prop]))
        .attr('height',svgHeight/data.length)
        .attr('y',(d,i)=>{return i* svgHeight/data.length})
}

let buildSvg = function(xScale, yScale){
    
}
