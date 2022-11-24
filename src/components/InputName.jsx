import {useState} from 'react';
const InputName = (props) => {
    const [Names, setNames] = useState(["だいご","しょうご","ゆうご","りょうご","迷子"])
    const [name, setName] = useState('')

    const NameLists = Names.map((n, index) =>
        <p key={index}>{index+1}：{n}</p>
    );

    const handleClick = () => (
        setNames(
            [...Names,name]
            )
    )
   
    return (
        <div>
            <h1>InputName Practice</h1>
            <span>名前</span>
            <input value={name} onChange ={(e) => setName(e.target.value)}/>
            <button onClick={handleClick}>送信</button>
            {NameLists}
        </div>
    );
};

export default InputName;