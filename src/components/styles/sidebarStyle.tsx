import styled from 'styled-components';

export const Styles = styled.div<{ menuOpened: boolean }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 1;
  .sidebar {
    height: 100%;
    width: 224px;
    display: block;
    background-color: transparent;
    border-radius: 0px 40px 0px 5px;
    ${({ theme, menuOpened }) => theme.mediaWidth.upToMedium`
      display: ${menuOpened ? 'block' : 'none'};
      position: absolute;
      z-index: 2;
      background: white;
      height: calc(100% - 133px);
    `};
    .topbar {
      height: calc((100% - 33px) * 3 / 5);
      .list {
        padding: 20px 10px;
        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
          background: linear-gradient(to right, #6c7fdd 0%, #cd77d3 54.09%, #e4bad0 100%);
          border-radius: 0.75rem;
          padding: 0.625rem 1rem;
          margin: 5px;
          cursor: pointer;
          &:hover {
            background-color: rgba(57, 208, 216, 0.05);
          }
          .left-item {
            display: flex;
            align-items: center;
            .left-icon {
              padding: 6px;
              margin-right: 15px;
              border-radius: 0.5rem;
              background-image: linear-gradient(to bottom right, rgba(57, 208, 216, 0.2), rgba(57, 208, 216, 0));
              height: 28px;
              width: 28px;
              display: flex;
              img {
              }
            }
            .title {
              font-weight: 500;
              font-size: 0.875rem;
              line-height: 1.25rem;
              width: 100px;
            }
          }
          .right-item {
            svg {
              height: 16px;
            }
          }
        }
        .active {
          background-color: white;
        }
      }
    }
    .divider {
      padding: 16px 32px;
      .divider-line {
        height: 1px;
        width: 100%;
        background-color: #19374f;
      }
    }
    .bottombar {
      height: calc((100% - 33px) / 5 * 2);
      // overflow-y: scroll;
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        background: linear-gradient(to right, #6c7fdd 0%, #cd77d3 54.09%, #e4bad0 100%);
        padding: 0.625rem 1rem;
        cursor: pointer;
        &:hover {
          background-color: rgba(57, 208, 216, 0.05);
        }
        .left-item {
          display: flex;
          align-items: center;
          .left-icon {
            padding: 0.375rem;
            margin-right: 15px;
            border-radius: 0.5rem;
            background-image: linear-gradient(to bottom right, rgba(57, 208, 216, 0.2), rgba(57, 208, 216, 0));
            height: 1rem;
            width: 1rem;
            img {
            }
          }
          .title {
            font-weight: 500;
            font-size: 0.875rem;
            line-height: 1.25rem;
            width: 100px;
          }
        }
        .right-item {
          svg {
            height: 16px;
          }
        }
      }
      .active {
        background-color: white;
      }
    }
  }
`;
