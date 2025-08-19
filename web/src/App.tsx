import { useEffect, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const [expressVersion, setExpressVersion] = useState<string>("...");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/version`)
      .then((res) => res.json())
      .then((data) => {
        setExpressVersion(data.version);
      })
      .catch((err) => {
        console.error("Failed to fetch version:", err);
        setExpressVersion("error");
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + v4</h1>
      <h2>express {expressVersion}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
