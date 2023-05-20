type Member = {
  id: number;
  name: string;
  email: string;
};

const getMembers = async () => {
  /* 
  // その１
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const members: Member[] = await response.json();
  */

  // その２
  const members: Member[] = await fetch(
    'https://jsonplaceholder.typicode.com/users',
  ).then((response) => response.json());

  return members;
};

const MemberList = async () => {
  const members = await getMembers();
  return (
    <div>
      <h1>ユーザー一覧</h1>
      <ul>
        {members &&
          members.map((member) => <li key={member.id}>{member.name}</li>)}
      </ul>
    </div>
  );
};

export default MemberList;
