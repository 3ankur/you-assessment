import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledVideo = styled.article`
    display:flex;
    flex-direction: row;

    .thumbnail {
        text-decoration: none;
        display: flex;
        padding: 0px 12px 8px;

        &:after {
            content: attr(data-duration);
            background-color: rgba(0,0,0,.85);
            color: white;
            margin-top: 4.2rem;
            padding: .1em .3em;
            border-radius: .3em;
            font-size: .9rem;
            margin-left: -3rem;
            margin-bottom: 1rem;
        }
    }

    .thumbnail-image{
        width: 100%;
        height: 100%;
        min-width: 170px;
        min-height: 94px;
        background-color: #AAA;
    }
`;

const StyledVideoDetails = styled.div`
    display: flex;
    align-items: flex-start;
    
    .thumbnail {
        position: relative;
        display: flex;

        &::before {
            content: attr(data-duration);
            position: absolute;
            background-color: rgba(0, 0, 0, .85);
            color: white;
            right: 5px;
            bottom: 5px;
            padding: .1em .3em;
            border-radius: .3em;
            font-size: .9rem;
        }
    }

    

    .video-details {
        display: flex;
        flex-direction: column;
    }
    .video-title {
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: .5rem;
        text-decoration: none;
        color: black;
    }
    .channel-icon {
        margin-right: .75rem;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        background-color: #AAA;
    }

    .video-channel-name {
        margin-bottom: .1rem;
        text-decoration: none;
        transition: color 150ms;
    }
`;

type PropsVideo = {
    details: any
}

const SideVideo = ({details}: PropsVideo) => {
    return (
        <StyledVideo>
            <Link  className="thumbnail"  data-duration="12:44"  to={`/watch?v=${details.id}`}>
            <img className="thumbnail-image" src="http://unsplash.it/168/94?gravity=center" />
            </Link>
        <StyledVideoDetails>
        <div className="video-details">
        <a href="#" className="video-title">Video Title</a>
        <a href="#" className="video-channel-name">Channel Name</a>
        <div className="video-metadata">
        <span>12k View</span>
        <span>1 Day ago</span>
        </div>
        </div>
        </StyledVideoDetails>
        </StyledVideo>
    );

}
export default SideVideo;