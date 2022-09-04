import React from "react";
import { connect } from "react-redux";

function UserHeader({ fetchUser, userId, user }) {
  if (!user) {
    return <div className="header">User Header</div>;
  }

  return <div className="header">{user.name}</div>;
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps)(UserHeader);
