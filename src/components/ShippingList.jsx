import React from 'react';
import { useState } from 'react'
import ShippingForm from './ShippingForm';

function ShippingList() {
    const [items, setItems] = useState([]);
    const addToList = (item) => {
        console.log(item);
        const itemsCopy = [...items];
        itemsCopy.push(item)
        setItems(itemsCopy);

    };
    return (
        <div>
            <ShippingForm addToListCallback={(value) => addToList(value)} />
            <table>
                <thead>
                    <th>Title</th>
                    <th>Color</th>
                    <th>Weight</th>
                    <th> Place</th>
                </thead>
                <tbody>
                    {
                        items.map(items => {
                            return (
                                <tr key={items.title}>
                                    <td> {items.title}</td>
                                    <td> {items.color}</td>
                                    <td>
                                        <div style= {{
                                        backgroundColor:
                                        items.color,
                                        width: "60px",
                                        height:"30px"
                                        }}></div>
                                    </td>
                                    <td> {items.place}</td>
                                </tr>

                            )
                        }
                 
                  ) }
                </tbody>
            </table>
        </div>
    )
}

export default ShippingList