import React, {useRef} from 'react';

const Cryptocurrency = (props) => {


    const nameInputRef = useRef('');
   
    const handleSubmit = (event) => {
    event.preventDefault();
    const inputName = nameInputRef.current.value;

    if (inputName.length !==0) {
 
        props.onClick(inputName); 
    }
    nameInputRef.current.value = ''; 
    }


    
    if (!props.crypto) {
        return null;
    }

    // const newCrypto = {
    //     name: crypto.name,
    //     price: crypto.price
    //   };

    // let things = 
    // <>
    // <div className='results'>Name of Cryptocurrency: {newCrypto.name} - Price ${newCrypto.price}</div>
    // </>;

    let list = props.crypto.map((d, i) => {
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
        return (
          <>
            <li key={i} className="results">
              Cryptocurrency: {d.name} - Price $:{d.price} - Change: {d.change}%{" "}
                 {arrow}
            </li>
          </>
        );
      });

    return (
    <>
    <h1>Cryptocurrency</h1>
    <form className='centered' onSubmit={handleSubmit}>
        <input type = "text"  placeholder="Name of Cryptocurrency" ref = {nameInputRef} style={{width: "200px"}}></input>
        <button className = 'button-10' type = 'submit'>Search</button>
    </form>
    {/* {things} */}
    {list}
    </>
    );
};

export default Cryptocurrency;