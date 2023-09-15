/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';

const Cart = ({ SelectedCourse, totalCreditHours, creditReaming,SelectedPrice }) => {
   return (
      <div>
         <h3>Credit Hour Remaining:{creditReaming} hr</h3>
         <hr />
         <h3>Course Name: {SelectedCourse.length}</h3>
         <hr />
         <ol>
            {SelectedCourse.map((item) => (
               <li key={item.id}>{item.course_name}</li>
            ))}
         </ol>
         <h3>Total Credit Hour: {totalCreditHours}</h3>
         
       
      </div>
   );
};

export default Cart;
