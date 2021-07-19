import React from "react";


import styled from "styled-components";
import logo from "./image/logo.png";
import menu from "./image/menu.png";
import search from "./image/search.webp";
import delivery from "./image/delivery.svg";
import cart from "./image/cart.svg";
import dawn_delivery from "./image/dawn_delivery.gif";
import vege_original from "./image/vege_original.png";
import fruit_original from "./image/fruit_original.png";
import seafood_original from "./image/seafood_original.png";

const Header = (props) => {
    return (
        <React.Fragment>
            <div>
            <UserMenu>
                <Gif>
                <img src={dawn_delivery} style={{ width: "135px"}}/>
                </Gif>
                <LineMenu>
                    <Login style={{color: "#5f0080"}}>
                        회원가입
                    </Login>
                    <Login>
                        로그인
                    </Login>
                    <Login>
                        고객센터
                    </Login>
                </LineMenu>
            </UserMenu>
                  <HeaderLogo>
                    <LogoImg>
                         <img src={logo} style={{ width: "103px", marginTop:"-13px"}}/>
                    </LogoImg>
                 </HeaderLogo>
                    <Gnb>
                        <Category> 
                            <img src={menu} style={{ width: "16px", marginRight:"12px"}}/>
                            <ItemList className="dropDownMenu">
                                    <Item>
                                        <img src={vege_original} style={{ width: "24px",height:"24px", marginTop:"8px",marginRight:"12px"}}/> 채소
                                            <ItemList className="dropDownItem">
                                                    <ItemDetail>
                                                        친환경
                                                    </ItemDetail>
                                                    <ItemDetail>
                                                        고구마・감자・당근
                                                    </ItemDetail>
                                                    <ItemDetail>
                                                        시금치・쌈채소・나물
                                                    </ItemDetail>
                                            </ItemList>
                                    </Item>
                                     <Item>
                                        <img src={fruit_original} style={{ width: "24px",height:"24px",marginRight:"12px"}}/>  과일・견과・쌀
                                            <ItemList className="dropDownItem">
                                                        <ItemDetail>
                                                            친환경
                                                        </ItemDetail>
                                                        <ItemDetail>
                                                            제철과일
                                                        </ItemDetail>
                                                        <ItemDetail>
                                                            국산과일
                                                        </ItemDetail>
                                                </ItemList>
                                    </Item>
                                    <Item>
                                            <img src={seafood_original} style={{ width: "24px",height:"24px",marginRight:"12px"}}/>  수산・해산・건어물
                                            <ItemList className="dropDownItem">
                                                    <ItemDetail>
                                                        제철수산
                                                    </ItemDetail>
                                                    <ItemDetail>
                                                        생선류
                                                    </ItemDetail>
                                                    <ItemDetail>
                                                        굴비・반건류
                                                    </ItemDetail>
                                             </ItemList>
                                        </Item>
                                </ItemList>
                            전체 카테고리 
                        </Category>
                        <Tools>
                                <input style={{  
                                    width: "166px",
                                    height: "36px",
                                    padding: "0 60px 0 14px",
                                    border: "1px solid #f7f7f6",
                                    borderRadius: "18px",
                                    backgroundColor: "#f7f7f7",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                    color: "#666",
                                    lineHeight: "16px"
                                }} 
                                    placeholder="search" />
                                    <img src={search} style={{position:"absolute",width:"30px", left:"202px", top:"10px"}}/>
                                    <ToolsItem>
                                        <img src={delivery}  style={{ width: "30px", margin:"0px 10px 0px 0px"}}/>
                                        <img src={cart} style={{ width: "30px", margin:"0px 10px 0px 0px"}}/>
                                    </ToolsItem>
                        </Tools>
                    </Gnb>
        </div>
    </React.Fragment>
    )
}

Header.defaultProps = {}

export default Header;



const UserMenu  = styled.div`
    position: relative; 
    width: 1050px;
    height: 37px;
    margin: 0 auto;
`
const Gif = styled.div`
    float: left;
    height: 37px;
    padding: 10px 0 0 0px;
`
const LineMenu = styled.div`
    float: right;
    height: 37px;
    padding: 0 22px 0 10px;
    line-height: 35px;
    white-space: nowrap;
`

const Login = styled.div`
    float: left;
    height: 37px;
    padding: 0 22px 0 10px;
    line-height: 35px;
    white-space: nowrap;
    font-weight:400;
    font-size:12px;
`

const HeaderLogo = styled.div`
    position: relative;
    width: 1050px;
    height: 63px;
    margin: 0 auto;
`

const LogoImg = styled.div`
    display: block;
    width: 103px;
    height: 79px;
    margin: 0 auto;
`
// const Sticky = styled.div`
//     position: sticky;
//     top:0px;
// `

const Gnb= styled.div`
    sticky{
        position: -webkit-sticky;
        position: sticky;
        top: 0;
}
    width: 1050px;
    letter-spacing: -0.3px;
    height: 56px;
    margin: 0 auto ;
`


const Category = styled.div`
    &:hover .dropDownMenu {
        display: flex;
        justify-content: start;
        position: absolute;
        top: 150px;
        lett: 0px;
        width: 100%
        padding: 10px 0 30px;
        text-align: left;
        font-size:14px;
        background-color:#fff;
    }
    .dropDownMenu {
        display: none;
    }
    z-index: 90;
    float:left;
    font-weight:700;
    width: 360px;
    height: 40px;
    padding: 16px 0px 0px;

`
//ItemList 용도는 드롭박스 내에 아이템들을 묶어줘서 드롭박스 css를 먹게해줌
const ItemList = styled.div`
    display: flex;
    flex-direction: column;
    width:219px;
    height:auto;
    background-color: #fafafa;
`
const Item = styled.div`
    &:hover .dropDownItem {
        display: flex;
        justify-content: start;
        position: absolute;
        top: 0px;
        left: 219px;
        font-size:14px;
 
    }
    .dropDownItem {
        display: none;
        background-color: #fafafa;
    }
    width: 219px;
    height: 40px;
    padding: 4px 16px;
    font-size: 16px;
    z-index: 90;


`
const ItemDetail = styled.div`
    width: 219px;
    height: 40px;
    padding: 4px 16px;
    background-color: #fafafa;
    font-size: 16px;
    transition: all 5s linear
`

const Tools = styled.div`
    position:relative;
    width: 360px;
    float: right;
    height: 40px;
    padding: 6px 0px 0px;
`

const ToolsItem = styled.div`
    float:right;
    width: 90px;
    padding-top:4px;
`

