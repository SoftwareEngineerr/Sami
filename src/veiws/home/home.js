import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import { Firstsection } from './components/firstsection'
import { Secondsection } from './components/secondsection'
import { Thirdsection } from './components/thirdsection'
import PageContainer from '../../components/pagetitle'

export const Home = (props) => {
  return (
    <>
        <PageContainer title="Home" description="this is Home page">
            <Grid container lg={12}>
                <Firstsection />
                <Secondsection />
                <Thirdsection />
            </Grid>
        </PageContainer>
    </>
  )
}