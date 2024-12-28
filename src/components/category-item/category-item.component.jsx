import React from "react";
import './category-item.component.scss';
const CategoryItem = ({ key, category }) => {
    console.log(key, category);
    return (
        <div key={key} className="category-container">
            <div className="background-image" style={{
                backgroundImage: `url(${category.imageUrl})`
            }
            }></div>

            <div className="category-body-container">
                <h2>{category.title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem;