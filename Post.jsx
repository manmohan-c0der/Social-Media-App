import { useContext } from "react";
import {TiDelete } from "react-icons/ti";
import { PostList } from "../store/Post-list-store";
function Post({post}){
  const {deletePost}=useContext(PostList)
  return <div className="card post-card" style={{width: "30rem"}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}
    <span onClick={()=>deletePost(post.id)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    <TiDelete />
    
  </span></h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag)=> <span key={tag} className="badge text-bg-primary hashtag ">{tag}</span>)}
    <div className="alert alert-info reaction" role="alert">
    This Post Reacted by {post.reactions} People
</div>
  </div>
</div>
}

export default Post;