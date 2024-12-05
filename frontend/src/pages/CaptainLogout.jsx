/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const CaptainLogout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("captain");
    axios.get("http://localhost:3000/captains/logout", { 
        headers: {
            Authorization: `Bearer ${token}` 
        }
    }).then((response)=>{
        if(response.status === 200){
            localStorage.removeItem("token");
            navigate('/captain-login');
        }

    })
  return (
    <div>
        captainlogout
      
    </div>
  )
}

export default CaptainLogout
