import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
    return (
        <main >
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
        </main>
    );
}

export default App;
