/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';

const Cart = ({ SelectedCourse, totalCreditHours, creditReaming }) => {
   return (
      <div>
         <h3>Credit Remaining: {creditReaming}</h3>
         <hr />
         <h3>Course Name: {SelectedCourse.length}</h3>
         <hr />
         <ol>
            {SelectedCourse.map((item) => (
               <li key={item.id}>{item.course_name}</li>
            ))}
         </ol>
         <h3>Total Credit Hour: {totalCreditHours}</h3>
         <hr />
      </div>
   );
};

export default Cart;
