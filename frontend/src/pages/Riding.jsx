
import { Link } from 'react-router-dom'
const Riding = () => {
  return (
    <div className="h-screen">
    
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-home-5-line"></i>
            </Link>
        
        
        <div className="h-1/2 ">
            <img className="h-full w-full object-cover" src="/src/images/map.jpeg"></img>
        </div>
        <div>
        <div className="flex items-center justify-between">
    <img className="h-16 " src="/src/images/car1.jpg" alt="profile"></img>
    <div className="text-right m-5">
        <h4 className="text-lg font-medium">sarthak</h4>
        <h4 className="text-xl font-semibold -mt-2 -mb-1">UP 09 8097</h4>
        <p className="text-sm text-gray-600">Swift</p>
    </div>
</div>
 <div className="flex gap-3 justify-between flex-col items-center p-4">
 
   <div className="w-full mt-5 ">
       <div className='flex items-center gap-5  p-3 border-b-2'>
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
 <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
        </div>
     
    </div>
  )
}

export default Riding
