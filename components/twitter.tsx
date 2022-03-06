import {Button, Page, Card, Grid, Text, Link} from '@geist-ui/core'
import { Icon } from '@iconify/react'

function Twitter() {
    return(
        <Grid xs={12} justify="center">
          <Card width="100%" margin="20px">
            <Text h4 my={0}>Twitter</Text>
            <Text><Icon icon="icon-park:twitter" width="64" height="64"></Icon></Text>
            <Card.Footer>
              <Link color target="_blank" href="https://twitter.com/0x_wegge">https://twitter.com/0x_wegge</Link>
            </Card.Footer>
          </Card>
        </Grid>
    )
}

export default Twitter