import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className="app">

            <div className="counter-card">

                <div className="header">
                    <div className="icon">🔢</div>

                    <h1>React Counter</h1>

                    <p>Manage the counter using React state</p>
                </div>

                <div className="counter-display">
                    <span>Current Count</span>

                    <h2>{count}</h2>
                </div>

                <div className="buttons">

                    <button
                        className="decrement"
                        onClick={decrement}
                    >
                        −
                    </button>

                    <button
                        className="reset"
                        onClick={reset}
                    >
                        Reset
                    </button>

                    <button
                        className="increment"
                        onClick={increment}
                    >
                        +
                    </button>

                </div>

            </div>

        </div>
    );
}

export default App;