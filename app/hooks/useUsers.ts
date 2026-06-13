import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
}

export function useUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("/lib/api/users");

                const data = await response.json();

                setUsers(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return {
        users,
        loading,
    };
}