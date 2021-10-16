import { ResponsiveContainer, AreaChart, Area } from 'recharts'
import * as Utils from '../utils'

const Chart = ({ product, index }) => {
  const colorEven = '141, 181, 213'
  const colorOdd = '142, 198, 170'
  const opacity = '0.6'

  const conditionalFillFirst = {
    fill: index % 2 === 0 ? `rgb(${colorEven})` : `rgb(${colorOdd})`,
  }
  const conditionalFillSecond = {
    fill:
      index % 2 === 0
        ? `rgba(${colorEven}, ${opacity})`
        : `rgba(${colorOdd}, ${opacity})`,
  }

  return (
    <ResponsiveContainer width="100%" aspect={1.618}>
      <AreaChart
        data={Utils.processMSV(product.search_msv)}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <Area
          type="monotone"
          isAnimationActive={false}
          dataKey="sv"
          stroke="none"
          {...conditionalFillFirst}
        />

        <Area
          type="linear"
          isAnimationActive={false}
          dataKey="svc"
          stroke="none"
          {...conditionalFillSecond}
          connectNulls={true}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default Chart
