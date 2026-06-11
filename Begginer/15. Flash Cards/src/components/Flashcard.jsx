import { useState } from "react";

export default function Flashcard({ card }) {

    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className={`card ${flipped ? "flipped" : ""}`}
            onClick={() => setFlipped(!flipped)}
        >

            <div className="inner">

                <div className="front">
                    <h2>{card.question}</h2>
                    <p>Click to reveal answer</p>
                </div>

                <div className="back">
                    <h2>{card.answer}</h2>
                </div>

            </div>

        </div>
    );
}