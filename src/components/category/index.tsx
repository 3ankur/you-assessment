import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRef, useState } from "react";
const categoryList = [
    "All",
    "Angular",
    "React",
    "Front End Development",
    "Cricket",
    "Footbal",
    "Rubicks Cube",
    "Sic Film",
    "Hollywood",
    "Database",
    "Josh Talk",
    "Music",
    "Nature",
    "Cooking",
    "Comedy",
    "Recent Uploaded"
];

const CategoryWrapper = styled.div`
 display:flex;
 position: fixed;
 top: 66px;
 left: 5rem;
 overflow: hidden;
 max-width: 90vw;
 background:#fff;
 padding: 10px;
 border-top: 1px solid #ccc;
 
 svg{
    height: 2rem;
    width: 2rem;
    color:#616161;
}

button[name="arrow-action"]{
    background: transparent;
    border:none;
    cursor:pointer;

    height: 2rem;
    width: 2rem;
    color: #ffffff;
    border-radius: 50%;
    padding: 0;
    margin: 4px;

    &:hover{
        background: #f1f1f1
    }
    &:focus, &:visited{
        border:none ;
        outline:none;
    }
}
`;

const StyledCategory = styled.div`
    display: flex;
    overflow: hidden;
    max-width: 88vw;

 button{
    margin-right: .8rem;
    word-wrap: none;
    white-space: nowrap;
    border: 1px solid #CCC;
    border-radius: 900px;
    background-color: #E7E7E7;
    padding: .4rem .8rem;
    font-size: inherit;
    cursor: pointer;
    transition: background-color 150ms;

    &:focus,  &:visited{
        border:none ;
        outline:none;
    }
    &.active{
        background-color: #606060;
        color: white;
        border-color: #EEE;
    }
 }
`;

const Category = () => {
    let isScrollReactToEnd = 1;
    const containerRef = useRef<any>(null);
    const [arrowVisibal, setArrowVisibal] = useState({ left: false, right: true });
    const [activeCategory , setActiveCategory] = useState<string | null>(null);

    const moveScroll = (type: string) => {
        console.log(type)
        if (containerRef.current) {
            console.log(containerRef.current.scrollLeft);
            if (type === 'right') {
                containerRef.current.scrollLeft += 220;
            }
            else {
                containerRef.current.scrollLeft -= 220;
            }
            isScrollReactToEnd = Math.floor(containerRef.current.scrollWidth - containerRef.current.clientWidth) - Math.floor(containerRef.current.scrollLeft);
            if (containerRef.current.scrollLeft === 0) {
                setArrowVisibal((prevS) => {
                    return {
                        right: true,
                        left: false,
                    }
                })
            } else if (isScrollReactToEnd === 0) {
                setArrowVisibal(() => {
                    return {
                        left: true,
                        right: false
                    }
                })
            } else {
                setArrowVisibal(() => {
                    return {
                        left: true,
                        right: true
                    }
                })
            }
        }
    }
    return (
        <CategoryWrapper>
            {
                arrowVisibal.left ? (<button title="scroll-left" role="scroll-left" name="arrow-action" onClick={() => moveScroll('left')}>
                    <MdKeyboardArrowLeft  />
                </button>) : null
            }
            <StyledCategory id="category_container" ref={containerRef}>
                {
                    categoryList.map((category) => {
                        return (
                            <button className={activeCategory === category ? 'active' : ''} onClick={()=>setActiveCategory(category)} key={category}>{category}</button>
                        );
                    })
                }
            </StyledCategory>
            {
                arrowVisibal.right ? (<button  role="scroll-right" onClick={() => moveScroll('right')} name="arrow-action">
                    <MdKeyboardArrowRight />
                </button>) : null
            }
        </CategoryWrapper>
    )
}
export default Category;