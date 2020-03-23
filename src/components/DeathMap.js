import React, { Component, Fragment } from 'react'
import countries from "../world_countries.json";
import { ResponsiveChoropleth } from '@nivo/geo'
import data from '../data';
import { Typography } from '@material-ui/core';


export default function DeathMap(props) {
    return (
        <>
            <hr/>
            <h1 style={{color: "#0f4c75"}}>מפת חום - נפטרים</h1>

            <div style={{ height: "400px" }}>
                <ResponsiveChoropleth
                    data={props.data}
                    features={countries.features}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    colors="reds"
                    domain={[0, 100]}
                    unknownColor="#666666"
                    label="properties.name"
                    valueFormat=".2s"
                    projectionScale={130}
                    projectionTranslation={[0.5, 0.65]}
                    projectionRotation={[0, 0, 0]}
                    enableGraticule={true}
                    graticuleLineColor="#dddddd"
                    borderWidth={0.5}
                    borderColor="#152538"
                    legends={[
                        {
                            anchor: 'bottom-left',
                            direction: 'column',
                            justify: true,
                            translateX: 20,
                            translateY: -100,
                            itemsSpacing: 0,
                            itemWidth: 94,
                            itemHeight: 18,
                            itemDirection: 'left-to-right',
                            itemTextColor: '#444444',
                            itemOpacity: 0.85,
                            symbolSize: 18,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000000',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        </>
    )
}






