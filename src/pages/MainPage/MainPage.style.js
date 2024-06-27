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
import React from "react";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="group">
        <div className="overlap">
          <div className="payment-history">
            <div className="overlap-group">
              <div className="list">
                <div className="element">
                  <img className="icon" alt="Icon" src="icon.png" />
                  <div className="text">
                    <div className="text-wrapper">게시글 제목</div>
                  </div>
                  <p className="div">2 March 2021, 13:45 PM</p>
                  <div className="text-wrapper-2">♥ : 0개</div>
                  <div className="overlap-group-2">
                    <div className="text-wrapper-3">작성자명</div>
                    <div className="text-wrapper-3">작성자명</div>
                  </div>
                </div>
                <div className="element-2">
                  <div className="trending-wrapper">
                    <img className="trending" alt="Trending" src="trending.svg" />
                  </div>
                  <div className="div-wrapper">
                    <div className="text-wrapper">게시글 제목</div>
                  </div>
                  <p className="div">2 March 2021, 13:45 PM</p>
                  <div className="text-wrapper-4">♥ : 0개</div>
                  <div className="overlap-group-2">
                    <div className="text-wrapper-3">작성자명</div>
                    <div className="text-wrapper-3">작성자명</div>
                  </div>
                </div>
                <div className="element-2">
                  <div className="trending-wrapper">
                    <img className="trending" alt="Trending" src="trending.svg" />
                  </div>
                  <div className="text">
                    <div className="text-wrapper">게시글 제목</div>
                  </div>
                  <p className="div">2 March 2021, 13:45 PM</p>
                  <div className="text-wrapper-4">♥ : 0개</div>
                  <div className="overlap-group-2">
                    <div className="text-wrapper-3">작성자명</div>
                    <div className="text-wrapper-3">작성자명</div>
                  </div>
                </div>
                <div className="element-2">
                  <div className="trending-wrapper">
                    <img className="trending" alt="Trending" src="trending.svg" />
                  </div>
                  <div className="text">
                    <div className="text-wrapper">게시글 제목</div>
                  </div>
                  <p className="div">2 March 2021, 13:45 PM</p>
                  <div className="text-wrapper-4">♥ : 0개</div>
                  <div className="overlap-group-2">
                    <div className="text-wrapper-3">작성자명</div>
                    <div className="text-wrapper-3">작성자명</div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-5">게시글</div>
            </div>
          </div>
          <div className="pagination">
            <img className="showing-from" alt="Showing from" src="showing-1-5-from-100-data.svg" />
            <div className="page">
              <img className="dropdown" alt="Dropdown" src="image.svg" />
              <div className="overlap-group-wrapper">
                <div className="overlap-group-3">
                  <div className="text-wrapper-6">1</div>
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-2">
                  <div className="text-wrapper-7">2</div>
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-2">
                  <div className="text-wrapper-7">3</div>
                </div>
              </div>
              <img className="dropdown" alt="Dropdown" src="dropdown.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};