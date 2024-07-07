import { useEffect, useState } from "react";

export const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/products")
            .then((response) => response.json())
            .then((json) => {
                setPosts(json);
            });
    }, []);

    return (
        <div className="flex items-start flex-wrap">
            {posts.map((item) => (
                <div className="w-1/3 p-2" key={item.id}>
                    <div className="w-full border rounded-md">
                        <img
                            src={"https://placehold.co/600x400"}
                            alt={item.name}
                            className="w-full rounded-t-md"
                        />
                        <h2 className="text-xl my-2 mx-2 font-bold">
                            {item.name}
                        </h2>
                    </div>
                </div>
            ))}
        </div>
    );
};
