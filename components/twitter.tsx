import {Button, Page, Card, Grid, Text, Link} from '@geist-ui/core'
import { Icon } from '@iconify/react'

function Twitter() {
    return(
        <Grid lg={12} xl={12} justify="center" alignContent="center">
          <Card width="100%" margin="25px">
            <Text h4 my={0}>Twitter</Text>
            <Link color target="_blank" href="https://twitter.com/0x_wegge">
              <Icon icon="icon-park:twitter" width="64" height="64"></Icon>
            </Link>
            <Grid xs={0} sm={0} md={0} lg={12} xl={12}>
            <Card.Footer>
              <Link color target="_blank" href="https://twitter.com/0x_wegge">https://twitter.com/0x_wegge</Link>
            </Card.Footer>
            </Grid>
          </Card>
        </Grid>
    )
}

export default Twitter