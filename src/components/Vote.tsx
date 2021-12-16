import React, { useState } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  vote: number
}

const determineHighlight = (isUp: boolean, isDown: boolean, vote: number) => {
  if (isUp && vote === 1) {
    return 'green'
  }

  if (isDown && vote === -1) {
    return 'red'
  }

  return 'gray'
}

const Wrapper = styled.div`
  float: left;
`

const Button = styled.button<ButtonProps>`
  float: left;
  clear: both;
  color: ${(props) => determineHighlight(props.className === 'up', props.className === 'down', props.vote)};
`

const Vote = ({ adjustVote }: { adjustVote: (userVote: number) => void }) => {
  const [vote, setVote] = useState(0)

  const changeVote = (direction: string) => {
    let newVote = 0
    if (direction === 'up') {
      newVote = vote === 1 ? 0 : 1
    }

    if (direction === 'down') {
      newVote = vote === -1 ? 0 : -1
    }

    setVote(newVote)
    adjustVote(newVote)
  }

  return (
    <Wrapper>
      <Button className="up" onClick={() => changeVote('up')} vote={vote}>
        up
      </Button>
      <Button className="down" onClick={() => changeVote('down')} vote={vote}>
        down
      </Button>
    </Wrapper>
  )
}

export default Vote
