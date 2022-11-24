const PublishButton = (props) => {
    return (
       <button onClick={() => props.ClickEvent()}>
         公開状態：{props.isPublished.toString()}
       </button>
    );
};

export default PublishButton;
