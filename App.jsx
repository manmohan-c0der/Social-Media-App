import Header from './Component/Header'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Component/Footer'
import SideBar from './Component/Sidebar'
import CreatePost from './Component/CreatePost'
import PostList from './Component/PostList'
import { useState } from 'react'
import PostListProvider from './store/Post-list-store'

function App() {
  
  const [SelectTab,setSelectTab]=useState("Home")
  return (
      <PostListProvider>
      <div className='AppContainer'>
        <SideBar SelectTab={SelectTab} setSelectTab={setSelectTab}></SideBar>
        <div className="content">
        <Header></Header>
       { SelectTab=="Home" ? <PostList></PostList> :<CreatePost></CreatePost>

       }
        
        
      <Footer></Footer>
        </div>
        </div>
        </PostListProvider>
  )
}

export default App
