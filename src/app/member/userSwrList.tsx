'use client';
import useSWR from 'swr';

type User = {
  id: number;
  name: string;
  email: string;
};

const UserSwrList = () => {
  const url = './data.json';
  // const url = 'https://jsonplaceholder.typicode.com/users';

  const { data } = useSWR(url);

  // 動かない？

  return (
    <div>
      <h1>ユーザー一覧</h1>
      <h5>{data != undefined ? data.message : 'error...'}</h5>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {data != undefined ? (
            data.data.map((user: User, i: number) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td> no data ...</td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserSwrList;
