import React from "react";

interface EmailAddressProps {
  email: string;
}

export default class EmailAddress extends React.Component<EmailAddressProps> {
  render() {
    return <div>{this.props.email}</div>;
  }
}
