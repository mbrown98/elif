import React, { useEffect, useState } from "react";
import {
  Container,
  AppBar,
  Row,
  Typography,
  Grow,
  Grid,
} from "@material-ui/core";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import useStyles from "./styles";

// import memories from "./Images/....."

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);
  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          elif.
        </Typography>
        {/* <img className={classes.image} src={memories} alt="memories" height="60"/> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            className={classes.mainContainer}
            justify="space-between"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} currentId={currentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
