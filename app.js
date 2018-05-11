var width = 500;
var height = 500;
var padding = 20; //to avoid circles overflowing and being cut by the shape of the SVG

var yMax = d3.max(birthData2011, d => d.lifeExpectancy);
var yMin = d3.min(birthData2011, d => d.lifeExpectancy);

var yScale = d3.scaleLinear()
                .domain(d3.extent(birthData2011, d => d.lifeExpectancy))
                .range([height, 0]);

var xScale = d3.scaleLinear()
                .domain(d3.extent(birthData2011, d => d.births/d.population))
                .range([0, width]);

d3.select("svg")
    .attr("width", width)
    .attr("height", height)
  .selectAll("circle")
  .data(birthData2011)
  .enter()
  .append("circle")
    .attr("cx", d => xScale(d.births / d.population))
    .attr("cy", d => yScale(d.lifeExpectancy))
    .attr("r", 5);