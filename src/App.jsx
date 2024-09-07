import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, incrementByAmount } from "./slices/counter";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [amount, setAmount] = useState(0);
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(parseInt(amount)));
  };
  return (
    <>
      <div>
        <Nav />
        <h1 className="text-center text-5xl font-bold">Redux Practice</h1>
        {/* <div className="text-center mt-10">
          <h2 className="text-3xl font-bold">Value:{value}</h2>
          <div className="mt-5">
            <button
              onClick={() => dispatch(decrement())}
              className="btn btn-primary mr-5"
            >
              -
            </button>
            <button
              onClick={() => dispatch(increment())}
              className="btn btn-primary "
            >
              +
            </button>
            <div className="mt-5">
              <input
                type="number"
                name=""
                id=""
                placeholder="Type input"
                className="input border-2 border-blue-500 mr-5"
                onChange={(e) => setAmount(e.target.value)}
              />
              <button
                onClick={handleIncrementByAmount}
                className="btn btn-primary "
              >
                Update
              </button>
            </div>
          </div>
        </div> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
