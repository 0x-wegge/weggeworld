import {Button, Page, Card, Grid, Text, Link} from '@geist-ui/core'
import { Icon } from '@iconify/react'

function Medium() {
    return(
        <Grid lg={12} xl={12} justify="center" alignContent="center">
          <Card width="95%" margin="25px">
            <Text h4 my={0}>Medium</Text>
            <Link color target="_blank" href="https://medium.com/@0xwegge">
              <Icon icon="icon-park:abnormal" width="64" height="64"></Icon>
            </Link>
            <Grid xs={0} sm={0} md={0} lg={12} xl={12}>
            <Card.Footer>
              <Link color target="_blank" href="https://medium.com/@0xwegge">https://medium.com/@0xwegge</Link>
            </Card.Footer>
            </Grid>
          </Card>
        </Grid>
    )
}

export default Medium
