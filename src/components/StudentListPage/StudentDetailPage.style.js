import styled from "styled-components";

export const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

export const ContactDetails = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  text-align: left;
  max-width: 600px;
  width: 100%;
`;

export const DetailsAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const DetailsHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const DetailsInfo = styled.div`
  margin-left: 20px;
`;

export const DetailsButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const EditButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const Icon = styled.i`
  margin-left: 10px;
  cursor: pointer;
  font-size: 1.2em;
  color: #6c757d;

  &:hover {
    color: #343a40;
  }
`;
