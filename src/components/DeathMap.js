import React, { Component } from 'react'
import countries from "../world_countries.json";
import { ResponsiveChoropleth } from '@nivo/geo'
import data from '../data';
import { render } from '@testing-library/react';

export default class DeathMap extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
        this.ConvertCountryCode = this.ConvertCountryCode.bind(this)
    }

    // componentDidMount(){
    //     parsedData = this.props.data.map()
    //     this.setState({data: this.props.data})
        
    // }

    ConvertCountryCode(code){
        const getCountryISO3 = require("country-iso-2-to-3");
        return(getCountryISO3(code))
    }

    render() {
        const HeatMap = ({data}) => (
            <ResponsiveChoropleth
                data={data}
                features= {countries.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="reds"
                domain={[ 0, 1000000 ]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionTranslation={[ 0.5, 0.5 ]}
                projectionRotation={[ 0, 0, 0 ]}
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
        )
        return (
            <div style={{ height: "400px" }}>
                <HeatMap data={data} />
            </div>
        )
    }
    
}






