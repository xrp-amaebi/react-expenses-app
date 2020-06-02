 import React from 'react';
 import {Link} from 'react-router-dom';

 const ExpenseListItems = ({description, amount, createdAt, id}) => (
    <div>
      <Link to={ `/edit/${id}` } activeclassname='is-active'>
         <h3>{description}</h3>
      </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItems; 