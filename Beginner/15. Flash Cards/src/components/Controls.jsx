export default function Controls({ onPrev, onNext }) {

    return (
        <div className="controls">

            <button onClick={onPrev}>Prev</button>

            <button onClick={onNext}>Next</button>

        </div>
    );
}