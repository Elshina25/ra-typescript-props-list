import React from 'react';
import { IData } from '../models/IData';

interface IItemProps {
    item: IData,
  };


export default function Item({item}: IItemProps) {
  let 
    updTitle,
    updQuantity;

  if (item.title !== undefined) {
    updTitle = item.title.length > 50 ? item.title.slice(0, 49) + '...' : item.title;
  } else if (item.quantity !== undefined) {
    updQuantity = item.quantity <= 10 ? 'low' : item.quantity <= 20 ? 'medium' : 'high';
  }
  
  const updPrice = item.currency_code === 'USD' ? '$' : item.currency_code === 'EUR' ? '€' : item.currency_code;
 

  return (
    <>
    <div className="item">
    <div className="item-image">
      <a href={item.url}>
        <img src={item.MainImage} alt={item.title}/>
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">{updTitle}</p>
      <p className="item-price">{updPrice}{item.price}</p>
      <p className={`item-quantity level-${updQuantity}`}>{item.quantity} left</p>
    </div>
  </div>
  </>
  );
}