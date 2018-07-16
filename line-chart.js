var dataArray = [
  {x: 50, y:1},
  {x: 76, y:10},
  {x: 100, y:3},
  {x: 130, y:20},
  {x: 200, y:60},
  {x: 250, y:50}
];

var height = 400;

var svg = d3.select("body").append("svg").attr("height", "400px").attr("width", "100%");

var line = d3.line()
          .x(function(d,i){return d.x*6;})
          .y(function(d,i){return height - (d.y*4);});

svg.append("path")
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("d", line(dataArray));
