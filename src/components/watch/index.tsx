
import { FaShare } from "react-icons/fa";
import { MdMoreHoriz, MdPlaylistAdd, MdThumbDown, MdThumbUp } from "react-icons/md";
import styled from "styled-components";
import Video from "../main/video";
import SideVideo from "./sideVideoList";

const StyledWatchedVideo = styled.div`
  margin-top: 6rem;
  background: #f7f7f7;
  
  .video-container{
      display:flex;

      .primary{
        margin-left: 7rem;
        max-width: 640px;
      }
      .secondary{
        margin-left: 1.5rem;
      }
      .player-container{
          min-width: 640px;
          min-height: 350px;
        
      }
      h3{
        font-weight: 400;
      }

      .user-vd-details{

        .v-channel{
            display: flex;
            justify-content: space-between;
        }

        .social-details{
            list-style: none;
        }
      
    }
      }

      .video-details {
        display: flex;
        flex-direction: column;
    }

      .info-vd{
          display:flex;
          justify-content: space-between;
          border-bottom: 1px solid #ccc;
          span{
              color: #606060;
          }
          .user-reaction{
            display:flex;
            margin: -18px 0px 0px;
            .icon{
                display:flex;
                align-items: center;
                padding: 0px 5px;
                font-weight: 500;
            }

            svg{
                // height: 1.5rem;
                // width: 1.5rem;
                font-size: 26px;
                color: #616161;
                padding: 10px;
                
            }
          }
      }
  }

`;

const StyledVideoDetails = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 1rem;

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
        font-size: 1rem;
        font-weight: 500;
        text-decoration: none;
        color: black;
    }
    .channel-icon {
        margin-right: .75rem;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        background-color: #AAA;
    }

    .video-channel-name {
        color: #606060;
        font-size: 0.8rem;
        text-decoration: none;
        transition: color 150ms;
    }
`;

const StyledSubscribe = styled.button`
background: #c00;
border: none;
color: white;
padding: 10px 17px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 20px 2px;
cursor: pointer;
font-size: 13px;
cursor: pointer;
font-weight: 600;
`;

const watchVideo = () => {
    return (
        <StyledWatchedVideo>
            <div className="video-container">
                <div className="primary">
                    <div className="player-wrapper">
                        <div className="player-container">
                            <img className="channel-icon" src="http://unsplash.it/640/350?gravity=center" />
                        </div>
                        <div>
                            <h3>Shreyas Iyer Live with Delhi Capitals after his Shoulder Injury Surgery | Delhi Capitals | IPL 2021</h3>
                            <div className="info-vd">
                                <div>
                                    <span>26,203 views</span>
                                    <span>•</span>
                                    <span>Apr 10, 2021</span>
                                </div>

                                <div className="user-reaction">
                                    <div className="icon"> <MdThumbUp /><span>12</span> </div>
                                    <div className="icon"> <MdThumbDown />4</div>
                                    <div className="icon"> <FaShare /><span>SHARE</span></div>
                                    <div className="icon"><MdPlaylistAdd /></div>
                                    <div className="icon"><MdMoreHoriz /></div>
                                </div>
                            </div>
                            <div className="user-vd-details">

                                <div className="v-channel">
                                    <StyledVideoDetails>
                                        <a href="#">
                                            <img className="channel-icon" src="http://unsplash.it/48/48?gravity=center" />
                                        </a>
                                        <div className="video-details">
                                            <a href="#" className="video-title">The Royal Family Channel</a>
                                            <a href="#" className="video-channel-name">18k subscribers</a>

                                        </div>
                                    </StyledVideoDetails>
                                    <div>
                                        <StyledSubscribe>SUBSCRIBE</StyledSubscribe>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        After over 70 years with him by her side, Queen Elizabeth must now face a future without Philip, the man she once honoured as her "strength and stay", the longest serving royal consort in British history.
                                        Elizabeth II has become the first reigning widow monarch since Queen Victoria, who was so devastated by the death of Prince Albert, she withdrew almost entirely from public life for 40 years and become known as the ‘Widow of Windsor’.
  </p>
                                    <ul className="social-details">
                                        <li>
                                            Subscribe to ITV News on YouTube: <a href="http://bit.ly/2lOHmNj">http://bit.ly/2lOHmNj</a>
                                        </li>
                                        <li>
                                            Get breaking news and more stories at <a href="http://www.itv.com/news">http://www.itv.com/news</a>
                                        </li>
                                        <li>
                                            Follow ITV News on Facebook: <a href="http://www.itv.com/news">http://www.itv.com/news</a>
                                        </li>
                                        <li>
                                            Follow ITV News on Twitter: <a href="http://www.itv.com/news">http://www.itv.com/news</a>

                                        </li>
                                        <li>
                                            Follow ITV News on Instagram: <a href="http://www.itv.com/news">http://www.itv.com/news</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="secondary">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d) => {
                            return (
                                <SideVideo details={{ id: d }} />
                            )
                        })
                    }
                </div>
            </div>

        </StyledWatchedVideo>
    );
}
export default watchVideo
