var data = [
    {
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

// var gfgDb = opendatabase('mydb', '1.0', 'this is a client side database', 2 * 1024 * 1024);

// if (!gfgDb) {
//     alert('database not created');
// }
// else {
//     var version = gfgDb.version;
// }

async function callApis() {
    const users = await fetch("https://reqres.in/api/users")
    const products = await fetch("https://fakestoreapi.com/products")
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')

    await Promise.all([users, products, posts]).then(responses => {
        return responses.map(res => res.json())
    }).then(data => console.log(data))
}

callApis()

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(async (response) => {
        fetchedData = await response.json()
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

        xScale.domain(fetchedData.map(function (d) { return d.userId; }));
        yScale.domain([0, d3.max(fetchedData, function (d) { return d.id; })]);

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
            .call(d3.axisLeft(yScale).tickFormat(function (d) {
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
            .data(fetchedData)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return xScale(d.userId); })
            .attr("y", function (d) { return yScale(d.id); })
            .attr("width", xScale.bandwidth())
            .attr("height", function (d) { return height - yScale(d.id); })
            .attr("fill", "#0d4aa5");
    })

