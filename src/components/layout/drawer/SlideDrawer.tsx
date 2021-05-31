import { MdExplore, MdHistory, MdHome, MdList, MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import styled from "styled-components";
import youLogo from "../assets/images/logo.png";
const StyledDrawer = styled.div`
height: 100%;
width: 15rem;
position: fixed;
z-index: 205;
top: 0;
left: 0;
background-color: #fff;
overflow-x: hidden;
transition: 0.5s;
padding-top: 0px;

  .open{
    transform: translateX(0);
  }
}`;

const StyledDrawerHeader = styled.header`
padding: 0.8rem;
border-bottom: 1px solid #ccc;

img{
    height: 20px;
}

button[name="side-nav-action"]{
    border: none;
    background: none;
    cursor: pointer;

    svg{
        height: 1.2rem;
        width: 1.5rem;
        color: #616161;
        padding-right: 20px;
        margin-left: 5px;
    }


    &:focus{
        border:none ;
        outline:none;
    }

    &:visited{
        border:none ;
        outline:none;
    }
    &:target{
        border:none ;
        outline:none;
    }
}
`;

const StyledSideNavBar = styled.nav`
    height: 100%;
 
    width: inherit;
    position: fixed;
    z-index: 1;
    top: 56px;
    left: 0;
    background-color: #fff;
    overflow: hidden;
    padding-top: 10px;
    display: flex;
    flex-direction: column;

    svg{
        height: 1.5rem;
        width: 1.5rem;
        color:#616161;
    }

    a{
        padding: 10px 20px 10px;
        width: 100%;
        display:flex;
        align-items: center;
        flex-direction: row;
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
        font-size: 16px;
        font-weight: 400;
        line-height: 1.4rem;
        color: #030303;
        padding-left: 12px;
    }
    }
`;


type Props = {
    closeDrawer: any
}

const SideDrawer = ({closeDrawer}:Props ) => {
    return (
        <StyledDrawer>
            <StyledDrawerHeader>
            <button onClick={closeDrawer} name="side-nav-action"><MdList /></button>
                <a href="#">
                    <img src={youLogo} alt="youtube-logo" />
                </a>
            </StyledDrawerHeader>

            <StyledSideNavBar>
            <a href="#"> <MdHome />  <div className="title">Home</div></a>
            <a href="#"> <MdExplore />  <div className="title"> Explore</div> </a>
            <a href="#" style={{borderBottom: "1px solid #ccc"}}> <MdSubscriptions /> <div className="title">Subscription</div></a>

            <a href="#"> <MdVideoLibrary /><div className="title">Library</div> </a>
           <a href="#"> <MdHistory /> <div className="title">History</div></a>
            </StyledSideNavBar>

         
           

            <h1>sseds</h1>
        </StyledDrawer>
    )

};
export default SideDrawer