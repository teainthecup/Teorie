import {useState} from 'react'

import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const colors: string[] = [
        "#e74c3c",
        "#3498db",
        "#2ecc71",
        "#f1c40f",
        "#9b59b6",
        "#e67e22",
        "#1abc9c",
        "#34495e"
    ];





    const [color, setColor] = useState<string>(colors[0]);


    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        setColor(colors[randomIndex]);
    };

    return (
        <>
            <div className="card">
                <button
                    style={{
                        backgroundColor: color,
                        color: "white",

                    }}

                    onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    )


    return (
        <button
            onClick={handleClick}
            style={{
                backgroundColor: color,
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
            }}
        >
            Změň barvu
        </button>
    );
}

export default App
