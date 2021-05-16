fetch('../response-data.csv')
    .then(response => response.text())
    .then(text => d3.csvParse(text, d3.autoType))
    .then(data => {
        data.forEach(d => {
            delete d.ADUR;

            if (d.ADY === 1)
                d.ADY = Math.ceil(Math.random()*-28);
        });

        const recist = animatedSwimmerPlot(
            data.filter(d => d.PARAMCAT === 'RECIST 1.1'),
            '#container',
            {
                stratum_var: 'SEX',
            }
        );
    });
