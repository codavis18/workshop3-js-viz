window.onload = function(){
  function color(d){
    return d.color;
  }
  function radius(d){
    return d.r + "px";
  }
  function cx(d){
    return d.cx + "px";
  }
  function changeColor(d){
    return "blue";
  }

  function zoomed(){
    svgMap.select('path')
          .attr('transform', 'translate(' + d3.event.translate + ')scale(' + d3.event.scale + ')' );
  }

  // ADD THE attributesEnter HERE!
  // var attributesEnter = ;

  var zoom = d3.behavior.zoom()
                      .scaleExtent([1, 5])
                      .on("zoom", zoomed);

  var svgCircles = d3.select("svg.circles");
  var svgMap = d3.select("svg.map").call(zoom);

  var attributes = [{color: 'red', r: 40, cx: 100},  //example line
                    {color: 'orange', r: 20, cx:75},
                    {color: 'yellow' r: 15, cx:80},
                    {color: 'green', r: 50, cx:30}];

  var circles = svg.selectAll('circle')
    .data(attributes)
    .enter()
    .append("circle")
    .attr('fill', color)
    .attr('r', radius)
    .attr('cx', cx)
    .attr('cy', '50px');

  // ADD THE attributesExit HERE! Remember to repeat at least one of the elements of attributesEnter
  // var attributesExit = ;
  //
  // svgCircles.selectAll('circle')
  //             .data(attributesExit)
  //             .exit()
  //             .attr("fill", changeColor);
};
