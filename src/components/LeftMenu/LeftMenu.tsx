import { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';


const InnerWrapper = styled.div`
    border:2px solid black;
    border-radius: 10px;
    width: 250px;
    min-height: 240px;
    text-align: center;
`;

const PersonInfo=styled.div`
    display:grid;
    grid-template-columns: 1fr;
    align-items:center;

    #foto{
    padding-top:14px;
    padding-bottom:14px;
    width:100px;
    border-radius:90px;
    margin:0 auto;
    }

    #name{
    margin-top:10px;
    margin-bottom:10px;
    color:blue;
    font-weight:bold;
    }

    #job{
    color:grey;
    padding-bottom:20px;
    border-bottom:1px solid lightgray;
    }
`;

const PersonDetails=styled.div`
    display:grid;
    grid-template-columns:20% 60% 20%;
    align-items:center;
    .leftImgs{
        grid-column:1;
        margin-left:14px;
        margin-top:5px;
        margin-bottom:5px;
    }
    .middle{
        grid-column:2;
        text-align:left;
        margin-top:5px;
        margin-bottom:5px;
    }
    .rightImgs{
        grid-column:3;
        border:1px solid black;
        padding:4px;
        border-radius:6px;
        margin-top:5px;
        margin-bottom:5px;
    }

`;



export const LeftMenu: FC = () => {
    return (
        <Wrapper>
            <InnerWrapper>
                <PersonInfo>
                    <img id="foto" src="./icons/portrair1.jpg" />
                    <span id="name">Jan Ser</span>
                    <span id="job">Job title - Company</span>
                </PersonInfo>
                <PersonDetails>
                    <img className="leftImgs" src="./icons/network.png"/>
                    <span className="middle">Your network</span>
                    <img className="rightImgs" src="./icons/user-plus.png"/>

                    <img className="leftImgs" src="./media/icons/publications.png"/>
                    <span className="middle">Your Publications</span>
                    <img className="rightImgs" src="./media/icons/plus.png" />
                </PersonDetails>
            </InnerWrapper>
        </Wrapper>
    );
};