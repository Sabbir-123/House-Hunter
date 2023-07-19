import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import HouseCard from "../Home/Partials/Houses/HouseCard";

export default function AllHouses() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const url = `https://house-hunter-server-phi.vercel.app/api/v1/owners/houses?page=${currentPage}`;
  const { data: houses = [], isLoading, isError } = useQuery({
    queryKey: ['houses', currentPage],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data.data;
    }
  });


  if (isLoading) {
    return (
      <div className="grid justify-center">
        <div className="loader text-center ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center">
        <p>Failed to fetch data. Please try again.</p>
      </div>
    );
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <section className="py-6 sm:py-12 bg-gradient-to-r from-[#6366f1] to-white text-white">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-white">Houses</h2>
            <p className="font-serif text-sm text-white">What You can Rent?</p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {houses.length > 0 ? (
              houses.map((singleHouse) => (
                <HouseCard key={singleHouse._id} singleHouse={singleHouse}></HouseCard>
              ))
            ) : (
              <div className="text-center">
                <p>There is no data on this page. Go to the previous page.</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          {currentPage > 1 && (
            <button
              className="bg-primary text-white py-2 px-4 rounded-lg"
              onClick={handlePreviousPage}
            >
              Previous Page
            </button>
          )}
          {houses.length > 0 && (
            <button
              className="bg-primary text-white py-2 px-4 rounded-lg"
              onClick={handleNextPage}
            >
              Next Page
            </button>
          )}
        </div>
      </section>

    </div>
  );
}
