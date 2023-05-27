import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>About ページ</h1>
      <ul>
        <li>
          <Link href="member">メンバーリスト</Link>
        </li>
        <li>
          <Link href="good">いいねボタン</Link>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default About;
