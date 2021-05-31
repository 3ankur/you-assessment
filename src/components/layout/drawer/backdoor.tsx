import styled from "styled-components";

const StyledBackDoor = styled.div`
position: fixed;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.5);
z-index: 100;
top: 0;
left: 0;
`;

const BackDoor = () =><StyledBackDoor/>;
export default BackDoor;