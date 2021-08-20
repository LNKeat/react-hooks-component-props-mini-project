import React from "react"

function emoji(minutes){
  const num = Math.ceil(minutes/5)*5
  const cup = "☕️"
  const bentoBox = "🍱"
  let emoji;
  if(minutes < 30){
    emoji = cup
    return emoji.repeat(num/5)
  }else{
    emoji = bentoBox
    return emoji.repeat(num/10)
  }
}

function Article({title, date="January 1, 1970", preview, minutes}){
  return(
    <article>
      <h3>{title}</h3>
      <small>{date} {emoji(minutes)}{minutes} min read</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article; 