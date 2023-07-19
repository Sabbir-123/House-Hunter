
//

import { Link } from "react-router-dom"

import search from '../../assets/images/search.svg'
const Search = () => {
    return (
        <div className='my-7 md:my-10 px-[10px] md:px-[13px] text-[16px] md:text-[18px] shadow-md pl-[15px] md:pl-[22px] py-[10px] md:py-[8px] w-full max-w-[500px] mx-auto flex rounded-full items-center bg-white' >
            <input placeholder='e.g 3 Bed Room, 2 Bed Room' className='bg-transparent outline-none border-none w-full' />

            <Link to='/jobs-list' >
                <button className='btn h-[35px] md:h-[50px] !p-0 w-[40px] md:w-[50px] flex items-center justify-center rounded-full bg-[#6366f1] text-white' > 
                <img src={search} alt="" />
                 </button>
            </Link>
        </div>
    )
}

export default Search