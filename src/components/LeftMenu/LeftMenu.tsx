import {FC} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

//import {Wrapper} from '../../styledHelpers/Components';
import {LeftNav} from './LeftNav';

const Wrapper3 = styled.div`
    max-width:220px;
    margin:0 40px 0 0;
`;

const InnerWrapper = styled.div`
    border-radius: 10px;
    width: 220px;
    text-align: center;
    background: ${Colors.white};

`;

const PersonInfo=styled.div`
    display:grid;
    grid-template-columns: 1fr;
    align-items:center;

    a{
        text-decoration:none;
        color:${Colors.purple};
    }

    #foto{
    padding-top:14px;
    padding-bottom:14px;
    width:100px;
    border-radius: 50%;
    margin:0 auto;
    }

    #name{
    margin-top:10px;
    margin-bottom:10px;
    color:${Colors.purple};
    font-weight:bold;
    }

    #job{
    color:${Colors.lightgrayOriginal};
    padding-bottom:20px;
    border-bottom:1px solid ${Colors.lightgray};
    }
`;

const PersonDetails=styled.div`
    margin-top:10px;
    padding-bottom:10px;
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
        border:1px solid ${Colors.black};
        padding:4px;
        border-radius:6px;
        margin-top:5px;
        margin-bottom:5px;
        cursor:pointer;
    }

`;



export const LeftMenu: FC = () => {
    return (
        <Wrapper3>
            <InnerWrapper>
                <PersonInfo>
                    <img id="foto" alt="User portrair"/>
                    <span id="name"><Link to="/profile"></Link></span>
                    <span id="job">Job title - Company</span>
                </PersonInfo>
                <PersonDetails>
                    <img className="leftImgs" alt="Network icon"/>
                    <span className="middle">Your network</span>
                    <img className="rightImgs" src="./icons/user-plus.png" alt="User+ icon"/>

                    <img className="leftImgs" src="./media/icons/publications.png" alt="Publications icon"/>
                    <span className="middle">Your Publications</span>
                    <img className="rightImgs" src="./media/icons/plus.png" alt="Plus icon"/>
                </PersonDetails>
            </InnerWrapper>
            <LeftNav>

            </LeftNav>
        </Wrapper3>
    );
};