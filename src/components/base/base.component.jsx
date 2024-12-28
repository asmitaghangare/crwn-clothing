import React from 'react';
import CategoryItem  from '../category-item/category-item.component';
import './base.component.scss';

const BaseComp = ({ categories }) => {
   // console.log(categories);
    return (
        <div className='base-container'>
        {categories.map((category) => {
          return <CategoryItem key={category.id} category={category} ></CategoryItem>
        }
        )}
        </div>
    )
}

export default BaseComp;