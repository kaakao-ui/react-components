import styled from "styled-components";
import { IVisuallyHidden } from "./VisuallyHidden.types";

const VisuallyHidden = styled.div.attrs<IVisuallyHidden>((props) => ({
  "data-testid": props.testId,
  "data-kaakao-id": "visuallyhidden",
  "data-kaakao-version": PACKAGE_VERSION,
}))<IVisuallyHidden>`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export default VisuallyHidden;
