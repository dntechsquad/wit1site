var sessionArray = [1, 2, 3]
var timestampArray = [30, 45, 750]

//Creates the svg
var svg = d3.select(".bar-chart").append("svg").attr("height","200px").attr("width", "100%");

//Making the y axis
var y = d3.scaleLinear()
        .domain([0, 750])
        .range([150, 0]);

var yAxis = d3.axisLeft(y);

var margin = {left:40, right:20, top: 0, bottom: 0};

var chartGroup = svg.append("g").attr("transform","translate("+margin.left+", "+margin.top+")");

//Making rectangles
chartGroup.selectAll("rect")
  .data(timestampArray)
  .enter().append("rect")
  .attr("height",function(d,i){return d;})
  .attr("width","50")
  .attr("x",function(d,i){return 60*i;})
  .attr("y",function(d,i){return 150 -(d);});

chartGroup.append("g").attr("class", "axis y").call(yAxis);
