import React from 'react'
import { ChartComponent, SeriesCollectionDirective, seriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries, SeriesDirective, Border } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy';
import { useSateContext } from '../../context/ContextProvider';

const LineCharts = () => {
  const { currentMode } = useSateContext();
  return (
    <ChartComponent
      id="line-chart"
      height='420px'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? "#33373E" : '#fff'}
    >
      <Inject services={[DateTime, Legend, Tooltip, LineSeries]} />
      <SeriesCollectionDirective>
        {
          lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)
        }
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineCharts