import styled from "styled-components";
import Category from "../category";
import Sidebar from "../layout/sidebar/sidebar";
import Video from "./video";

const StyledVideoContainer = styled.div`
background-color: #F9F9F9;
margin-left: 4rem;
margin-top: 7rem;

section{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 3rem 1rem;
    padding: 3rem 0;
    margin: 0 1.5rem;
}

`;
const Main = () =>{

    return(
        <>
        <Sidebar />
         <Category />
         <StyledVideoContainer>
           <section>
              {
                   [1,2,3,4,5,6,7,8,9,10].map((d)=>{
                    return(
                     <Video details={{id:d}} />
                    )
                })
              }
               
           </section>
       </StyledVideoContainer>
        </>
      
    // <h2>Hello ia m nkur</h2>
    )
}
export default Main;