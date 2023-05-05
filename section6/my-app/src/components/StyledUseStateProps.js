import React, { useState } from 'react'
import styled from 'styled-components'

const StyledUseStateProps = () => {
  const [isRed, setIsRed] = useState(false)

  return (
    <>
      <StyledComponent isRed={isRed}>
        <p>props + useState のテスト</p>
        <button onClick={() => setIsRed(!isRed)}>色を変える</button>
      </StyledComponent>
    </>
  )
}

const StyledComponent = styled.div`
  width: 200px;
  height: 100px;
  background-color: ${(props) => (props.isRed ? "red" : "green")}
`

export default StyledUseStateProps
