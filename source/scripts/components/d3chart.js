import d3 from 'd3';

var d3Chart = {};

d3Chart.create = function(el, props, state) {
	var svg = d3.select(el).append('svg')
		.attr('class', 'd3')
		.attr('width', props.width)
		.attr('height', props.height);

	svg.append('g')
		.attr('class', 'd3-points');

	var g = d3.select(el).selectAll('.d3-points');

	g.append("path")
		.attr("class", "line");

	this.update(el, state);
};

d3Chart.update = function(el, state) {
	var scales = this._scales(el, state.domain);
	this._drawPoints(el, scales, state.data);
};

d3Chart.destroy = function(el) {
	//
};

d3Chart._drawPoints = function(el, scales, data) {
	var g = d3.select(el).selectAll('.d3-points');

	var line = d3.svg.line()
		.x(function(d) { return scales.x(d.index); })
		.y(function(d) { return d.val; });

	data.forEach(function(d, i) {
		d.index = i;
		d.val = +d.val;
	});

	var lineElm = g.select(".line");

	lineElm.datum(data)
		.attr("class", "line")
		.attr("d", line(data));
};

d3Chart._scales = function(el, domain) {
  if (!domain) {
    return null;
  }

  var width = el.offsetWidth;
  var height = el.offsetHeight;

  var x = d3.scale.linear()
    .range([0, width])
    .domain(domain.x);

  var y = d3.scale.linear()
    .range([height, 0])
    .domain(domain.y);

  var z = d3.scale.linear()
    .range([5, 20])
    .domain([1, 10]);

  return {x: x, y: y, z: z};
};

module.exports = d3Chart;
