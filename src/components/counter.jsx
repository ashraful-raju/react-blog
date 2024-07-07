import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="card">
            <button
                className="px-3 py-1 text-2xl border border-red-600 rounded-md"
                onClick={() => setCount((count) => count + 1)}
            >
                count is {count}
            </button>
        </div>
    );
}
export default Counter;
