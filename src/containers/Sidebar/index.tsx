import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'

import * as S from './styles'
import { EditButton, Input } from '../../styles'
import { filtering } from '../../store/reducers/filter'

type Props = {
  showSearchBar: boolean
}

const Sidebar = ({ showSearchBar }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = () => navigate('/')

  const { input } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      {showSearchBar ? (
        <Input
          type="text"
          placeholder="Digite o nome para buscar o contato"
          value={input}
          onChange={(e) => dispatch(filtering(e.target.value))}
        />
      ) : (
        <S.ReturnButton onClick={handleClick}>
          Voltar a lista de contatos{' '}
        </S.ReturnButton>
      )}
    </S.Aside>
  )
}

export default Sidebar
