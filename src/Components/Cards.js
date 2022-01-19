import CardItem from "./CardItem";

import "../Cards.css";
import React, { useState, useEffect } from "react";

function Cards({ props }) {
  const [data, setData] = useState([]);
 

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?start_date=2021-12-24&end_date=2022-01-06&api_key=xj77E2ACzHDTUThUyUAvJDahWBODCwW8dazH4dZN"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });

    console.log(data);
  }, []);

  if(!data) {
    return <div> <i className="fas fa-spinner"></i></div>;
  } else
    return (
    
    <>
       <div className='card'>

     
             {data.map((item, i) => (
               <div  key={i}>
                  


      
               <CardItem
                src={item.hdurl}
                title={item.title}
                date={item.date}
                desc={item.explanation}
                // Copyright ={item.copyright}
              /> 
       
            </div>
            
              
          ))}
             
              
        </div>
    </>

    );
             
}
export default Cards;
