import { Link } from "react-router-dom"

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpbE-wp5pouj_RSRbxe98k4nLTd_fLUTumGRSoyZy63jox7gGk
const Home = () => {
  return (
    <div>
        <div className=" bg-cover bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpbE-wp5pouj_RSRbxe98k4nLTd_fLUTumGRSoyZy63jox7gGk')] h-screen py-8 w-full flex justify-between flex-col">
        <img
            className="w-14 ml-16 rounded-md"
             src="/src/images/logo.jpg" alt="Logo" />
            <div className="bg-white pb-7 py-4 px-4 ">
                <h2 className="text-2xl font-bold text-center ">Get Started with Uber</h2>
                <Link to="/login" className=" flex justify-center w-full bg-black text-white py-3 rounded-lg mt-4">Continue</Link>
            </div>

        </div>
    
    </div>
  )
}

export default Home
