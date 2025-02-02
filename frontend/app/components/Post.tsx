import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { FiBookmark, FiHeart, FiMessageSquare, FiShare } from "react-icons/fi";
import { formatTimestamp } from "@/lib/formatTimestamp.js"
interface PostProps {
  post:{
    userId:{
      fullname: string;
      username: string;
    }
    _id: string;
    createdAt: string;
    content: string;
    media: Array<string>;
  }
}
export default function Post({post}:PostProps) {
  const pics = post.media;
  return (
    <div key={post._id} className="m-5 p-1 border rounded-md">
      <div className="grid grid-flow-col">
        
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-slate-400 mr-3 overflow-hidden flex items-center">{pics.length>0 && <Image src={pics[0]} alt="profile" width={200} height={0} className="w-full h-auto object-fill"/>}</div>
          <div>
            <p className="text-xl font-medium">{post.userId.fullname}</p>
            <p className="text-gray-500">{formatTimestamp(post.createdAt)}</p>
          </div> 
        </div>
        <BsThreeDots className="justify-self-end" />
      </div>

      <div className="w-full">
      <p>{post.content}</p>
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
