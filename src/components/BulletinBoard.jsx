import {useState} from 'react';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

// const textField  = styled(textField)(({ theme }) => ({
//     marginTop: 20,
//     marginBottom:20,
//     display: 'block',
//     color: pink,
// }));

// const MyComponent = styled('div')({
//     color: 'darkslategray',
//     backgroundColor: 'aliceblue',
//     padding: 8,
//     borderRadius: 4,
//   });

const BulletinBoard = (props) => {

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

    const handleClick = () => {
        const date = dayjs().format('YYYY-MM-DD hh:mm:ss');
        setPosts([...posts, {
            contentTitle,contentText,date
        }]) 
    }

    const DeletePost = (index) => {
        setPosts(
            posts.filter((post, i) => (i !== index))
        )
    }
    
    return (
        <>
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
                        readonly
                        
                    />
                </div>
                <Button variant="contained" onClick={handleClick}>投稿</Button>
            </Container>

                {/* //当たらない
                <textField>ああああ</textField> */}
            <Container fixed sx={{ bgcolor: 'pink' }} >
            <Grid container spacing={12}>
                {posts.map((post,index) => (
                    <Grid item key={index}>
                        <Card>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {post.date}
                                </Typography>
                                <Typography variant="h5" component="div">
                                {post.contentTitle}
                                </Typography>
                                <Typography variant="body2">
                                {post.contentText}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => DeletePost(index)}>削除</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            </Container>
        </>
    )
}

export default BulletinBoard

//titleというワードだとそもそも入力できない。予約語があるっぽい？nameもそう