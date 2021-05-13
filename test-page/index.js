//fetch('../../data-library/data/clinical-trials/adam/adrs.csv')
fetch('./response-data.csv')
    .then(response => response.text())
    .then(text => d3.csvParse(text, d3.autoType))
    .then(data => {
        console.log(data);
        data.forEach(d => {
            delete d.ADUR;
            if (d.ADY === 1)
                d.ADY = Math.ceil(Math.random()*-28);
        });

        const instance = animatedSwimmerPlot(
            data,
            '#container',
            {
                stratum_var: 'SEX',
            }
        );
    });
