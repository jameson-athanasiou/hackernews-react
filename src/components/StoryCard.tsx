import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Vote from './Vote'

type StoryCardProps = {
  story: Story
}

const Card = styled.div`
  border: 1px solid black;
  margin-bottom: 10px;
  max-width: 600;
  padding: 10px;
`

const StoryCard = ({ story }: StoryCardProps) => {
  const { by, descendants, title, score = 0, url } = story

  const [votes, setVotes] = useState(score)

  const adjustVote = useCallback(
    (userVote: number) => {
      setVotes(score + userVote)
    },
    [setVotes]
  )

  return (
    <Card>
      <Vote adjustVote={adjustVote} />
      <div>
        {title} (<a href={url}>{url}</a>)
      </div>
      <div>
        {votes} points by {by} | {descendants} comments
      </div>
    </Card>
  )
}

export default StoryCard
