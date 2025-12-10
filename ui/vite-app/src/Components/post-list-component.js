import React, {useState} from 'react';
import PostListItem from './post-list-item-component';

const PostList = ({posts}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPosts = posts.slice(indexOfFirstItem, indexOfLastItem);

    const containerStyle = {
        padding: '1rem',
        maxWidth: '800px',
        margin: '0 auto'
    };

    const paginationStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginTop: '1rem'
    };

    const buttonStyle = {
        padding: '0.5rem 1rem',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    };

    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, Math.ceil(posts.length / itemsPerPage)));
    };

    return (
        <div style={containerStyle}>
            {currentPosts.map((post, index) => (
                <PostListItem
                    key={index}
                    title={post.title}
                    imagePath={post.imagePath}
                />
            ))}
            <div style={paginationStyle}>
                <button
                    style={buttonStyle}
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button
                    style={buttonStyle}
                    onClick={handleNextPage}
                    disabled={currentPage === Math.ceil(posts.length / itemsPerPage)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PostList;