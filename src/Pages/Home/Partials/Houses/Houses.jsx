import { useQuery } from "@tanstack/react-query";
import HouseCard from "./HouseCard";



export default function Houses() {
    const url = `https://house-hunter-server-phi.vercel.app/api/v1/owners/houses?limit=8`;
    const {data: houses= [] , isLoading}= useQuery({
        queryKey: ['houses'],
        queryFn: async ()=>{
            const res = await fetch(url, {
                headers: {
                    authorization : `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
           
            return data.data;
        }
    
    })
    console.log(houses)
    if(isLoading){
return (
    <div className="grid justify-center">
    <div className="loader text-center ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
        
    </div>
    )
    }
  return (
    <div>
  <section className="py-6 sm:py-12 bg-gradient-to-r from-[#6366f1] to-white text-white">
    <div className="container p-6 mx-auto space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-white">Houses</h2>
        <p className="font-serif text-sm text-white">What You can Rent?</p>
      </div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        {
          houses.map(singleHouse => (
            <HouseCard key={singleHouse._id} singleHouse={singleHouse}></HouseCard>
          ))
        }
      </div>
    </div>
    <div className="grid justify-center">
          <a href={`/allhouses`}>
            <button className="bg-primary text-white py-2 px-4 rounded-lg">See All Houses</button>
          </a>
        </div>
  </section>
</div>

  )
}
