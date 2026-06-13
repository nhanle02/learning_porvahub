"use client";

import { useUsers } from "../../hooks/useUsers";

export default function UsersPage() {
    const { users, loading } = useUsers();

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>Users</h1>

            {users.map((user) => (
                <div key={user.id}>
                    {user.id} - {user.name}
                </div>
            ))}
        </div>
    );
}