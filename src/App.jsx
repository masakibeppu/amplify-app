import Typography from '@mui/material/Typography';
import { Outlet, Link } from "react-router-dom";
import {useState} from 'react';


function App() {

    const [posts, setPosts] = useState([
        {
            date: "2022-09-10",
            contentTitle: "いいこと",
            contentText: "今日はアイスを食べました！"
        },
        {
            date: "2022-08-22",
            contentTitle: "悪いこと",
            contentText: "今日はうんこを踏みました！"
        },
        {
            date: "2022-08-11",
            contentTitle: "日本の人口",
            contentText: "今何人いるんですかね？"
        }
    ])

  return (
    <div>
        <Typography 
            variant="h3"
            textAlign="center" 
            fontWeight="700"
        >
            Bulletin Board
        </Typography>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/new-post" state={{ state: [posts, setPosts] }}>新規作成</Link> |{" "}
        <Link to="/posts" state={{ state: [posts, setPosts] }}>投稿一覧</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
