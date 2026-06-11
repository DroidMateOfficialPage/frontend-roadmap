import { useState } from "react";
import { cards } from "./data/cards";

import Flashcard from "./components/Flashcard";
import ProgressBar from "./components/ProgressBar";
import Controls from "./components/Controls";

import "./style.css";

export default function App() {

    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((prev) => (prev + 1) % cards.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

    return (
        <div className="app">

            <h1>Flash Cards</h1>

            <ProgressBar current={index} total={cards.length} />

            <Flashcard card={cards[index]} />

            <Controls onPrev={prev} onNext={next} />

        </div>
    );
}