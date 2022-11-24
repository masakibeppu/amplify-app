import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import {useState} from 'react';

export default function Posts(props) {
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

const DeletePost = (index) => {
  setPosts(
      posts.filter((post, i) => (i !== index))
  )
}
  
    return (
      <main style={{ padding: "1rem 0" }}>
        <Typography 
            variant="h5"
            textAlign="center" 
            fontWeight="700"
            color="grey"
        >
            投稿一覧
        </Typography>
        <Container >
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
      </main>
    );
  }