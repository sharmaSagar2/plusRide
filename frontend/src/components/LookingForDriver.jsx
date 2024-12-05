/* eslint-disable react/prop-types */

const LookingForDriver = (props) => {
    return (
        <div className="">
             <h5 onClick={()=>{
            props.setVehicleFound(false);
          }} className="p-3 text-center w-[93%] absolute top-0"><i className=" text-2xl text-gray-600 ri-arrow-down-wide-line"></i></h5>
          <h3 className="text-2xl font-semibold mb-5">Looking for a driver</h3>
          <div className="flex gap-3 justify-between flex-col items-center">
            <img src="/src/images/car1.jpg" className="w-50 h-50" alt="" />
            <div className="w-full mt-5 ">
                <div className='flex items-center gap-5  p-3 border-b-2'>
                    <i className=" text-lg ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-500 '>New York</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                <i className=" text-lg ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-500 '>New York</p>
                    </div>


                </div>
                <div className='flex items-center gap-5 p-3 '>
                <i className="ri-currency-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'>$20</h3>
                        <p className='text-sm -mt-1 text-gray-500 '>Cash Cash</p>
                    </div>

                </div>
                
            </div>
           

          </div>
          
        </div>
       
  )
}

export default LookingForDriver
