import { useEffect, useState } from "react"

const useOwner = email =>{
    const [isOwner , setIsOwner] = useState(false);
    const [isOwnerLoading,setisOwnerLoading]= useState(true)
    useEffect(()=>{
        if(email){
            fetch(`https://house-hunter-server-phi.vercel.app/api/v1/email/${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setIsOwner(data.isOwner)
                setisOwnerLoading(false)
            })
        }
    },[email])
    return[isOwner, isOwnerLoading]
}

export default useOwner