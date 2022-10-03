import styled from "styled-components";


export const Text = styled.span<{ fontSize: string; color: string }>`
  font-size: ${({theme, fontSize}) => theme.fontSizes[fontSize]};
  color: ${({ color }) => color};
`