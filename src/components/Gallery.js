import React, { Component } from "react"
import { Card, CardContent, CardMedia, Grid} from "@material-ui/core"
import Image from 'material-ui-image'


export default class Gallery extends Component {
    render() {
        return (
            <>
                <Grid container justify="end" spacing={3}>
                    <Grid item md={3}>
                        <Card>
                            <CardMedia>
                                <Image src="./images/haman_ears.jpeg" animationDuration="4000" disableSpinner />
                            </CardMedia>
                            <CardContent>אזני ההמן</CardContent>
                        </Card>
                    </Grid>
                    {/* <Grid item md={3}>
                        <Card>
                            <CardMedia>
                                <Image src="./images/virus.png" animationDuration="4000" disableSpinner />
                            </CardMedia>
                            
                        </Card>
                    </Grid> */}
                    <Grid item md={3}>
                        <Card>
                            <CardMedia>
                                <Image src="./images/corona_check.jpeg" animationDuration="4000" disableSpinner />
                            </CardMedia>
                            <CardContent>זוסמן לאחר אכילת אזני ההמן</CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </>

        )
    }

} 