import React from 'react'
import { useSelector } from 'react-redux'
import Post from '../../Post.js' 


export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const post = useSelector(state =>
    state.posts.find(post => post.twitterId ===  match.params.twitterId)
  )

  if (!post) {
    console.log(match)
    console.log(match.params.twitterId)
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }
  
  return (
      
    <div>
    {post}
    </div>
  )
}