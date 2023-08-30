import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { RowBetween } from '../Row';
import { ChevronDown } from 'react-feather';
import { Button as RebassButton, ButtonProps } from 'rebass/styled-components';

const Base = styled(RebassButton)<{
  padding?: string;
  width?: string;
  borderRadius?: string;
  altDisabledStyle?: boolean;
}>`
  padding: ${({ padding }) => (padding ? padding : '18px')};
  width: ${({ width }) => (width ? width : '100%')};
  font-weight: 500;
  text-align: center;
  border-radius: 20px;
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  outline: none;
  // border: 1px solid transparent;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: 0.25s;

  &:disabled {
    cursor: auto;
  }

  > * {
    user-select: none;
  }
`;

export const ButtonPrimary = styled(Base)`
  // background-color: ${({ theme }) => theme.primary6};
  // background: pink;
  color: white;
  background-color: rgb(2,200,255);
    box-shadow: rgb(255 255 255) 0px 0px 0.25rem, rgb(255 255 255) 0px 0px 0.25rem inset, #6c7fdd 0px 0px 1rem, #6c7fdd 0px 0px 1rem inset, #6c7fdd 0px 0px 2rem, #6c7fdd 0px 0px 2rem inset;
  &:focus {
    // box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.primary1)};
    background-color: rgb(2,200,255);
    box-shadow: rgb(255 255 255) 0px 0px 0.25rem, rgb(255 255 255) 0px 0px 0.25rem inset, #6c7fdd 0px 0px 1rem, #6c7fdd 0px 0px 1rem inset, #6c7fdd 0px 0px 2rem, #6c7fdd 0px 0px 2rem inset;
      inset 0 0 3rem #cd77d3;
    background-color: ${({ theme }) => darken(0.05, theme.primary6)};
  }
  &:hover {
    // background-color: ${({ theme }) => darken(0.05, theme.primary6)};
    background-color: white;
    // box-shadow: 0 0 0.1rem #fff, inset 0 0 0.2rem #fff, 0 0 0.2rem #cd77d3, inset 0 0 2.5rem #cd77d3, 0 0 0rem #cd77d3, inset 0 0 3rem #cd77d3;
    color: black;
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.primary5)};
    background-color: ${({ theme }) => darken(0.1, theme.primary4)};
  }
  &:disabled {
    background-color: ${({ theme, altDisabledStyle, disabled }) =>
      // altDisabledStyle ? (disabled ? theme.bg3 : theme.primary6) : theme.bg3};
      altDisabledStyle ? (disabled ? 'transparent' : theme.primary6) : 'transparent'};
    color: ${({ theme, altDisabledStyle, disabled }) => (altDisabledStyle ? (disabled ? 'white' : 'white') : 'white')};
    cursor: auto;
    box-shadow: none;
    border: 1px solid transparent;
    outline: none;
    opacity: ${({ altDisabledStyle }) => (altDisabledStyle ? '0.5' : '1')};
  }
`;

export const ButtonSecondary = styled(Base)`
  border: 1px solid ${({ theme }) => theme.primary4};
  color: ${({ theme }) => theme.primary1};
  background-color: transparent;
  font-size: 16px;
  border-radius: 12px;
  padding: ${({ padding }) => (padding ? padding : '10px')};

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.primary4};
    border: 1px solid ${({ theme }) => theme.primary3};
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.primary3};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.primary4};
    border: 1px solid ${({ theme }) => theme.primary3};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
  a:hover {
    text-decoration: none;
  }
`;

export const ButtonOutlined = styled(Base)`
  border: 1px solid ${({ theme }) => theme.bg2};
  background-color: transparent;
  color: ${({ theme }) => theme.text1};

  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.bg4};
  }
  &:hover {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.bg4};
  }
  &:active {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.bg4};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`;

export const ButtonEmpty = styled(Base)`
  background-color: transparent;
  color: ${({ theme }) => theme.text1};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`;

const ButtonConfirmedStyle = styled(Base)`
  background-color: ${({ theme }) => lighten(0.5, theme.green1)};
  color: ${({ theme }) => theme.green1};
  border: 1px solid ${({ theme }) => theme.green1};

  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`;

const ButtonErrorStyle = styled(Base)`
  background-color: ${({ theme }) => theme.red1};
  border: 1px solid ${({ theme }) => theme.red1};

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.red1)};
    background-color: ${({ theme }) => darken(0.05, theme.red1)};
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.red1)};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.red1)};
    background-color: ${({ theme }) => darken(0.1, theme.red1)};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
    box-shadow: none;
    background-color: ${({ theme }) => theme.red1};
    border: 1px solid ${({ theme }) => theme.red1};
  }
`;

export function ButtonConfirmed({
  confirmed,
  altDisabledStyle,
  ...rest
}: { confirmed?: boolean; altDisabledStyle?: boolean } & ButtonProps) {
  if (confirmed) {
    return <ButtonConfirmedStyle {...rest} />;
  } else {
    return <ButtonPrimary {...rest} altDisabledStyle={altDisabledStyle} />;
  }
}

export function ButtonError({ error, ...rest }: { error?: boolean } & ButtonProps) {
  if (error) {
    return <ButtonErrorStyle {...rest} />;
  } else {
    return <ButtonPrimary {...rest} />;
  }
}

export function ButtonDropdown({ disabled = false, children, ...rest }: { disabled?: boolean } & ButtonProps) {
  return (
    <ButtonPrimary {...rest} disabled={disabled}>
      <RowBetween>
        <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
        <ChevronDown size={24} />
      </RowBetween>
    </ButtonPrimary>
  );
}

export function ButtonDropdownLight({ disabled = false, children, ...rest }: { disabled?: boolean } & ButtonProps) {
  return (
    <ButtonOutlined {...rest} disabled={disabled}>
      <RowBetween>
        <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
        <ChevronDown size={24} />
      </RowBetween>
    </ButtonOutlined>
  );
}
