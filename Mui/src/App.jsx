import React from 'react'
import Card from './Components/Card'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid2';

const App = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Card/>
        </Grid>
      </Container>
    </div>
  )
}

export default App