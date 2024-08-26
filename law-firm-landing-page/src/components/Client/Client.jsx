import React from 'react';
import './Client.css';
import client1 from '../../assets/Jane.png';
import client2 from '../../assets/Devon.png';
import client3 from '../../assets/Robert.png';
import LeftArrow from '../../assets/LeftArrow.png';
import RightArrow from '../../assets/RightArrow.png';

const clientData = [
    {
      id: 1,
      image: client1,
      name: "Jane Cooper",
      designation: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia",
    },
    {
      id: 2,
      image: client2,
      name: "Devon Lane",
      designation: "Ceo of Hunt",
      style : {
        backgroundColor : "#2e2e2e",
        border : "1.4px solid #2e2e2e",
      },
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia",
    },
    {
      id: 3,
      image: client3,
      name: "Robert Fox",
      designation: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia",
    },
  ];

const Client = () => {

    return (
        <div className='clients-wrapper'>
            <div className="title">
                <h1>What says our happy Clients</h1>
                <div className="button-container">
                    <button className="left-btn">
                        <img src={LeftArrow} alt="left-arrow" />
                    </button>
                    <button className="right-btn">
                        <img src={RightArrow} alt="right-arrow" />
                    </button>
                </div>
            </div>
            <div className="client-wrapper">
                { clientData.map((data) => {
                    const { id, image, name, designation, description } = data;
                    return (
                        <div style={data.style} key={id} className="client-data-wrapper">
                            <div className="client-img-container">
                                <img src={image} alt='client' />
                            </div>
                            <div className="client-title">
                                <h4>{name}</h4>
                                <p>{designation}</p>
                            </div>
                            <div className="client-description">
                                <p>{description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Client;