import React, { useEffect } from 'react'
import axios from "axios"
import {useState} from 'react'

//https://randomuser.me/api/?results

const fetchData = () => {

   return axios.get("https://randomuser.me/api/?results=10")
    .then((res) => {
        const {results} = res.data;
        return results;
    }
    )
    .catch((err) => {
        console.log(err);
    }
    )

}

const ApiData = () => {

  const [people, setData] = useState([])

  useEffect(() => {
    fetchData().then(dataApi => {
      setData(dataApi);
    });

  },[])


  return (
    <>
    
      <div className='container mb-5'>
        <div className='text-2xl flex md:flex-row md:space-x-2 space-y-2 justify-center flex-col'>
          {people.map((person,personIdx) => <div className='border-4 px-[10px]' key={personIdx}>{person.name.first}</div>)}
        </div>
      </div>
    </>
    
  )
   
}

export default ApiData;