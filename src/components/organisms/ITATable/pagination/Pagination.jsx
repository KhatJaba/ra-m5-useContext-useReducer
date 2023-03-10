import React, { useContext } from 'react'
import styled from 'styled-components'
import { TableContext } from '../store/context'
// eslint-disable-next-line import/named
import { Button, Icon, Text } from '../../../atoms'
import { FlexBox } from '../../../../styles'

const PaginationStyled = styled(FlexBox).attrs({ direction: 'row' })`
  gap: 1rem;
  ${Text} {
    font-weight: 900;
  }
  ${Button} {
    &:disabled {
      background-color: grey;
    }
  }
`
function Pagination() {
  const { state, dispatch } = useContext(TableContext)
  const { currentPage, itemPerPage } = state

  const totaPage = Math.ceil(state.currentData.length / itemPerPage)

  const previous = () => {
    if (currentPage > 1) {
      dispatch({ type: 'SET_CURRENTPAGE', payload: currentPage - 1 })
    }
  }

  const next = () => {
    if(currentPage < totaPage ) {
      dispatch({ type: 'SET_CURRENTPAGE', payload: currentPage + 1 })
    }    
  }

  return (
    <PaginationStyled>
      <Button disabled={currentPage === 1} onClick={previous}>
        <Icon icon="arrow_back_ios" />
      </Button>
      <Text>Página {currentPage} de {totaPage}</Text>
      <Button disabled={currentPage === totaPage} onClick={next}>
        <Icon icon="arrow_forward_ios" />
      </Button>
    </PaginationStyled>
  )
}

export default Pagination


