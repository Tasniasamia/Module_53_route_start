import React, { useState } from 'react';
import List from '../List/List';
const route=[
    {
        id:'1',
        name:"Home",
        path:'/home'
    },
    {
        id:'2',
        name:"About",
        path:'/about'
    },
    {
        id:'3',
        name:"Contact",
        path:'/contact'
    }

]
const Home = () => {
 const[open,setOpen]=useState(false);
    return (
        <div>
            <div onClick={()=>setOpen(!open)} className="md:hidden" >
              {
                open?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>


              
              }
            </div>
               
                <ul className={`md:flex absolute  md:static ${open? 'top-6': '-top-60'}`}>
                {
                    route.map(index=><List sendindex={index}key={index.id}></List>)
                }
                </ul>
          
        </div>
    );
};

export default Home;