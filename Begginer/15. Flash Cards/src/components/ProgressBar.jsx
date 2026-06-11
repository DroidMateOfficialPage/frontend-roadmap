export default function ProgressBar({ current, total }) {

    const percent = ((current + 1) / total) * 100;

    return (
        <div className="progress-wrapper">

            <div className="progress-bar">

                <div
                    className="fill"
                    style={{ width: `${percent}%` }}
                />

            </div>

            <p>{current + 1} / {total}</p>

        </div>
    );
}