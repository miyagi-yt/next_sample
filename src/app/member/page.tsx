import MemberList from './memberList';
import UserList from './userList';

const Member = () => {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <MemberList />
      <UserList />
    </div>
  );
};

export default Member;
