/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CaptainDataContext from '../context/CaptainDataContext';

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem('captain');
  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyCaptain = async () => {
      if (!token) {
        navigate('/captain-login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:3000/captains/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setCaptain(response.data.captain);
        } else {
          throw new Error('Invalid token');
        }
      } catch (error) {
        localStorage.removeItem('token');
        navigate('/captain-login');
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    verifyCaptain();
  }, [navigate, setCaptain, token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectWrapper;
