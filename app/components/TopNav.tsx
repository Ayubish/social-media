import { FiBell, FiSearch } from "react-icons/fi";

export default function TopNav(){
    return(
        <div className=" p-2 border-b flex justify-between items-center">
            <div className="w-7 h-7 bg-blue-500 rounded-md p-2 font-bold text-white text-center flex items-center">Z</div>
            <div className="py-1 px-4 w-[80%] bg-slate-200 rounded-md flex items-center justify-between ">Search <FiSearch/></div>
            <FiBell size={20}/>
        </div>
    )
}