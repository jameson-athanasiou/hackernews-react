import React, { useEffect } from 'react'
import { useGetStories } from '../hooks/useFetch'
import StoryCard from './StoryCard'

const Application = (): React.ReactElement => {
  const { loading, data, error } = useGetStories('http://localhost:3000/stories')

  console.log(data)
  return (
    <>
      <div>HackerNews (React Edition)</div>
      {!loading &&
        data &&
        data.map((story) => {
          return <StoryCard key={story.id} story={story} />
        })}
    </>
  )
}

export default Application
