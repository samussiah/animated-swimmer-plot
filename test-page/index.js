fetch('../../data-library/data/clinical-trials/adam/adrs.csv')
//fetch('./response-data.csv')
    .then(response => response.text())
    .then(text => d3.csvParse(text))
    .then(data => {
        data.forEach(d => {
            delete d.ADUR;
        });

        const instance = animatedSwimmerPlot(
            data,
            '#container',
            {
            }
        );
    });
