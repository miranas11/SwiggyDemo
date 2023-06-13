const Shimer = () => {
    return (
        <div className="res-container">
            {Array(10)
                .fill("")
                .map((e, index) => (
                    <div key={index} className="shimer-card"></div>
                ))}
        </div>
    );
};

export default Shimer;
