import React from 'react';
import NavBar from '../Components/navbar-component';
import PostList from '../Components/post-list-component';
import ButtonComponent from '../Components/button-component';

const HomePage = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    };

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        padding: '2rem'
    };

    const mockPosts = [
        {id: 1, title: "First Post", imagePath: "/profile1.jpg"},
        {id: 2, title: "Second Post", imagePath: "/profile2.jpg"},
        {id: 3, title: "Third Post", imagePath: "/profile3.jpg"}
    ];

    return (
        <div style={containerStyle}>
            <NavBar/>
            <PostList posts={mockPosts}/>
            <div style={buttonContainerStyle}>
                <ButtonComponent label="Create Post" color="#007bff"/>
            </div>
        </div>
    );
};

export default HomePage;
