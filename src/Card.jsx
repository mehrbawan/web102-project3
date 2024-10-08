import React from "react";

const Card = ({ question, flipped, setFlipped }) => {
    const flipCard = () => {
        setFlipped(!flipped); // Toggle the flipped state using the function passed from App
    };

    return (
        <div className="cardContainer" id={question.difficulty} onClick={flipCard}>
            {flipped ? (
                <>
                    <b><p>{question.answer}</p></b>
                </>
            ) : (
                <>
                    <b><p>{question.question}</p></b>
                    {question.image && <img className="questionImage" src={question.image} />}
                </>
            )}
        </div>
    );
};

export default Card;
