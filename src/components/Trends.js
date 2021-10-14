import { Typography, Paper, Grid, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Chart from '../components/Chart'
import * as Utils from '../utils'
import { CARD_DATE_FORMATE } from '../constants'
import Moment from 'react-moment'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  header: {
    position: 'absolute',
    width: '100%',
    padding: '1em',
  },
  title: {
    fontWeight: 300,
  },
  growth: {
    color: theme.palette.text.caption,
    fontSize: '0.85rem',
    marginTop: '0.5rem',
  },
  chart: {
    marginTop: '5rem',
  },
  footer: {
    color: theme.palette.text.caption,
    textAlign: 'center',
    fontSize: '0.85rem',
    padding: '0.5rem',
  },
}))

const Trends = ({ keywordS, productTrends }) => {
  const classes = useStyles()

  return (
    productTrends &&
    productTrends.map((product, index) => (
      <Grid item xs={12} sm={6} md={3} key={product.name}>
        <Paper variant="outlined" className={classes.root}>
          <Box className={classes.header}>
            <Typography component="h3" variant="h6" className={classes.title}>
              {Utils.formatTitle(product.name, keywordS)}
            </Typography>
            <Typography className={classes.growth}>
              {`Growth ${Utils.calcGrowth(product)}%`}
            </Typography>
          </Box>

          <Box className={classes.chart}>
            <Chart product={product} index={index} />
          </Box>

          <Typography className={classes.footer}>
            {/* Start date */}
            <Moment
              date={product.search_msv[0].date}
              format={CARD_DATE_FORMATE}
            />
            {` - `}
            {/* Final date */}
            <Moment
              date={product.search_msv[product.search_msv.length - 1].date}
              format={CARD_DATE_FORMATE}
            />
          </Typography>
        </Paper>
      </Grid>
    ))
  )
}

export default Trends
