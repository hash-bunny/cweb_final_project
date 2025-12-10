import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './Components/navbar-component'
import PostList from './Components/post-list-component'
import './App.css'

function App() {
    const dummyPosts = [
        {title: "First Post", imagePath: "/post1.jpg", postId: "1"},
        {title: "Second Post", imagePath: "/post2.jpg", postId: "2"},
        {title: "Third Post", imagePath: "/post3.jpg", postId: "3"}
    ]

    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<PostList posts={dummyPosts}/>}/>
            </Routes>
        </Router>
    )
}

export default App
