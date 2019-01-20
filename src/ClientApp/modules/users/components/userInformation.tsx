import React from "react";
import FullName from "./fullName";
import UserName from "./userName";
import EmailAddress from "./emailAddress";
import User from "../models";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

interface UserInformationProps {
  user: User;
  onChange: (id: number, propertyName: string, newValue: string) => void;
}

export default class UserInformation extends React.Component<
  UserInformationProps
> {
  render() {
    const { name, username, email, id } = this.props.user;
    return (
      <Card>
        <CardContent>
        <FullName name={name} onChange={this.props.onChange} id={id} />
        <UserName username={username} />
        <EmailAddress email={email} />          
        </CardContent>
      </Card>
    );
  }
}
