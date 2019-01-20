import React from "react";

interface UserNameProps {
  username: string;
}

export default class UserName extends React.Component<UserNameProps> {
  render() {
    return <div>{this.props.username}</div>;
  }
}
