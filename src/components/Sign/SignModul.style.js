import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 525px;
  margin: auto;
  padding: 20px;
  background: #c8c8c8;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
  color: #6a6f8c;
  font: 600 16px/18px 'Open Sans', sans-serif;
  box-sizing: border-box;
  background: rgba(40, 57, 101, .9);
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TabLabel = styled.label`
  font-size: 22px;
  margin: 0 15px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  color: #6a6f8c;
  ${({ selected }) => selected && `
    color: #fff;
    border-color: #1161ee;
  `}
`;

export const Content = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
  color: #000;
  display: flex;
  flex-direction: column;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
`;
