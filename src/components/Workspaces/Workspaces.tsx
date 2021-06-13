import {FC} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
// import {Wrapper} from '../../styledHelpers/Components';
import {boxShadow} from '../../styledHelpers/Components';
import {SingleWorkspaceWindow} from './SingleWorkspaceWindow';
import SwiperCore, { EffectFade } from 'swiper';
SwiperCore.use([EffectFade]);

const InnerWrapper = styled.div`
    max-width:940px;
    /* ${boxShadow()}; */

    .swiper-container {
        width:100%;
        overflow:hidden;
    }

    .swiper-wrapper {
        width:100%;
        display: flex;
    }

    /* .SwiperSlide{

    } */
`;

const Name = styled.p`
    margin-top:20px;
    margin-left:10px;
    font-size:${fontSize[20]};

`;

// const Slider = styled.div`
//     width:400px;
//     border:2px solid red;
//     overflow-x:scroll;
//     display: flex;
// `;


export const Workspaces: FC = () => {
    return (
        <InnerWrapper>
            <Name>Workspaces</Name>
            {/* <Slider> */}
                <Swiper
                    freeMode={true}

                >
                    <SwiperSlide><SingleWorkspaceWindow></SingleWorkspaceWindow></SwiperSlide>
                    <SwiperSlide><SingleWorkspaceWindow></SingleWorkspaceWindow></SwiperSlide>
                    <SwiperSlide><SingleWorkspaceWindow></SingleWorkspaceWindow></SwiperSlide>
                    <SwiperSlide><SingleWorkspaceWindow></SingleWorkspaceWindow></SwiperSlide>
                    <SwiperSlide><SingleWorkspaceWindow></SingleWorkspaceWindow></SwiperSlide>
                    <SwiperSlide><SingleWorkspaceWindow></SingleWorkspaceWindow></SwiperSlide>
                    <SwiperSlide><SingleWorkspaceWindow></SingleWorkspaceWindow></SwiperSlide>
                    <SwiperSlide><SingleWorkspaceWindow></SingleWorkspaceWindow></SwiperSlide>
                    <SwiperSlide><SingleWorkspaceWindow></SingleWorkspaceWindow></SwiperSlide>
                </Swiper>
            {/* </Slider> */}

        </InnerWrapper>
    );
};