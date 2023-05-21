import MemberList from './memberList';
import UserList from './userList';
import UserSwrList from './userSwrList';

const Member = () => {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <MemberList />
      <UserList />
      <UserSwrList />
    </div>
  );
};

export default Member;
