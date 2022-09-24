import React, { useState } from 'react'

function ShippingForm( props) {
  const [title, setTitle] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [place, setPlace] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      weight: weight,
      color: color,
      place: place
    };
   props.addToListCallback(data)
  };
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <h1> Shipping Form </h1>
        <input type="text" value={title}
          placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <input type="number" value={weight}
          placeholder="weight" onChange={(e) => setWeight(e.target.value)} />
        <label>Color</label>
        <input type="color" onChange={(e) => setColor(e.target.value)} />
        <input type="text" value={place}
          placeholder="Place" onChange={(e) => setPlace(e.target.value)} />
        <button>Sumbit</button>
      </form>
    </div>



  )
}

export default ShippingForm