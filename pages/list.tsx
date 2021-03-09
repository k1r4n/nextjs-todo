import React from 'react';

interface User {
  id: number,
  email: string,
  avatar: string,
  firstName: string,
  lastName: string,
}

type Users = User[];

interface Props {
  users: Users,
};

export function List({ users }: Props) {
    return <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstName} {user.lastName}</td>
                    <td>{user.email}</td>
                </tr>)}
            </tbody>
        </table>
    </div>;
}