import { useContext, useRef } from "react";
// import PostList from "./PostList";
import {PostList} from "../store/Post-list-store";
function CreatePost(){
  const {addPost}=useContext(PostList)
  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();

  const handleSubmit=(event)=>{
        event.preventDefault();
        const userId=userIdElement.current.value;
        const postTitle=postTitleElement.current.value;
        const postBody=postBodyElement.current.value;
        const reactions=reactionsElement.current.value;
        const tags=tagsElement.current.value.split(" ");
        userIdElement.current.value=" "
        postTitleElement.current.value=" "
        postBodyElement.current.value=" "
        reactionsElement.current.value=" "
        tagsElement.current.value=" "
        
        addPost(userId,postTitle,postBody,reactions,tags);
          
  }
  return <form onSubmit={handleSubmit} className="CreatePost">
  <div className="mb-3">
    <label htmlFor="userid" className="form-label">Enter your User Id here</label>
    <input ref={userIdElement} type="text" placeholder="Your User Id" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div> 
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input ref={postTitleElement} type="text" placeholder="Enter your post title here" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="textarea" className="form-label">Post Content</label>
    <textarea ref={postBodyElement} rows="4" type="text" placeholder="Enter your post content here" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="number" className="form-label">Number of reactions</label>
    <input ref={reactionsElement} type="text" placeholder="Enter your post reaction  here" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div> 
  <div className="mb-3">

    <label htmlFor="number" className="form-label">Enter your hash Tag here</label>
    <input ref={tagsElement} type="text" placeholder="Please Enter your tags with space" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
 
  <button type="submit" className="btn btn-primary">Post</button>
</form>
}

export default CreatePost;