import Item from './Item';
import React from 'react';
import data from '../data/etsy.json';
import { IData } from '../models/IData';

export default function Listing() {
    let newObj: IData;
    const newArr: IData[] = [];

    for (const item of data) {
        const { listing_id, url, MainImage, title, currency_code, price, quantity } = item;
        const url_570xN = MainImage && MainImage.url_570xN;
        newObj = { listing_id, url, MainImage: url_570xN , title, currency_code, price, quantity };
        newArr.push(newObj);
    }


    return (
        <div className="item-list">
            {newArr.map((i) => <Item key={i.listing_id} item={i}/>)};
        </div>
    )
}

