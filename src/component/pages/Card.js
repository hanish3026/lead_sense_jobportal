import React, { useEffect, useState } from 'react'
import "../css/BuyCards.css"
import PageHeader from '../com/PageHeader'
import Loader from '../com/Loader'
import { useNavigate } from 'react-router-dom'

function Card() {

  const nav = useNavigate()
  const [loader ,setloder] = useState(false)
  useEffect(()=>{
    if(loader){
      setTimeout(()=>{
        nav("/search")
      },3000)
    }
  })


  function handlebtn(){
 setloder(true)

  }
  return (
    <>
    
    {loader&&<Loader />}
    <PageHeader />
    <div style={{ marginTop: "30px" }} className="container">
       <div className="row justify-content-center">
         <div className="col-12 col-md-4 mb-4">
           <div className="buy_card">
             <p>Silver</p>

             <button onClick={handlebtn}>Buy now</button>
           </div>
         </div>
         <div className="col-12 col-md-4 mb-4">
           <div className="buy_card buy_card_gold">
             <p>Gold</p>
             <button>Buy now</button>
           </div>
         </div>
         <div className="col-12 col-md-4 mb-4">
           <div className="buy_card">
             <p>Platinum</p>
             <button>Buy now</button>
           </div>
         </div>
       </div>
     </div>
    
    </>
  )
}

export default Card