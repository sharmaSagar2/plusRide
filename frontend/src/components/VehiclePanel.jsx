/* eslint-disable react/prop-types */


const VehiclePanel = (props) => {
  return (
    <div>
         <h5 onClick={()=>{
            props.setVehiclePanelOpen(false);
          }} className="p-3 text-center w-[93%] absolute top-0"><i className=" text-2xl text-gray-600 ri-arrow-down-wide-line"></i></h5>
          <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
          <div
          onClick={()=>{
            props.setConfirmRidePanel(true);
          }}
           className="flex border-2 active:border-black bg-gray-100 mb-2 rounded-md w-full p-3 items-center justify-between">
            <img className="h-16" src=" src/images/car1.jpg"></img>
            <div className=" w-1/2">
              <h4 className="font-medium text-sm ">UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
              <h5 className="font-medium text-sm ">2 min away</h5>
              <p className="font-medium text-xs text-gray-600 ">Affordable, compact ride</p>
            </div>
            <h2 className="text-2xl font-semibold">$20</h2>
         
            
          </div>
          <div
          onClick={()=>{
            props.setConfirmRidePanel(true);
          }}
           className="flex border-2 active:border-black mb-2 rounded-md w-full p-3 items-center justify-between">
            <img className="h-16 " src=" src/images/auto.jpg"></img>
            <div className=" w-1/2">
              <h4 className="font-medium text-sm ">UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
              <h5 className="font-medium text-sm ">3 min away</h5>
              <p className="font-medium text-xs text-gray-600 ">Affordable, compact ride</p>
            </div>
            <h2 className="text-2xl font-semibold">$6</h2>
            
         
            
          </div>
          <div
          onClick={()=>{
            props.setConfirmRidePanel(true);
          }}
           className="flex border-2 active:border-black mb-2 rounded-md w-full p-3 items-center justify-between">
            <img className="h-16" src=" src/images/bike.jpg"></img>
            <div className=" w-1/2">
              <h4 className="font-medium text-sm ">UberGo <span><i className="ri-user-3-fill"></i>2</span></h4>
              <h5 className="font-medium text-sm ">2 min away</h5>
              <p className="font-medium text-xs text-gray-600 ">Affordable, compact ride</p>
            </div>
            <h2 className="text-2xl font-semibold">$10</h2>
         
            
          </div>
          

      
    </div>
  )
}

export default VehiclePanel
