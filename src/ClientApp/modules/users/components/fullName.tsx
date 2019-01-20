import React, { ChangeEvent } from "react";

interface FullNameProps {
  name: string;
  id: number;
  onChange: (id: number, propertyName: string, newValue: string) => void;
}

export default class FullName extends React.Component<FullNameProps> {
  render() {
    return (
      <div>
        <input onChange={this.onChange} value={this.props.name} />
      </div>
    );
  }

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(this.props.id, "name", e.currentTarget.value);
  };
}
