import React from 'react';

const LikeComponent = ({isChecked, displayText}) => {
    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        checkbox: {
            cursor: 'pointer'
        },
        text: {
            fontSize: '14px',
            color: '#333333'
        }
    };

    return (
        <div style={styles.container}>
            <input
                type="checkbox"
                checked={isChecked}
                style={styles.checkbox}
                readOnly
            />
            <span style={styles.text}>{displayText}</span>
        </div>
    );
};


export default LikeComponent;