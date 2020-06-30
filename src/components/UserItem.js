import React from "react";

class UserItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.user.name}</h1>
        <h3>{this.props.user.email}</h3>
      </div>
    );
  }
}

export default UserItem;
