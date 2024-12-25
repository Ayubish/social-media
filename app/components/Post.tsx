import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { FiBookmark, FiHeart, FiMessageSquare, FiShare } from "react-icons/fi";

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
    <div key={id} className="m-5 p-1 border rounded-md">
      <div className="grid grid-flow-col">
        
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-slate-400 mr-3"></div>
          <div>
            <p>{name}</p>
            <p>{timestamp}</p>
          </div>
        </div>
        <BsThreeDots className="justify-self-end" />
      </div>

      <div className="w-full">
      <p>{textcontent}</p>
      {pics && pics.map((picurl, index)=> (
        <Image key={index} src={picurl} alt="post pic" width={1000} height={100} quality={10} className="w-full h-auto max-lg:max-h-56 lg:max-h-64 object-cover" loading="lazy"/>
        
      ))}
      </div>

      <div className="flex justify-between px-5 mt-3">
      <FiHeart size={18}/> 
      <FiMessageSquare size={18}/>
      <FiBookmark size={18}/>
      <FiShare size={18}/>
      </div>
    </div>
  );
}
