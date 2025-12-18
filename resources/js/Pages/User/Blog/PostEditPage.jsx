import PostCreate from "@/Components/Posts/PostCreate";

export default function PostEditPage({post}) {
  return (
    <div className="m-4">
        <PostCreate postData={post} action="Update"/>
    </div>
  )
}
