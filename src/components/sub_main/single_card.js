import React, { useState, useEffect } from "react";
import './single_card.css';

function Card({ id }) {
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, [id]);

  async function getData() {
    try {
      const response = await fetch('http://localhost:5000/sub_main', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        //console.log('Response from server:', jsonResponse[0]);
        setData(jsonResponse[0]);
        console.log(data.img);
      } else {
        console.error('Server error:', response.statusText);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  return (
    <div id="main">
      <img src={'/'+data.main_cat+'/'+data.img} alt="Person" className="sub_gal_img"/>
      <div id="main_det">
        <h1>{data.name}</h1>
        <h2><span>Product Name :</span>{data.name} AN914</h2>
        <h2><span>Category :</span>{data.main_cat} </h2>
        <h2><span>Ratings :</span>{data.ratings}</h2>
        <h2><span>Reviews :</span>Good</h2>
        <h2><span>Price :</span>${data.price} </h2>
        <div id="cart_btns">
            <button>Add To Cart</button>
            <button>Buy-now</button>
        </div>
       
      </div>
    </div>
  );
}

export default Card;
