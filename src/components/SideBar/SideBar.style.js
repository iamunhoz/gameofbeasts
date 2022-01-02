import styled from "styled-components"

const SideBarStyle = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1;

  .vertical {
    writing-mode: vertical-rl;
    text-orientation: upright;
  }
`

export { SideBarStyle }