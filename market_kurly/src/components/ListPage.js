import React, { useState } from "react";
import styled from "styled-components";


const ListPage = (props) => {

// ESC6 Destructuring 
// let [ a, b] =[10,100]
let [a,b]  = useState(List)

    return (
        <React.Fragment>
           <ListGoods>
                   <List>

                   </List>
           </ListGoods>
        </React.Fragment>
    )
}


export default ListPage;

const ListGoods = styled.div`
        width: 1050px;
        height: auto;
        margin: 0 auto;
`

const List = styled.div`
       width: 336px;
       height: 643px;
       padding: 28px 28px 0px 0px;
       background-color:skyblue;

`

