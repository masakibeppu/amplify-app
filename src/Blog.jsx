import React from 'react'
import Article from './components/Article'

class Blog extends React.component {
  constructor(props) {
    super(props);
    this.state = {
    isPublished: false
    }
  }
  render(){
    // function Blog() {
        return (
            <>
                <Article 
                    title={"タイトルです！"}
                    // isPublished={this.state.isPublished}
                />
            </>
        )
    }
}
export default Blog;