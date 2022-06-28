import React, {useRef} from 'react';

const Forex = (props) => {


    const nameInputRef = useRef('');
   
    const handleSubmit = (event) => {
    event.preventDefault();
    const inputName = nameInputRef.current.value;

    if (inputName.length !==0) {
 
        props.onClick(inputName); 
    }
    nameInputRef.current.value = ''; 
    }
    

    if (!props.forex) {
        return null;
    }

 

    // let things = <div className='results'>Name of Forex Pair: {newForex.name} - Price ${newForex.price}</div>
    let list = props.forex.map((d, i) => {
        let arrow = <></>;
        if (d.change >= 0) {
          arrow = (
            <i
              className="fas fa-arrow-up"
              style={{ fontSize: "24px", color: "green" }}
            ></i>
          );
        } else if (d.change < 0) {
          arrow = (
            <i
              className="fas fa-arrow-down"
              style={{ fontSize: "24px", color: "red" }}
            ></i>
          );
        }
        console.log(arrow);
        return (
          <>
            <li key={i} className="results">
              Forex Pair: {d.name} - Exchange Rate: {d.price} - Change: {d.change}%{" "}
                 {arrow}
            </li>
          </>
        );
      });
    return (
    <>
    <h1>Forex</h1>
    <form className='centered' onSubmit={handleSubmit}>
        <input type = "text"  placeholder="Name of Forex" ref = {nameInputRef} style={{width: "200px"}}></input>
        <button className = 'button-10' type = 'submit'>Search</button>
    </form>
    {/* {things} */}
    {list}
    </>
    );
};


export default Forex;