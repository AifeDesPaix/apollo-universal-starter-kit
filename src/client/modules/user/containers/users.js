/*eslint-disable no-unused-vars*/
// React
import React from 'react';
import PropTypes from 'prop-types';

// Apollo
import { graphql, compose } from 'react-apollo';

// Components
import UsersShow from '../components/users_show';

import USERS_QUERY from '../graphql/users_get.graphql';

class Users extends React.Component {
  render() {
    return <UsersShow {...this.props} />;
  }
}

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array,
  errors: PropTypes.array
};

const UserWithApollo = compose(
  graphql(USERS_QUERY, {
    props({ data: { loading, users, error } }) {
      return { loading, users, errors: error ? error.graphQLErrors : null };
    }
  })
)(Users);

export default UserWithApollo;
