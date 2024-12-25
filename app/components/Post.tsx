import { BsThreeDots } from "react-icons/bs";

interface PostProps {
  name: string;
  username: string;
  id: number;
  timestamp: string;
  textcontent: string;
  pics: Array<string>;
}
export default function Post({
  name,
  username,
  id,
  timestamp,
  textcontent,
  pics,
}: PostProps) {
  return (
    <div key={id} className="m-5 p-5 border rounded-md shadow-md">
      <div className="grid justify-items-stretch">
        <div className="w-10 h-10 rounded-full bg-slate-400 mr-3"></div>
        <div>
          <p>{name}</p>
          <p>{timestamp}</p>
        </div>
        <BsThreeDots className="justify-self-end" />
      </div>
      <p>{textcontent}</p>
    </div>
  );
}
