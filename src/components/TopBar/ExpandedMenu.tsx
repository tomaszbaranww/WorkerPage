import { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

const Wrapper = styled.div`
    position: absolute;
    background: ${Colors.white};
    padding-top:10px;
    padding-left:24px;
    border: 1px solid lightgray;
    width:200px;
    ul{
        font-size:15px;
    }
    li{
        margin-top:10px;
        margin-bottom:10px;

    }
    .icons{
        margin-right:20px;
    }
    .category{
            font-size:12px;

        }
`;

const CustomInput = styled.input`
    border:1px solid lightgray;
    padding:4px;
    text-align:left;
    &:outline{
        outline:none;
    }
    &:focus{
        outline:none;
    }
`;

const Account = styled.div`
    display:grid;
    grid-template-columns:60px 1fr;
    grid-template-rows: 1fr;
    border-top:1px solid lightgray;
    border-bottom:1px solid lightgray;
    align-items: center;
    #portrair{
        width:28px;
        border-radius:90px;
        grid-column: 1;
        grid-row: 1;
    }
    #name{
        grid-column: 2;
        grid-row: 1;
        margin-bottom:30px;
        color:blue;
    }
    #see{
        grid-column: 2;
        grid-row: 1;
        margin-top:30px;
        font-size:12px;
    }

`;

const Logout = styled.div`
    text-align:center;
    padding:10px;
    border-top:1px solid lightgray;
    img{
        padding-right:16px;
    }
`;

export const ExpandedMenu: FC = () => {

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text= e.target.value;
        setInputText(text);
    }

    return (
        <Wrapper>
            <ul>
                <CustomInput type="text" value={inputText} onChange={inputHandler} placeholder="Filter..."/>

                <li className="category">Platform</li>
                {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/house2.png" className="icons"/>Home</li>
                }
                {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/publications.png" className="icons"/>Publications</li>
                }
                {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/people.png" className="icons"/>People</li>
                }
                {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/entities2.png" className="icons"/>Entities</li>
                }
                {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/administration.png" className="icons"/>Administration</li>
                }

                <li className="category">Workspaces</li>
                {'Client contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/ecosystem.png" className="icons"/>Client contract</li>
                }
                {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/ecosystem.png" className="icons"/>Supplier contract</li>
                }
                {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/entities.png" className="icons"/>Corporate</li>
                }
                {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/ecosystem.png" className="icons"/>Group Norms</li>
                }
                {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/ecosystem.png" className="icons"/>Real estate contracts</li>
                }

                <li className="category">Account</li>
                <Account>
                    <img id="portrair" src="./imgs/portrair1.jpg"/>
                    <li id="name">Jan Ser</li>
                    <li id="see">See profile</li>
                </Account>
                <li><img src="./media/icons/privacy.png" className="icons"/>Privacy</li>
                <li><img src="./media/icons/settings.png" className="icons"/>Settings</li>

            </ul>

            <Logout>
                <img src="./media/icons/logout.png"/>
                <span>Logout</span>
            </Logout>
        </Wrapper>
    );
};