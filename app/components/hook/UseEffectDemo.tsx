"use client";

import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
};
export default function UseEffectDemo() {
    const [users, setUsers] = useState<User[]>([]);
    // useEffect(() => {
    //     console.log("Bắt đầu gọi API");

    //     fetch("/lib/api/users")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log("Nhận dữ liệu:", data);

    //             setUsers(data);
    //         });
    // }, []);
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("/lib/api/users");

            const data = await response.json();

            setUsers(data);
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>User List</h2>
            {users.map((user) => (
                <p key={user.id}>
                    {user.name}
                </p>
            ))}
        </div>
    );
}