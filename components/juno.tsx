import {Button, Page, Card, Grid, Text, Link} from '@geist-ui/core'
import { Icon } from '@iconify/react'

function Juno() {
    return(
        <Grid xs={12} justify="center">
          <Card width="100%" margin="20px">
            <Text h4 my={0}>Juno</Text>
            <Text><Icon icon="icon-park:blockchain" width="64" height="64"></Icon></Text>
            <Card.Footer>
              <Link color target="_blank" href="https://dens.sh/dens::wegge">https://dens.sh/dens::wegge</Link>
            </Card.Footer>
          </Card>
        </Grid>
    )
}

export default Juno