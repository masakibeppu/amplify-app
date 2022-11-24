import {useState} from 'react';
const Item = (props) => {
    const [lists, setLists] = useState(["英語","数学","国語","理科","社会"])
    
    //追加
    const addLists = () => {
        setLists(
            [...lists, "その他"]
        );
    }

    //削除
    const deleteLists = () => {
        setLists(
            lists.filter((list, index) => (index !== lists.length-1))
        )
    }

    const itemsArray = lists.map((list,index)=>
    <p key={index}>{index},{list}</p>
    )
    
    return (
        <div>
            <h1>Array Operate Practice</h1>
            <button onClick={addLists}>
            配列増やすよ
            </button>
            <button onClick={deleteLists}>
            配列減らすよ
            </button>

            <p>{lists}</p>
            {itemsArray}
        </div>
    );
};

export default Item;