import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Piechart = () => {
    const [items,setItems]=useState([]);
    useEffect(()=>{
      axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const loaddata=data.data.data;
          let price=loaddata.map(index=>{
               let pricestring=index.slug.split("-");
              let pricenumber=parseInt(pricestring[1]);
              let objectdata=
                {
                  name:index.phone_name,

                 price:pricenumber


                };
              
    return objectdata;
    
            });
     console.log(price);
     setItems(price);
    //  console.log(items);
            
          
        });
    },[])
    console.log(items);
    return (
        <div>
     {/* <ResponsiveContainer width="100%" height="100%"> */}
        <BarChart width={1000} height={500} data={items}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis dataKey="price"></YAxis>
        </BarChart>
        {/* </ResponsiveContainer> */}
        
        </div>
    );
};

export default Piechart;