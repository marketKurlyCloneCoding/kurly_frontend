import React from "react";
import styled from "styled-components";

import {
  BrowserRouter as Router,
  Link,
  withRouter,
} from "react-router-dom";

//이미지 파일
import logo from "./image/logo.png";
import menu from "./image/menu.png";
import search from "./image/search.webp";
import delivery from "./image/delivery.svg";
import cart from "./image/cart.svg";
import dawn_delivery from "./image/dawn_delivery.gif";
import vege_original from "./image/vege_original.png";
import fruit_original from "./image/fruit_original.png";
import seafood_original from "./image/seafood_original.png";

export default withRouter(({ location: { pathname } }) => (
  <HeaderBox>
    <UserMenu>
      <Gif>
        <img src={dawn_delivery} style={{ width: "135px" }} alt="dawn_delivery"/>
      </Gif>
      <LineMenu>
        <Login style={{ color: "#5f0080" }}>회원가입</Login>
        <Login>로그인</Login>
        <Login>고객센터</Login>
      </LineMenu>
    </UserMenu>
    <HeaderLogo>
      <LogoImg>
        <SLink current={false} to="/">
          <img src={logo} style={{ width: "103px", marginTop: "-13px" }} alt="logo"/>
        </SLink>
      </LogoImg>
    </HeaderLogo>
    <Gnb>
      <Category>
        <img src={menu} style={{ width: "16px", marginRight: "12px" }} alt="menu"/>
        <ItemList className="dropDownMenu">
          <Item>
          <SA href="/category/fruit" current={pathname === "/category/vege"}>
            <img
              src={vege_original}
              style={{
                width: "24px",
                height: "24px",
                marginTop: "8px",
                marginRight: "12px",
              }}
            />
            채소</SA>
            <ItemList className="dropDownItem">
            <SA href="/category/vege/1"
                current={pathname === "/category/vege/1"}>
              <ItemDetail>친환경</ItemDetail>
              </SA>
              <SA href="/category/vege/2"  current={pathname === "/category/vege/2"}>
              <ItemDetail>고구마・감자・당근</ItemDetail></SA>
              <SA href="/category/vege/3" current={pathname === "/category/vege/3"}>
              <ItemDetail>시금치・쌈채소・나물</ItemDetail></SA>
            </ItemList>
          </Item>
          <Item>
            <SA href="/category/fruit" current={pathname === "/category/fruit"}>
              <img
                src={fruit_original}
                style={{
                  width: "24px",
                  height: "24px",
                  marginRight: "12px",
                }}
              />
              과일・견과・쌀
            </SA>

            <ItemList className="dropDownItem">
              <SA
                href="/category/fruit/1"
                current={pathname === "/category/fruit/1"}
              >
                <ItemDetail>친환경</ItemDetail>
              </SA>
              <SA
                href="/category/fruit/2"
                current={pathname === "/category/fruit/2"}
              >
                <ItemDetail>제철과일</ItemDetail>
              </SA>
              <SA
                href="/category/fruit/3"
                current={pathname === "/category/fruit/3"}
              >
                <ItemDetail>국산과일</ItemDetail>
              </SA>
            </ItemList>
          </Item>
          <Item>
            <SA
              href="/category/seafood"
              current={pathname === "/category/seafood"}
            >
              <img
                src={seafood_original}
                style={{
                  width: "24px",
                  height: "24px",
                  marginRight: "12px"
                }}
                alt="과일"/>
              수산・해산・건어물
            </SA>

            <ItemList className="dropDownItem">
              <SA
                href="/category/seafood/1"
                current={pathname === "/category/seafood/1"}
              >
                <ItemDetail>제철수산</ItemDetail>
              </SA>
              <SA
                href="/category/seafood/2"
                current={pathname === "/category/seafood/2"}
              >
                <ItemDetail>생선류</ItemDetail>
              </SA>
              <SA
                href="/category/seafood/3"
                current={pathname === "/category/seafood/3"}
              >
                <ItemDetail>굴비・반건류</ItemDetail>
              </SA>
            </ItemList>
          </Item>
        </ItemList>
        전체 카테고리
      </Category>
      <Tools>
        <input
          style={{
            width: "166px",
            height: "36px",
            padding: "0 60px 0 14px",
            border: "1px solid #f7f7f6",
            borderRadius: "18px",
            backgroundColor: "#f7f7f7",
            fontWeight: "400",
            fontSize: "12px",
            color: "#666",
            lineHeight: "16px",
          }}
          placeholder="search"
        />
        <img
          src={search}
          style={{
            position: "absolute",
            width: "30px",
            left: "202px",
            top: "10px",
          }}
          alt="검색"/>
        <ToolsItem>
          <img
            src={delivery}
            style={{ width: "30px", margin: "0px 10px 0px 0px" }}
            alt="배달"/>
          <img
            src={cart}
            style={{ width: "30px", margin: "0px 10px 0px 0px" }}
            alt="장바구니"/>
        </ToolsItem>
      </Tools>
    </Gnb>
  </HeaderBox>
));

