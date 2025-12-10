import React, {useState} from 'react';
import CommentComponent from './comment-component';

const CommentListComponent = ({comments}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const commentsPerPage = 5;

    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);
    const totalPages = Math.ceil(comments.length / commentsPerPage);

    const styles = {
        container: {
            padding: '20px',
            maxWidth: '800px',
            margin: '0 auto'
        },
        pagination: {
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '20px'
        },
        pageButton: {
            padding: '8px 12px',
            border: '1px solid #e1e1e1',
            borderRadius: '4px',
            backgroundColor: '#ffffff',
            cursor: 'pointer'
        },
        activeButton: {
            backgroundColor: '#007bff',
            color: '#ffffff',
            border: 'none'
        },
        disabledButton: {
            opacity: 0.5,
            cursor: 'not-allowed'
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div style={styles.container}>
            {currentComments.map((comment, index) => (
                <CommentComponent
                    key={index}
                    author={comment.author}
                    text={comment.text}
                />
            ))}
            <div style={styles.pagination}>
                <button
                    style={{
                        ...styles.pageButton,
                        ...(currentPage === 1 ? styles.disabledButton : {})
                    }}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        style={{
                            ...styles.pageButton,
                            ...(currentPage === index + 1 ? styles.activeButton : {})
                        }}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    style={{
                        ...styles.pageButton,
                        ...(currentPage === totalPages ? styles.disabledButton : {})
                    }}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default CommentListComponent;