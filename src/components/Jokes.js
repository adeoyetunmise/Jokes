import axios from 'axios'
import React, { useState,useEffect } from 'react'

const Excuser = () => {
const programmingUrl= "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious&type=single&idRange=0-319"
const [jokes, setjokes] = useState([])
const [categories, setcategories] = useState([])

  useEffect(() => {
    getData()
  
  }, [])
  


const getData=()=>{
    axios.get(programmingUrl).then((res)=>{
     let programming = res.data.joke
      let allCategory = res.data.category
      setjokes(programming)
      console.log(programming);
      setcategories(allCategory)
      console.log(allCategory);
})

  }
  return (
    <>
    
    <div className='container '>
      <h1 className='text-center display-1 text-white'>JOKES😂</h1>
    </div>
  {
  <>
      <div  className=' card mb-3 mt-5 mx-auto shadow w-50 '>
            <h3 className='card-header mt-2 text-dark text-center'>{categories}</h3>
            <div className='card-body'>
                <p className='card-text fs-4 text-center text-danger'>{jokes}</p>
            </div>
      </div>
    <div className='text-center' >
        <button onClick={(getData)} className='btn btn-danger   btn-lg'>Next</button>
    </div>
  </>
  }
  </>
  )
}

export default Excuser