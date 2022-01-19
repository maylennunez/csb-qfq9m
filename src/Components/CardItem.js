import React, { useState } from "react";
function CardItem(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="cards">
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img alt={props.title} src={props.src} width="500" height="300" />
            <h5>{props.title} </h5>
            <h5> {props.date} </h5>
          </div>
          <div className="content">
            <p> {props.desc} </p>
            <button className="button" onClick={handleClick}>
              Like <i className={click ? "fas fa-heart" : "far fa-heart"} />
            </button>
            {/* <p> Copyright: {props.Copyright}</p> */}
          </div>
        </div>
      </div>
         {/* fix overflow outside its container   */}
     <div className="clearfix"></div>  
    </div>
    
  );
}
export default CardItem;
