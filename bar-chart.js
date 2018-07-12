var sessionArray = [1, 2, 3]
var timestampArray = [30, 45, 12000]

//Creates the svg
var svg = d3.select(".bar-chart").append("svg").attr("height","100%").attr("width", "100%");

svg.selectAll("rect")
  .data(timestampArray)
  .enter().append("rect")
  .attr("height",function(d,i){return d;})
  .attr("width","50")
  .attr("x",function(d,i){return 60*i;})
  .attr("y","0");
