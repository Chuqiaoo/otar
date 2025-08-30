import React from 'react';
import {BarChart} from '@mui/x-charts/BarChart';
import {Typography} from "@mui/material";
import {formatId} from "../Helpers/help.jsx";


function Bars({data}) {

    const barData = data.datatypeScores;

    return (
        <div>
            <Title symbol={data.target.approvedSymbol}/>
            <BarChart
                dataset={barData}
                xAxis={[{
                    dataKey: 'id',
                    label: 'Data Type',
                    valueFormatter: (id) => formatId(id)
                }]}
                series={[{dataKey: 'score'}]}
                yAxis={[
                    {
                        min: 0,
                        max: 1,
                        tickNumber: 5, // custom tick value
                        valueFormatter: (value) => value.toFixed(3),
                        label: 'Association Score',
                        labelSytle: {paddingRight: 5}
                    },
                ]}
                height={300}
            />
        </div>

    );
}

export function Title({symbol}) {
    return (
        <Typography align={"center"} paddingBottom={2}>Data Type Score: {symbol} and lung
            carcinoma</Typography>
    )
}


export default Bars;
