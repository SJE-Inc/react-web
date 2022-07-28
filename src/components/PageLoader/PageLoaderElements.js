import styled from "styled-components";


export const PageLoaderContainer = styled.div`
  background-color: #010606;
  height: 100vh;
  width: 100%;
  display: ${({ loading }) => (loading ? 'flex' : 'none')};
  /* display: flex; */
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

`