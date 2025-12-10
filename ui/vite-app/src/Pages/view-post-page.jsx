import React from 'react';
import {useNavigate} from 'react-router-dom';
import LikeComponent from '../Components/like-component';
import CommentListComponent from '../Components/comment-list-component';

const ViewPostPage = () => {
    const navigate = useNavigate();

    const currentUser = 'testUser'

    const dummyPost = {
        title: "Sample Post Title",
        text: "This is a sample post content with multiple paragraphs.\n\nIt contains various formatting and lengthy text to demonstrate how the post would look with real content.",
        author: "testUser",
        comments: [
            {
                author: "User1",
                text: "This is the first comment on this post. Great content!"
            },
            {
                author: "User2",
                text: "Second comment here. I disagree with some points."
            },
            {
                author: "User3",
                text: "Very informative post, thanks for sharing!"
            },
            {
                author: "User4",
                text: "I have a question about the second paragraph..."
            },
            {
                author: "User5",
                text: "Looking forward to more posts like this!"
            },
            {
                author: "User6",
                text: "Interesting perspective on the topic."
            }
        ]
    };

    const styles = {
        container: {
            padding: '20px',
            maxWidth: '800px',
            margin: '0 auto'
        },
        titleSection: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px'
        },
        title: {
            fontSize: '24px',
            fontWeight: 'bold',
            flex: 1
        },
        buttonGroup: {
            display: 'flex',
            gap: '10px'
        },
        editButton: {
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            display: currentUser === dummyPost.author ? 'block' : 'none'
        },
        deleteButton: {
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            display: currentUser === dummyPost.author ? 'block' : 'none'
        },
        postContent: {
            marginBottom: '30px',
            lineHeight: '1.6',
            fontSize: '16px'
        },
        commentSection: {
            marginTop: '30px'
        },
        commentHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
        },
        commentTitle: {
            fontSize: '20px',
            fontWeight: 'bold'
        },
        commentButton: {
            padding: '8px 16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
        }
    };

    const handleCommentClick = () => {
        navigate('/create-comment');
    };

    return (
        <div style={styles.container}>
            <LikeComponent/>
            <div style={styles.titleSection}>
                <h1 style={styles.title}>{dummyPost.title}</h1>
                <div style={styles.buttonGroup}>
                    <button style={styles.editButton}>Edit Post</button>
                    <button style={styles.deleteButton}>Delete Post</button>
                </div>
            </div>
            <div style={styles.postContent}>{dummyPost.text}</div>
            <div style={styles.commentSection}>
                <div style={styles.commentHeader}>
                    <h2 style={styles.commentTitle}>Comments</h2>
                    <button style={styles.commentButton} onClick={handleCommentClick}>
                        Leave a comment
                    </button>
                </div>
                <CommentListComponent comments={post.comments}/>
            </div>
        </div>
    );
};


export default ViewPostPage;