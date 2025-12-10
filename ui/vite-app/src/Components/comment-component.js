import React from 'react';
import PropTypes from 'prop-types';

const CommentComponent = ({author, text}) => {
    const styles = {
        commentContainer: {
            border: '1px solid #e1e1e1',
            borderRadius: '8px',
            padding: '15px',
            margin: '10px 0',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
        },
        authorName: {
            fontSize: '14px',
            fontWeight: '600',
            color: '#333333',
            marginBottom: '8px'
        },
        commentText: {
            fontSize: '14px',
            color: '#666666',
            lineHeight: '1.4'
        }
    };

    return (
        <div style={styles.commentContainer}>
            <div style={styles.authorName}>{author}</div>
            <div style={styles.commentText}>{text}</div>
        </div>
    );
};

CommentComponent.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default CommentComponent;
