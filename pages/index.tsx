import type { NextPage } from 'next'
import Head from 'next/head'
import {Page, Grid, Spacer, Text} from '@geist-ui/core'
import { Icon } from '@iconify/react'
import Twitter from '../components/twitter'
import Github from '../components/github'
import Medium from '../components/medium'
import Juno from '../components/juno'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>weggeworld</title>
        <meta name="description" content="made by wegge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Page>
          <Page.Header>
            <Text h1 style={{ letterSpacing: '-1.75px' }}>weggeworld🌎</Text>
          </Page.Header>
          <Page.Content>
            <Text h3>hello everyone!</Text>
            <Text p>here is where you can find my stuff:</Text>
            <Grid.Container gap={1.5}>
              <Twitter />
              <Github />
              <Medium />
              <Juno />
              <Spacer h={6}/>
            </Grid.Container>
          </Page.Content>
          <Page.Footer>
            <Text h2 style={{ letterSpacing: '1px', fontWeight: "400" }} >made by wegge</Text>
          </Page.Footer>
        </Page>
    </div>
  )
}

export default Home
