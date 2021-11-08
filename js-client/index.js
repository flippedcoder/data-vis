var data = [{
        "year": "2010",
        "amount": 134
    },
    {
        "year": "2011",
        "amount": 156
    },
    {
        "year": "2012",
        "amount": 190
    },
    {
        "year": "2013",
        "amount": 100
    },
    {
        "year": "2014",
        "amount": 138
    },
    {
        "year": "2015",
        "amount": 165
    },
    {
        "year": "2016",
        "amount": 84
    },
    {
        "year": "2017",
        "amount": 122
    },
    {
        "year": "2018",
        "amount": 167
    },
    {
        "year": "2019",
        "amount": 198
    },
    {
        "year": "2020",
        "amount": 176
    }
]

var svg = d3.select("#data-vis-container")

var margin = 200,
    width = svg.attr("width") - margin,
    height = svg.attr("height") - margin

svg.append("text")
    .attr("transform", "translate(100,0)")
    .attr("x", 50)
    .attr("y", 50)
    .attr("font-size", "24px")
    .text("Example fluctuations")

var xScale = d3.scaleBand().range([0, width]).padding(0.4),
    yScale = d3.scaleLinear().range([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + 100 + "," + 100 + ")");

xScale.domain(data.map(function(d) { return d.year; }));
yScale.domain([0, d3.max(data, function(d) { return d.amount; })]);

g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale))
    .append("text")
    .attr("y", height - 250)
    .attr("x", width - 100)
    .attr("text-anchor", "end")
    .attr("stroke", "black")
    .text("Year");

g.append("g")
    .call(d3.axisLeft(yScale).tickFormat(function(d) {
            return "*" + d;
        })
        .ticks(10))
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "-5.1em")
    .attr("text-anchor", "end")
    .attr("stroke", "black")
    .text("Amount");

g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return xScale(d.year); })
    .attr("y", function(d) { return yScale(d.amount); })
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) { return height - yScale(d.amount); })
    .attr("fill", "#0d4aa5");