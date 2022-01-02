import styled from "styled-components"

const BeastCardStyle = styled.div`
  border-radius: 5px;
  width: 180px;
  display: flex;
  justify-content: space-between;

  h5 {
    color: orange;
  }
  & .primary-block {
    display: grid;

    & > h5,svg {
      grid-column-start: 1;
      grid-row-start: 1;
    }
  }

  & .secondary-block {
    display: flex;
    flex-direction: column;
  }
`

export { BeastCardStyle }