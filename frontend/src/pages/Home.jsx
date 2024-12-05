import { useState } from "react";

import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import { useRef } from "react";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef=useRef(null);
  const [vehiclePanelOpen,setVehiclePanelOpen]=useState(false);
  const vehiclePanelRef = useRef(null);
  const [ConfirmRidePanel, setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef=useRef(null);
  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);
  const [driverFound, setDriverFound] = useState(false);
  const driverFoundRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  
  useGSAP(()=>{
    if(panelOpen){
      gsap.to(panelRef.current,{
        height: "70%",
        padding:24
      
      });
      gsap.to(panelCloseRef.current,{
        opacity: 1
      })
    }
    else{
      gsap.to(panelRef.current,{
        height: "0%",
        padding:0
       
      });
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }

   
  },[panelOpen])

  useGSAP (()=>{
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current,{
       transform:'translateY(0%)',
      })
    }
    else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)',
      })
    }
    },[vehiclePanelOpen])

    useGSAP(()=>{
      if(ConfirmRidePanel){
        gsap.to(confirmRidePanelRef.current,{
          transform:'translateY(0%)',
        })
      }
      else{
        gsap.to(confirmRidePanelRef.current,{
          transform:'translateY(100%)',
        })
      }
    },[ConfirmRidePanel])

    useGSAP(()=>{
      if(vehicleFound){
        gsap.to(vehicleFoundRef.current,{
          transform:'translateY(0%)',
        })
      }
      else{
        gsap.to(vehicleFoundRef.current,{
          transform:'translateY(100%)',
        })
      }
    },[vehicleFound])

    useGSAP(()=>{
      if(driverFound){
        gsap.to(driverFoundRef.current,{
          transform:'translateY(0%)',
        })
      }
      else{
        gsap.to(driverFoundRef.current,{
          transform:'translateY(100%)',
        })
      }
    },[driverFound])



  return (
    <div className="h-screen relative overflow-hidden ">
       <img
        className="w-16 absolute left-5 top-5" src="/src/images/logo.jpg" alt="Logo"/>
        <div className="h-screen w-screen">
        <img className="h-full w-full object-cover" src="data:image/jpeg;base64,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"></img>
        </div>
        <div className=" flex flex-col justify-end absolute h-screen top-0 w-full">
          <div className="h-[30%] p-5 bg-white relative">
             <h5 ref={panelCloseRef} onClick={() => setPanelOpen(false)} className="absolute opacity-0 top-3 left-1/2 text-2xl"><i className="ri-arrow-down-wide-line"></i></h5>
            <h4 className="text-2xl font-bold">Find a trip</h4>
            <form onSubmit = {(e)=>{
              submitHandler(e);
            }}>
              <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-500"></div>
              <input
              onClick={()=>{
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
               className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5" type="text" name="search" placeholder="Add a pick up location" />
              <input 
               onClick={()=>{
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3" type ="text" name="search" placeholder="Enter a destination" />
            </form>
          </div>
          <div ref={panelRef} className=" bg-white ">
              <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanelOpen} />
          </div>

        </div>

        <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
         <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>
        <div ref={confirmRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
         <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound = {setVehicleFound} />
        </div>

        <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
         <LookingForDriver setVehicleFound = {setVehicleFound}  />
        </div>


        <div ref={driverFoundRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
         <WaitingForDriver setDriverFound = {setDriverFound} />
        </div>


     
    </div>
  )
}

export default Home







