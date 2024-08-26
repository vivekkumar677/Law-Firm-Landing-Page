import React from 'react';
import './ChooseUs.css';
import giftImage from '../../assets/Gift-img.png';

const successData = [
    {
        id: 1,
        image: giftImage,
        successRate: "98% Success Rate",
        description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
        btnText: "Read More",
    },
    {
        id: 2,
        image: giftImage,
        successRate: "98% Success Rate",
        description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
        btnText: "Read More",
        style : {
            backgroundColor : "#2e2e2e",
            border : "1.4px solid #2e2e2e",
        },
    },
    {
        id: 3,
        image: giftImage,
        successRate: "98% Success Rate",
        description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
        btnText: "Read More",
    },
];

const ChooseUs = () => {

    return (
        <div className="choose-wrapper">
            <div className="heading-wrapper">
                <h1>Why Choose us?</h1>
            </div>
            <div className="box-wrapper">
                {successData.map((data) => {
                    const { id, image, successRate, description, btnText} = data;
                    return (
                        <div key={id}>
                            <div style={data.style} className="box-container">
                                <div className="img-wrapper">
                                    <img src={image} alt={image}/>
                                </div>
                                <h4>{successRate}</h4>
                                <p>{description}</p>
                                <button className="read-button">{btnText}</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ChooseUs;