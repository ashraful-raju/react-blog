import React from "react";
import { Link } from "react-router-dom";
import { Time, Counter } from "../components";

function Home() {
    return (
        <div className="text-center mb-2 bg-gray-400 py-4">
            <h1 className=" py-2 px-2 mx-64 bg-white text-black text-center text-2xl border border-black rounded-md">
                <Link to={"/profile"}>Profile Page</Link>
            </h1>
            <br />
            <Time />
            <br />
            <Counter />
        </div>
    );
}

export default Home;
