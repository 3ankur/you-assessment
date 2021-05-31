
import styled from "styled-components";
import { MdSearch, MdVideoCall, MdApps, MdNotifications, MdKeyboardVoice, MdList, MdMoreVert } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

import youLogo from "../assets/images/logo.png";
import { GoogleLogin } from "react-google-login";
import Cookies from "js-cookie";
import { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import SideDrawer from "../drawer/SlideDrawer";
import BackDoor from "../drawer/backdoor";


const CLIENT_ID = "506697149710-4g07enb005b84mctn5cg5iecdr8ca6th.apps.googleusercontent.com";
const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;
    border-bottom: 1px solid #dedede;
    position: fixed;
    width: 100%;
    background: #fff;
    top: 0;
    
    img{
        height: 20px;
    }

    button[name="side-nav-action"]{
        border: none;
        background: none;
        cursor: pointer;

        svg{
            height: 1.5rem;
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

}
#guess-button{
    display: inline-flex;
    color: #065fd4;

    svg{
        color: #065fd4;
    }

    span{
        margin-top: .1rem;
        padding: 3px;
        font-weight: 600;
    }
}
`;

const StyledMenu = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    gap: 1.5rem;

    svg{
        height: 1.5rem;
        width: 1.5rem;
        color:#616161;
    }
`;

const StyledForm = styled.form`
    display: flex;
    flex-grow: 1;
    margin: 0 8rem 0 5rem;
    input{
    width: 100%;
    font-size: inherit;
    padding: .4em;
    border: 1px solid #777;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    }

    button[name="search-btn"]{
        display: flex;
        align-items: center;
        padding: 0 1.25rem;
        border: 1px solid #777;
        background-color: #F8F8F8;
        border-left: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        cursor: pointer;

        svg{
            height: 1.5rem;
            width: 1.5rem;
            color:#616161;
        }
    }
    svg{
        height: 1.5rem;
        width: 1.5rem;
        color:#616161;
    }

    button[name="search-btn-voice"]{
            background: transparent;
            border: none;

    }
`;

const signInMenu = () => {
    return (
        <>
            <a title="create-video" href="#"><MdVideoCall /> </a>
            <a title="apps-view" href="#"><MdApps /> </a>
            <a title="notification" href="#"><MdNotifications /> </a>
            <a title="my-details" href="#"><FaUserCircle /> </a>
        </>
    );
}


const failResponseGoogle = (error: any) => {
    console.log(error);
}





const Header = () => {

    function successResponseGoogle(res: any) {
        console.log(res, "its response")
        console.log(Cookies.get("G_AUTHUSER_H"));

        if (res.profileObj) {
            setUserDetails(res);
        }
    }

    const guestMenu = () => {
        return (
            <>
                <a title="apps-view" href="#"><MdApps /> </a>
                <a title="my-details" href="#"><MdMoreVert /> </a>
                <GoogleLogin
                    clientId="506697149710-4g07enb005b84mctn5cg5iecdr8ca6th.apps.googleusercontent.com"
                    buttonText="Login"
                    render={renderProps => (
                        <button onClick={renderProps.onClick} id="guess-button"><FaUserCircle /> <span>SIGN IN</span></button>
                    )}
                    onSuccess={successResponseGoogle}
                    onFailure={successResponseGoogle}
                    isSignedIn={true}
                    cookiePolicy={'single_host_origin'}
                />
            </>
        )
    }

    const [userDetails, setUserDetails] = useState(null);
    const [isDrawerVisible, setDrawerVisible] = useState(false);

    const toggleDrawer = () =>{
setDrawerVisible((prev)=>!prev)
    }

    return (
        <>
            <StyledHeader>
                <button onClick={toggleDrawer} name="side-nav-action"><MdList /></button>
                <a href="#">
                    <img src={youLogo} alt="youtube-logo" />
                </a>
                <StyledForm>
                    <input placeholder="Search" type="text" name="search" />
                    <button name="search-btn"> <MdSearch /> </button>
                    <button name="search-btn-voice"> <MdKeyboardVoice /></button>
                </StyledForm>
                <StyledMenu>

                    {
                        !userDetails ? guestMenu() : signInMenu()
                    }
                </StyledMenu>
            </StyledHeader>
            {/* <Sidebar /> */}
            {
                isDrawerVisible ? ( <> <SideDrawer  closeDrawer={toggleDrawer} /><BackDoor /> </>) : null
            }
           
        </>

    )
}
export default Header;