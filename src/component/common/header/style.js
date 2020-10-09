import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
`;

export const LeftLogo = styled.a`
  display: flex;
  float: left;
  margin: 0 30px;
  height: 56px;
  justify-content: center;
  align-items: center;

  img {
    width: 60px;
    height: 30px;
    cursor: pointer;
  }
`;

export const RightShow = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  float: right;
  margin: 0 16px;

  .item1 {
    margin: 0px 8px;
    line-height: 48px;
    font-size: 24px;
    color: #999;
    cursor: pointer;
  }
  .item2 {
    padding: 8px 16px;
    font-size: 16px;
    color: #969696;
    cursor: pointer;
  }
  .item3 {
    margin-left: 10px;
    padding: 8px 16px;
    font-size: 16px;
    color: #ec7259;
    background-color: #fff;
    border-radius: 50px;
    border: 1px solid #ec7259;
    cursor: pointer;

    &:hover {
      background-color: rgba(236,97,73,.05);
    }
  }
  .item4 {
    color: #fff;
    background-color: #ea6f5a;

    &:hover {
      background-color: #ec6149;
    }

    .edit {
      margin-right: 8px;
    }
  }
`;

export const MiddleShow = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0px 16px;
  box-sizing: border-box;
  height: 100%;

  .middle1 {
    font-size: 17px;
    color: #333;
    line-height: 56px;
    padding: 0 20px;
    cursor: pointer;

    &:hover {
      background-color: #f5f5f5;
    }
  }
  .middle3 {
    position: relative;
    margin-left: 15px;

    &.focused {
      .search {
        width: 240px;
      }
      .searchIcon {
        background: #969696;
        color: #fff;
      }
    }

    .search {
      width: 160px;
      height: 38px;
      padding: 0px 40px 0px 20px;
      font-size: 14px;
      background: #eee;
      border-radius: 40px;
      outline: none;
      border: none;
      transition: all .2s .1s linear;

      &::placeholder {
        color: #aaa;
      }
    }
    .searchIcon {
      position: absolute;
      top: 4px;
      right: 5px;
      width: 30px;
      line-height: 30px;
      border-radius: 50%;
      text-align: center;
      cursor: pointer;
    }
    .historySearch {
      position: absolute;
      top: 48px;
      width: 300px;
      padding: 5px;
      background: #fff;
      box-sizing: border-box;
      box-shadow: 0 0 8px rgba(0,0,0,.2);

      &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-bottom-color: #fff;
        left: 20px;
        bottom: 99%;
      }
      .searchItem {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 20px;
        padding: 10px 15px;
        font-size: 14px;
        color: #333;

        &:hover {
          background-color: #f0f0f0;
          border-radius: 4px;

          .right {
            display: block;
          }
        }
        .left {
          display: flex;
          align-items: center;

          span {
            margin-left: 10px;
          }
        }
        .right {
          display: none;
          cursor: pointer;
          color: #a0a0a0;
          font-size: inherit;
        }
      }
    }
  }
`;

