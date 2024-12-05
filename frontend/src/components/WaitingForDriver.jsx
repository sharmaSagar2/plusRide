/* eslint-disable react/prop-types */

const WaitingForDriver = (props) => {
  return (
    <div className="">
    <h5 onClick={()=>{
   props.setDriverFound(false);
 }} className="p-3 text-center w-[93%] absolute top-0"><i className=" text-2xl text-gray-600 ri-arrow-down-wide-line"></i></h5>

<div className="flex items-center justify-between">
    <img className="h-10" src="" alt="profile"></img>
    <div className="text-right">
        <h4 className="text-lg font-medium">sarthak</h4>
        <h4 className="text-xl font-semibold -mt-2 -mb-1">UP 09 8097</h4>
        <p className="text-sm text-gray-600">Swift</p>
    </div>
</div>
 <div className="flex gap-3 justify-between flex-col items-center">
 
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

export default WaitingForDriver
