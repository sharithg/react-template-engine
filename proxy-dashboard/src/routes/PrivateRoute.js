import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) =>
  createStyles({
    loader: {
      backgroundColor: theme.palette.background.default,
    },
  })
);

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userLoading, currentUser } = useAuth();
  const classes = useStyles();

  if (userLoading)
    return (
      <React.Fragment>
        <Backdrop open={true} className={classes.loader}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </React.Fragment>
    );

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
