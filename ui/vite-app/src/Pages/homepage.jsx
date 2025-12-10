import React from 'react';
import PostList from '../Components/post-list-component.jsx';

const Homepage = () => {
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
            <PostList posts={mockPosts}/>
            <div style={buttonContainerStyle}>
                <button style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}>
                    Create Post
                </button>
            </div>
        </div>
    );
};

export default Homepage;
