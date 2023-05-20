'use client';
import { useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

const UserList = () => {
  const url = './data.json';
  const [userData, setData] = useState({ message: '', data: [] });

  fetch(url)
    .then((res) => res.json())
    .then((json) => setData(json));

  return (
    <div>
      <h1>ユーザー一覧 {userData.message}</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {userData.data.map((user: User) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
