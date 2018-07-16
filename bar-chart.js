var sessionArray = [1, 2, 3];
var timestampArray = [30, 45, 750];

var height = 150;
//Creates the svg div (container where all the elements of the chart goes)
var svg = d3.select(".bar-chart").append("svg").attr("height","200px").attr("width", "100%");

//Making the y axis
var y = d3.scaleLinear()
        .domain([0, 750])
        .range([height, 0]);

//Making the x axis
var x = d3.scaleLinear()
        .domain([0, 3])
        .range([0, 200]);


//Drawing the labels on the y axis
var yAxis = d3.axisLeft(y);

//Drawing the labels on the x axis
var xAxis = d3.axisBottom(x);

//Adding margins
var margin = {left:40, right:20, top: 0, bottom: 0};

//Making a group for all the elements
var chartGroup = svg.append("g").attr("transform","translate("+margin.left+", "+margin.top+")");

//Drawing
//rectangles
chartGroup.selectAll("rect")
  .data(timestampArray)
  .enter().append("rect")
  .attr("height",function(d,i){return d;})
  .attr("width","50")
  .attr("x",function(d,i){return 60*i;})
  .attr("y",function(d,i){return height -(d);});

//y Axis
chartGroup.append("g").attr("class", "axis y").call(yAxis);

//x axis
chartGroup.append("g")
  .attr("transform", "translate(0,"+height+")")
  .attr("class", "axis x").call(xAxis);
