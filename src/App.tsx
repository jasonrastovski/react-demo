import React, { Component } from "react";

import "./App.css";
import UserInformation from "./ClientApp/modules/users/components/userInformation";
import User from "./ClientApp/modules/users/models";
import NavBar from "./ClientApp/modules/common/navbar";
import Paper from "@material-ui/core/Paper/Paper";
import Grid from '@material-ui/core/Grid';
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import { UserApplicationState } from "./ClientApp/actions";

class App extends Component {
  state = {
    users: [] as User[],
    isFetching: true
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          this.setState({ users: data, isFetching: false });
        }, 1500);
      });
  }

  render() {

    const { users, isFetching } = this.state;

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

    return (
      <>
        <NavBar />
        <div className="App" />
        {isFetching
          ? <LinearProgress />
          :
          <Paper elevation={5}>
            <Grid container spacing={16}>
              {gridItems}
            </Grid>
          </Paper>
        }
      </>
    );
  }

  onChange = (id: number, propertyName: string, newValue: string) => {
    var updatedUsers = this.state.users.map(user => {
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

const mapStateToProps = (state:UserApplicationState) => { 

};

export default App;
