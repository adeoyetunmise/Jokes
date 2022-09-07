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
    <div className='container-fluid mt-5 col-10'>
    <div className='container '>
      
      <h1 className='text-center display-3 text-white'>JOKES😂</h1>
    </div>
  {
  <>
      <div  className=' card mb-3 mt-5 mx-auto shadow col-lg-6 col-sm-12 col-md-10 '>
            <h3 className='card-header mt-2 text-warning text-center'>{categories}</h3>
            <div className='card-body'>
                <p className='card-text fs-4 text-center text-light'>{jokes}</p>
            </div>
      </div>
    <div className='text-center' >
        <button onClick={(getData)} className='btn btn-warning   btn-lg'>Next</button>
    </div>
  </>
  }
  </div>
  </>
  )
}

export default Excuser