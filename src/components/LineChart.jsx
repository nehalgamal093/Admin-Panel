
import { ResponsiveLine } from "@nivo/line";

import { mockLineData as data } from "../data/mockData";

const LineChart = ({isDashboard =false}) => (
<ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        theme={{
            axis:{
                domain:{
                    line:{
                        stroke:"white"
                    }
                }, 
                legend:{
                    text:{
                        fil:"white"
                    }
                },
                ticks:{
                    line:{
                       stroke: "white",
                       strokeWidth:1
                    },
                    text:{
                        fill:"white"
                    }
                }

            },
            legends:{
                text:{
                    fill:"white"
                }
            },
            tooltip:{
                container:{
                    color:"white"
                }
            }
        }}
        colors={
            isDashboard?{ datum:"color"} :{scheme:"nivo"}
        }
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,

            tickPadding: 5,
            tickRotation: 0,
            legend:isDashboard? undefined:  'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
        
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickValues:5,
            tickRotation: 0,
            legend: isDashboard? undefined :'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'white',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'white',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
);

export default LineChart

//3:09:18