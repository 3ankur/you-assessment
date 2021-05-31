
import styled from "styled-components";
import { MdHome, MdHistory, MdExplore, MdSubscriptions, MdVideoLibrary } from "react-icons/md";

const StyledSideNavBar = styled.nav`
    height: 100%;
    width: 80px;
    position: fixed;
    z-index: 1;
    top: 66px;
    left: 0;
    background-color: #f9f9f9;
    overflow: hidden;
    padding-top: 20px;
    display: flex;
    flex-direction: column;

    svg{
        height: 1.5rem;
        width: 1.5rem;
        color:#616161;
    }

    a{
        padding: 16px 0 14px;
        display:flex;
        align-items: center;
        flex-direction: column;
        text-decoration: blink;
       
        &:hover{
            background: #e8e8e8;
        }

    .title{
        max-width: 100%;
        display: block;
        max-height: 1.4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 10px;
        font-weight: 400;
        line-height: 1.4rem;
        color: #606060
    }
    }
`;

const Sidebar = () => {

    return (
        <StyledSideNavBar>
            <a href="#"> <MdHome />  <div className="title">Home</div></a>
            <a href="#"> <MdExplore />  <div className="title"> Explore</div> </a>
            <a href="#"> <MdVideoLibrary /><div className="title">Library</div> </a>
            <a href="#"> <MdSubscriptions /> <div className="title">Subscription</div></a>
            <a href="#"> <MdHistory /> <div className="title">History</div></a>
        </StyledSideNavBar>
    )


}
export default Sidebar;