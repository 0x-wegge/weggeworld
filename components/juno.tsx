import {Button, Page, Card, Grid, Text, Link} from '@geist-ui/core'
import { Icon } from '@iconify/react'

function Juno() {
    return(
      <Grid lg={12} xl={12} justify="center" alignContent="center">
          <Card width="100%" margin="25px">
            <Text h4 my={0}>Juno</Text>
            <Link target="_blank" href="https://dens.sh/dens::wegge">
              <Icon icon="icon-park:blockchain" width="64" height="64"></Icon>
            </Link>
            <Grid xs={0} sm={0} md={0} lg={12} xl={12}>
            <Card.Footer>
              <Link color target="_blank" href="https://dens.sh/dens::wegge">https://dens.sh/dens::wegge</Link>
            </Card.Footer>
            </Grid>
          </Card>
        </Grid>
    )
}

export default Juno