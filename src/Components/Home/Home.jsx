/* eslint-disable no-unused-vars */

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
import './Home.css'
import Swal from 'sweetalert2';
import { FaDollarSign,FaBookOpen } from "react-icons/fa";

const Home = () => {

    const [allCard, setallCard] = useState([])
    const[SelectedCourse, setSelectedCourse]= useState([])
    const[creditReaming, setCreditReaming] = useState([])
    const[totalCreditHours, settotalCreditHours] = useState([])
    
    
   

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setallCard(data))
    }, [])

    const handleAddToCart =(course)=>{
       const isExist = SelectedCourse.find((item)=>item.id==course.id)

       let count = course.credit;
       if(isExist){
        Swal.fire(
            'Already you take this corse'
          )
       }else{
        SelectedCourse.forEach(item => {
            count = count + item.credit;
           
           

        });

      
        const reaming = 20 - count;

        if(count > 20){

            Swal.fire(
                'maximum Credit limit is Over',
              )
              return
              
        }

        
        setCreditReaming(reaming)

        settotalCreditHours(count)

        setSelectedCourse([...SelectedCourse, course])
        
       }
      
    }
   
  

    return (
        <div className='container'>
            <div className="home-container">
                <div className="card-container">

                    {
                        allCard.map(course => (
                            <div key={course.id} className="card">
                                <div className="card-img">
                                    <img className='photo' src={course.image} alt="" />
                                    <h2>{course.course_name}</h2>
                                    <p>{course.details.slice(0,100)}</p>

                                    <div className="info">
                                       <div className='price-section'>
                                       <h2><FaDollarSign></FaDollarSign></h2>
                                        <span><p>price: {course.price}</p></span>
                                       </div>
                                        <div className='credit-section'>
                                        <h3><FaBookOpen /></h3>
                                        <span> <p> Credit:{course.credit}</p></span>
                                        </div>
                                        
                                    </div>
                                    <button onClick={()=>handleAddToCart(course)} className='button-card'>Selected</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="cart">
                    <Cart creditReaming={creditReaming} totalCreditHours={totalCreditHours} SelectedCourse={SelectedCourse}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;