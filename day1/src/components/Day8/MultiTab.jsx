import React, { useEffect, useState } from "react";

export const MultiTab = () => {
    const [selectedType, setSelectedType] = useState("posts");
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${selectedType}`);
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, [selectedType]);

    return (
        <div>
            <div>
                <button onClick={() => setSelectedType("posts")}>Posts</button>
                <button onClick={() => setSelectedType("users")}>Users</button>
                <button onClick={() => setSelectedType("comments")}>Comments</button>
            </div>
            <div>
                {data.map((item) => (
                    <p key={item.id}>{JSON.stringify(item)}</p>
                ))}
            </div>
        </div>
    );
};
