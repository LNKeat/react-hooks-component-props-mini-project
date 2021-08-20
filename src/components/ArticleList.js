import React from "react"
import Article from "./Article"



function minToRead(){
  return(
    <p>min to read ☕️ </p>
  )
}

function ArticleList({posts}){
  return(
    <main>
      {
        posts.map(post => {
          return (
    
          <Article key={post.id} title={post.title} date={post.date} preview={post.preview} emoji={minToRead()}>
          </Article>
          )
        })
      }
    </main>
  )
};

export default ArticleList;