import {Button, Page, Card, Grid, Text, Link} from '@geist-ui/core'
import { Icon } from '@iconify/react'

function Github() {
    return(
        <Grid xs={12} justify="center">
          <Card width="100%" margin="20px">
            <Text h4 my={0}>Github</Text>
            <Text><Icon icon="icon-park:github" width="64" height="64"></Icon></Text>
            <Card.Footer>
              <Link color target="_blank" href="https://github.com/0x-wegge">https://github.com/0x-wegge</Link>
            </Card.Footer>
          </Card>
        </Grid>
    )
}

export default Github