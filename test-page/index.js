//fetch('../../data-library/data/clinical-trials/sdtm/rs.csv')
fetch('./response-data.csv')
    .then(response => response.text())
    .then(text => d3.csvParse(text))
    .then(data => {
        const instance = animatedSwimmerPlot(
            data,
            '#container',
            {
            }
        );
    });
