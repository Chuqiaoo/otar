import React from 'react';
import {RadarAxis, RadarChart} from "@mui/x-charts";
import {Title} from "./Bars.jsx";
import {formatId} from "../Helpers/help.jsx";


function Radar({data}) {

    const barData = data.datatypeScores;
    const ids = barData.map(item => formatId(item.id));
    const scores = barData.map(item => item.score);

    return (
        <div>
            <Title symbol={data.target.approvedSymbol}/>
            <RadarChart
                shape="circular"
                series={[{label: 'Genetic Association', data: scores}]}
                radar={{
                    max: 1,
                    metrics: ids
                }}
                height={300}
            >
                <RadarAxis
                    metric={ids[0]}
                    divisions={4}
                    labelOrientation="horizontal"
                    angle="30"
                />
            </RadarChart>
        </div>

    );
}

export default Radar;