const SA = styled.a`
    text-decoration: none;
    color: ${(props) => (props.current ? "#5f0080" : "#333")};
    width:219px;
`;

const SLink = styled(Link)`
  /* padding: 15px 20px; */
  color: ${(props) => (props.current ? "#5f0080" : "#333")};
  text-decoration: none;
`;

const HeaderBox = styled.div`
  width: auto;
  height: auto;
`;

const UserMenu = styled.div`
  position: relative;
  width: 1050px;
  height: 37px;
  margin: 0 auto;
`;
// 새벽배송 gif
const Gif = styled.div`
  float: left;
  height: 37px;
  padding: 10px 0 0 0px;
`;
const LineMenu = styled.div`
  float: right;
  height: 37px;
  padding: 0 22px 0 10px;
  line-height: 35px;
  white-space: nowrap;
`;

const Login = styled.div`
  float: left;
  height: 37px;
  padding: 0 22px 0 10px;
  line-height: 35px;
  white-space: nowrap;
  font-weight: 400;
  font-size: 12px;
`;

const HeaderLogo = styled.div`
  position: relative;
  width: 1050px;
  height: 63px;
  margin: 0 auto;
`;

const LogoImg = styled.div`
  display: block;
  width: 103px;
  height: 79px;
  margin: 0 auto;
`;

//네비게이션 전체 감싸는 태그
const Gnb = styled.div`
  width: 1050px;
  letter-spacing: -0.3px;
  height: 56px;
  margin: 0 auto;
`;

//전체 카테고리 <- 호버하면 밑에 아이템 박스 나올 수 있도록
const Category = styled.div`
  &:hover .dropDownMenu {
    display: flex;
    justify-content: start;
    position: absolute;
    top: 150px;
    /* left: 0px; */
    padding: 10px 0px 30px;
    text-align: left;
    font-size: 14px;
    background-color: #fafafa;
  }
  .dropDownMenu {
    display: none;

  }
  z-index: 90;
  float: left;
  font-weight: 700;
  width: 360px;
  height: 40px;
  padding: 16px 0px 0px;
  
`;

//ItemList 용도는 드롭박스 내에 아이템들을 묶어줘서 드롭박스 css를 먹게해줌
const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  width: 219px;
  height: auto;
  z-index: 99;

`;
//드롭박스 내 가장 왼쪽 줄 박스
const Item = styled.div`
  &:hover .dropDownItem {
    display: flex;
    justify-content: start;
    position: absolute;
    top: 0px;
    left: 219px;
    font-size: 14px;
    background-color: white;
  }
  .dropDownItem {
    display: none;
    background-color: #fafafa;
  }
  width: 219px;
  height: 40px;
  padding: 4px 16px;
  font-size: 14px;

  
`;
// 드롭박스 2차 박스 - 친환경...등
const ItemDetail = styled.div`
  justify-content: start;
  width: 219px;
  height: 40px;
  padding: 10px 32px;
  background-color: #fafafa;
  font-size: 14px;
`;

// 검색창/카트/지도 전체 묶어주는
const Tools = styled.div`
  position: relative;
  width: 360px;
  float: right;
  height: 40px;
  padding: 6px 0px 0px;
`;

// 카트/지도 각각의 css
const ToolsItem = styled.div`
  float: right;
  width: 90px;
  padding-top: 4px;
`;
