import { createContext, useReducer } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => { let newPostList=currPostList;
     if(action.type==="DELETE_POST"){
       newPostList=currPostList.filter((post)=>post.id!==action.payload.PostId)
     }
     else if(action.type==="ADD_POST"){
        newPostList=[action.payload,...currPostList]
     }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId,postTitle,postBody,reactions,tags) => {
     dispatchPostList({
      type:"ADD_POST",
      payload: {
        id: Date.now(),
        title:postTitle,
        body:postBody,
        reactions:reactions,
        userId: userId,
        tags: tags,
      }
     }) 
  };
  const deletePost = (PostId) => {
    dispatchPostList({
      type:"DELETE_POST",
      payload:{
        PostId,
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hello,Guys I am going to Mumbai for my vacation . Hope to enjoys a lot . peace out",
    reactions: 5,
    userId: "user-42",
    tags: ["Vacation", "Enjoying", "Mumbai", "Travelling"],
  },
  {
    id: "2",
    title: "B.tech Complete",
    body: "Hello , Guys Finally I Completed 4 years of b.tech",
    reactions: 34,
    userId: "user-43",
    tags: ["Graduating", "hardWork", "Motivation", "Difficult to Complete"],
  },
];

export default PostListProvider;
