import React from "react";

import "./App.css";
import UserInformation from "./ClientApp/modules/users/components/userInformation";
import User from "./ClientApp/modules/users/models";
import NavBar from "./ClientApp/modules/common/navbar";
import Paper from "@material-ui/core/Paper/Paper";
import Grid from '@material-ui/core/Grid';
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";

import { connect } from "react-redux";
import { UserApplicationState } from "./ClientApp/store";
import { loadUsers } from "./ClientApp/modules/users/actionCreator";

class App extends React.Component<AppProps> {

  componentDidMount() {
    setTimeout(this.props.loadUsers(), 1000);
  }

  render() {    
    const { users, isLoading } = this.props;

    const gridItems = users.map((user: User, index) => {
      return (
        <Grid item xs={4} key={index}>
          <UserInformation
            user={user}
            key={index}
            onChange={this.onChange}
          />
        </Grid>
      );
    });

    return (<>>
      <NavBar />
      <div className="App" />
      {
        isLoading
          ? <LinearProgress /> 
          :
          <Paper elevation={5}>
            <Grid container spacing={16}>
              {gridItems}
            </Grid>
          </Paper>
      }</>
    );
  }

  onChange = (id: number, propertyName: string, newValue: string) => {
    var updatedUsers = this.props.users.map(user => {
      if (user.id == id) {
        return {
          username: user.username,
          id: id,
          name: newValue,
          email: user.email
        };
      }
      return user;
    });

    this.setState(prevState => {
      return {
        ...prevState,
        users: updatedUsers
      };
    });
  };

}

interface AppStateProps {
  users: User[];
  isLoading: boolean;
}

interface AppDispatchProps {  
  loadUsers: () => any;
}

type AppProps = AppStateProps & AppDispatchProps;

const mapStateToProps = (state: UserApplicationState) => {
  return {
    users: state.users,
    isLoading: state.isLoading
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadUsers: () => {
      dispatch(loadUsers());
    }
  }
};

export default connect<any, any, any, any>(mapStateToProps, mapDispatchToProps)(App);
