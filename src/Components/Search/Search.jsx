/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import search from '../../assets/images/search.svg';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const { data: searchResults = [], isLoading, isError } = useQuery({
    queryKey: ['searchResults', searchInput],
    queryFn: async () => {
      const res = await fetch(`https://house-hunter-server-phi.vercel.app/api/v1/owners/houses?q=${searchInput}`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className='my-7 md:my-10 px-[10px] md:px-[13px] text-[16px] md:text-[18px] shadow-md pl-[15px] md:pl-[22px] py-[10px] md:py-[8px] w-full max-w-[500px] mx-auto flex rounded-full items-center bg-white'>
      <input
        placeholder='e.g 3 Bed Room, 2 Bed Room'
        className='bg-transparent outline-none border-none w-full'
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <button className='btn h-[35px] md:h-[50px] !p-0 w-[40px] md:w-[50px] flex items-center justify-center rounded-full bg-[#6366f1] text-white'>
        <img src={search} alt='' />
      </button>
    </div>
  );
};

export default Search;
