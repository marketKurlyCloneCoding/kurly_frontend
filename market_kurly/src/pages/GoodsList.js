import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import ListPage from "../components/ListPage";
import banner from "./banner.jpg"

const GoodsList = (props) => {

    return (
        <React.Fragment>
            <Header>
            </Header>
              <Page>
              <InnerMenu>
                <Banner>
                  <img src={banner} />
                </Banner>
              </InnerMenu>
              <ListPage>
                이미지 들어가는 곳
              </ListPage>
             </Page>             
        </React.Fragment>
    );
    }

export default GoodsList;


const Page = styled.div`
  min-width: 1050px;
  padding-bottom: 120px;
  margin: 0 auto;
`

const Banner = styled.div`
max-width: 1050px;
margin: 0 auto;
`


const InnerMenu = styled.div`
        width: 1050px;
        height: 353px;
        margin: 0 auto;
`


const List = styled.div`
        diplay: flex;
        width: 308px;
        height: 396px;
        margin: 0 auto;
        padding: 0 29px;
`