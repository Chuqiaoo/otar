import React from 'react';
import {BarChart} from '@mui/x-charts/BarChart';
import {Typography} from "@mui/material";
import {formatId} from "../Helpers/help.jsx";
import {axisClasses} from "@mui/x-charts";


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
                    },
                ]}
                height={300}
                sx={{
                    [`.${axisClasses.left} .${axisClasses.label}`]: {
                        transform: 'translate(-20px, 0)', // applies to X axis labels for spacing
                    },
                    [`.${axisClasses.bottom} .${axisClasses.label}`]: {
                        transform: 'translate(0, 10px)',
                    },
                }}
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
