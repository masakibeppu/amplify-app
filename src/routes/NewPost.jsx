import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import {useState} from 'react';
import dayjs from 'dayjs';
import Typography from '@mui/material/Typography';

export default function NewPost(props) {

    const [contentTitle, setTitle] = useState("タイトル")
    const [contentText, setText] = useState("テキスト")
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

    const changeTitle = (e) => (
        setTitle(e.target.value)
    )
    const changeText = (e) => (
        setText(e.target.value)
    )

    const handleClick = (props) => {
        const date = dayjs().format('YYYY-MM-DD hh:mm:ss');
        props.setPosts([...props.posts, {
            contentTitle, contentText, date
        }]) 
    }

    return (
      <main style={{ padding: "1rem 0" }}>
        <Typography 
            variant="h5"
            textAlign="center" 
            fontWeight="700"
            color="grey"
        >
            新規投稿作成
        </Typography>
        <Container fixed sx={{ bgcolor: '#cfe8fc', height: '500px' }} >
                <div>
                    <TextField 
                        label="タイトルを入力してください" 
                        value={contentTitle} 
                        onChange={changeTitle} 
                        variant="outlined"
                        fullWidth
                        margin = 'normal'
                        helperText = '簡潔に記載してね'
                    />
                </div>
                <div>
                    <TextField 
                        label="本文を入力してください" 
                        value={contentText} 
                        onChange={changeText} 
                        variant="outlined"
                        fullWidth
                        margin = 'normal'
                        multiline
                        rows={4}                        
                    />
                </div>
                <Button variant="contained" onClick={() => handleClick(props)}>投稿</Button>

            </Container>

      </main>
    );
  }