import  { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { UserDataContext } from './UserDataContext';

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    fullName: {
      firstName: '',
      lastName: '',
    },
  });

  const value = { user, setUser };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

// Define PropTypes
UserContext.propTypes = {
  children: PropTypes.node.isRequired, // Validate 'children'
};

export default UserContext;
