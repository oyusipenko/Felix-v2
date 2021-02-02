import React from "react";
import Grid from "@material-ui/core/Grid";

export default function MainContainer(props) {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid container xs={9} direction="column" alignItems="center">
        {props.children}
      </Grid>
    </Grid>
  );
}
