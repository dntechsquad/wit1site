var dataArray = [
  {x: 50, y:1},
  {x: 76, y:10},
  {x: 100, y:3},
  {x: 130, y:20},
  {x: 200, y:60},
  {x: 250, y:50}
];

//Making variables for width and height so we can adjust easier
var height = 300;
var width = 1200;

//Creates the svg div (container where all the elements of the chart goes)
var svg = d3.select("body").append("svg").attr("height","400px").attr("width", "100%");

//Making the y axis
var y = d3.scaleLinear()
        .domain([0, 60])
        .range([height, 0]);

//Making the x axis
var x = d3.scaleLinear()
        .domain([0, 260])
        .range([0, width]);


//Drawing the labels on the y axis
var yAxis = d3.axisLeft(y);

//Drawing the labels on the x axis
var xAxis = d3.axisBottom(x);

//Adding margins
var margin = {left:40, right:20, top: 10, bottom: 0};

//Making a group for all the elements
var chartGroup = svg.append("g").attr("transform","translate("+margin.left+", "+margin.top+")");

//Drawing the line
var line = d3.line()
          .x(function(d,i){return d.x*4.6;})
          .y(function(d,i){return height - (d.y*5);});

chartGroup.append("path")
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("d", line(dataArray));

//y Axis
chartGroup.append("g").attr("class", "axis y").call(yAxis);

//x axis
chartGroup.append("g")
          .attr("transform", "translate(0,"+height+")")
          .attr("class", "axis x").call(xAxis);
