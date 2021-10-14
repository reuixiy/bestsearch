import { Grid, Skeleton as SkeletonMUI } from '@mui/material'

const Skeleton = () => {
  return [1, 2, 3, 4].map((item) => (
    <Grid item xs={12} sm={6} md={3} key={item}>
      <SkeletonMUI variant="text" width="75%" />
      <SkeletonMUI variant="text" width="40%" />
      <SkeletonMUI variant="rectangular" height={180} sx={{ mt: '0.5em' }} />
    </Grid>
  ))
}

export default Skeleton
