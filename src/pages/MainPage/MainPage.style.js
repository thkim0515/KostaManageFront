// MainPage.style.js

import styled from 'styled-components';

export const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.main`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

export const LabelWrapper = styled.div`
  .label {
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  .text-wrapper {
    font-size: 16px;
    color: #333;
  }

  .box {
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }

  .group {
    display: flex;
    flex-direction: column;
  }

  .overlap {
    margin-bottom: 20px;
  }

  .payment-history {
    margin-bottom: 20px;
  }

  .overlap-group {
    display: flex;
    flex-direction: column;
  }

  .list {
    margin-bottom: 20px;
  }

  .element {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .icon {
    margin-right: 10px;
  }

  .trending {
    width: 24px;
    height: 24px;
  }

  .text {
    flex: 1;
  }

  .div {
    margin-left: 10px;
    color: #999;
  }

  .text-wrapper-2,
  .text-wrapper-4 {
    color: #ff0000;
  }

  .overlap-group-2 {
    display: flex;
  }

  .text-wrapper-3 {
    margin-right: 10px;
  }

  .text-wrapper-5 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .pagination {
    display: flex;
    align-items: center;
  }

  .showing-from {
    margin-right: 10px;
  }

  .page {
    display: flex;
    align-items: center;
  }

  .dropdown {
    width: 24px;
    height: 24px;
    margin-left: 5px;
    margin-right: 5px;
  }

  .overlap-group-wrapper,
  .overlap-wrapper {
    display: flex;
    align-items: center;
  }

  .overlap-group-3,
  .overlap-2 {
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    margin-right: 5px;
  }

  .text-wrapper-6,
  .text-wrapper-7 {
    color: #333;
  }
`;
