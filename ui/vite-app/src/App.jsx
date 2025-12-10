import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './Components/navbar-component.jsx'
import EditAccount from './Pages/edit-account.jsx'
import LoginPage from './Pages/login-page.jsx'
import Homepage from './Pages/homepage.jsx'
import ViewPostPage from './Pages/view-post-page.jsx'
// import CreateAccount from './Pages/create-account-page.jsx'
// import AdminPanel from './Pages/admin-panel-page.jsx'
// import CreateComment from './Pages/create-comment-page.jsx'
// import CreatePost from './Pages/create-post-page.jsx'


import './App.css'

function App() {

    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/edit-account" element={<EditAccount/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/post" element={<ViewPostPage/>}/>
            </Routes>
        </Router>
    )
}

export default App
