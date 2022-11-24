import {useState, useEffect} from 'react';

const CountButton = (props) => {
    const [isCount, setIsCount] = useState(1)
    const countUp = () => {
        setIsCount(isCount+1)
    }
    const countDown = () => {
        setIsCount(isCount-1)
    }

    useEffect (() =>{
        console.log("レンダリングした？")
    },[isCount])

    return (
        <div>
            <p>{isCount}</p>
            <button onClick={countUp}>
               アップ
            </button>
            <button onClick={countDown}>
               ダウン
            </button>
        </div>
    );
};

export default CountButton;
