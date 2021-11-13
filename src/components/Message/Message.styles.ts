import styled from "styled-components";

interface ErrorMessageBodyType {
    isSuccess: boolean
}

export const ErrorMessageBody = styled.div<ErrorMessageBodyType>`
  background-color: ${(props) => (props.isSuccess ? "#34C197" : "#FF2567")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  border-radius: 12px;
  max-width: 457px;
  min-height: 122px;
  padding: 0px 16px 0px 34px;
  box-sizing: border-box;
`

export const ErrorMessageTitle = styled.div`
  display: flex;
  line-height: 24px;
  margin: 0 0 8px 0;
`

export const ErrorMessageTitleText = styled.h2`
  font-weight: 600;
  font-size: 17px;
  margin: 0 0 0 18px;
`

export const ErrorMessageText = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  padding: 0 24px 0 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const CloseButton = styled.div`
  background-color: transparent;
  border: none;
  margin: 0 0 0 auto;
  cursor: pointer;
`