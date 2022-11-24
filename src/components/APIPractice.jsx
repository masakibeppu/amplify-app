import {useState, useEffect} from 'react';

const APIPractice = (props) => {

const [name, setName] = useState("")
const [id, setId] = useState("google")

const ids = ["deatiger", "gaearon", "aws", "google"]

const getId = () => {
    const _id = ids[Math.floor(Math.random()*ids.length)]
    console.log(_id)
    setId(_id)
}
   
useEffect(() =>{
    fetch(`https://api.github.com/users/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setName(data.name)
    })
},[id])

    return (
        <div>
            <p>{id}のGitHub上の名前は{name}です</p>
            <button onClick={() => getId()}>
               API取得
            </button>
            
        </div>
    );
};

export default APIPractice;