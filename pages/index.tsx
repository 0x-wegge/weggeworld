import type { NextPage } from 'next'
import Head from 'next/head'
import {Page, Grid, Spacer} from '@geist-ui/core'
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
            <h1>weggeworld 🌎</h1>
          </Page.Header>
          <Page.Content>
            <h2>hello everyone!</h2>
            <p>here is where you can find my stuff:</p>
            <Grid.Container gap={1.5}>
              <Twitter />
              <Github />
              <Medium />
              <Juno />
              <Spacer h={6}/>
            </Grid.Container>
          </Page.Content>
          <Page.Footer>
            <h2>made by wegge - 🌎</h2>
          </Page.Footer>
        </Page>
    </div>
  )
}

export default Home
