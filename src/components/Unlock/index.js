import {useState} from 'react'

import {
  LockContainer,
  LockImage,
  LockParagraph,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isLock, setLock] = useState(true)

  const onClickButton = () => {
    setLock(prev => !prev)
  }

  const lockImage = isLock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const lockParagraph = isLock
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'

  return (
    <LockContainer>
      <LockImage src={lockImage} alt={isLock ? 'lock' : 'unlock'} />
      <LockParagraph>{lockParagraph}</LockParagraph>
      <Button type="button" onClick={onClickButton}>
        {isLock ? 'Unlock' : 'Lock'}
      </Button>
    </LockContainer>
  )
}

export default Unlock
