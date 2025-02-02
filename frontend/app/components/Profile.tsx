import Image from "next/image";
import { Suspense } from "react";
import { UserPosts } from "../u/[username]/getUserPosts";

export default function Profile({user}) {
  //const { logout } = useContext(AuthContext);

  return (
    <div>
      <div className="flex flex-col">
        <div className="w-full h-28 bg-indigo-500">cover</div>
        <button className="px-5 rounded-full border border-blue-600 absolute top-5 right-5">Edit profile</button>

        <div className="absolute top-20 left-0 right-0 m-auto w-fit">
          <div className="w-24 h-24 rounded-full relative overflow-hidden">
            <Image src={user.profilepic? user.profilepic: "/profile_placeholder.jpeg"} sizes="30vw" alt={user.username} fill={true} priority />
          </div>
        </div>


        
        <div className="mt-16 text-center p-2">
          <p className="font-semibold text-2xl leading-4">{user.fullname? user.fullname: user.username}</p>
          <p className="text-sm">@{user.username}</p>
      <div className="flex justify-evenly my-2">
          <button>12 <br /> Friends</button>
          <button>23K <br /> Followers</button>
          <button>35 <br /> Posts</button>
        </div>
          <p>{user.bio? user.bio: "No bio yet"}</p>
        </div>
      </div>
      <div className="flex justify-evenly border-b-2">
        <button className="border-b-2 border-blue-600">Posts</button>
        <button>Repost</button>
        <button>Media</button>
      </div>

      <div>
          <Suspense fallback={<div>Loading posts...</div>}>
            <UserPosts userId={user._id} />
          </Suspense>

      </div>
      {/* <div>
        {user.posts && user.posts.map((post)=>{
          return <Post key={post._id}
                    fullname={post.user.fullname}
                    username={post.user.username}
                    _id={post._id}
                    timestamp={post.createdAt}
                    content={post.content}
                    pics={post.pictures}
                  />
        })}
      </div> */}

      {/* <button onClick={()=>logout()}>LogOut</button> */}
    </div>
  )
}
