import '../style.css'
import { ButtonForm } from './ButtonForm'
import { FeedingFood } from './FeedingFood'
import { NoticeSend } from './NoticeSend'

function App () {
  return (
    <>
      <ButtonForm titleForm='Alimentación'>
        <FeedingFood NoticeSend={<NoticeSend />} />
      </ButtonForm>
    </>
  )
}

export default App
