const ButtonComponent = ({label, color}) => {
    return (
        <button style={{backgroundColor: color}}>
            {label}
        </button>
    );
};

export default ButtonComponent;