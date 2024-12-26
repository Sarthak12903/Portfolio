export default function About() {
  return (
    <div
      id="about"
      className="ml-72 p-9 w-[80%] h-screen space-y-12 flex flex-col flex-wrap"
    >
      <div className="space-y-4">
        <h1 className="text-3xl font-bold pb-3 broder border-b-2 border-yellow-300 inline-block">
          About
        </h1>
        <p>
          My name is Sarthak Bhalerao, and I am a Full-stack Developer from
          India. I am passionate about creating diverse websites and learning
          programming languages. I possess a comprehensive understanding of
          HTML, CSS, JavaScript, React.js, Node.js, Express.js, and C++.
          Additionally, I am eager to explore opportunities for collaboration
          and contribute my skills to your team.
        </p>
      </div>
      <div>
        <img src="/Sarthak.jpeg" className="rounded-xl" />
        <div></div>
      </div>
      <div></div>
    </div>
  );
}
