fetch('../../data-library/data/clinical-trials/sdtm/rs.csv')
    .then(response => response.text())
    .then(text => d3.csvParse(text))
    .then(data => {
        console.log(data);
        const instance = animatedSwimmerPlot(
            data,
            '#container',
            {
            }
        );
    });
