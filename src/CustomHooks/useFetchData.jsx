import React, { useEffect, useState } from 'react'

const useFetchData=(url,options={})=> {
    const[data,setData]=useState();

    useEffect(()=>{
        try {
            const response=axios(url.options);
            setData(response.data)
        } catch (error) {
            
        }


    },[url,options])
  return (
    <div>
      {data}
    </div>
  )
}

export default useFetchData
