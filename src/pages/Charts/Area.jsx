import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, Border, SplineAreaSeries } from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../data/dummy';
import { useSateContext } from '../../context/ContextProvider';
import { Header } from '../../components';
const Area = () => {
  const { currentMode } = useSateContext();
  return (
    <div className="m-4 md:m-10  mt-24 p-10 bg-white dark:bg-secondary-dark-bg  rounded-3xl  ">
      < Header category='chart' title='Inflation-Rate in percentage' />
      <ChartComponent
        id="area-chart"
        height='420px'
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? "#33373E" : '#fff'}
      >
        <Inject services={[DateTime, Legend, Tooltip, SplineAreaSeries]} />
        <SeriesCollectionDirective>
          {
            areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)
          }
        </SeriesCollectionDirective>
      </ChartComponent>
    </div >
  )

}

export default Area