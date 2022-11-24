import {PublishButton} from './index.js'
import {useState} from 'react';

const Article = (props) => {
    const [isPublished, setIsPublished] = useState(false)
    const publishArticle = () => {
        isPublished ? setIsPublished(false) : setIsPublished(true)
    }
    
    return (
        <div>
            <h3>{props.title}</h3>
            <PublishButton isPublished={isPublished} ClickEvent={publishArticle} />
        </div>
    );
};

export default Article;