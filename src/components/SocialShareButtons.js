import React, {Component} from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    RedditShareButton,
    RedditIcon,
    TumblrShareButton,
    TumblrIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
  } from "react-share";
import './SocialShareButtons.css'

export default class SocialShare extends Component {
    render() {
        const nominatedMovieTitles = this.props.nominatedMovieTitles;
        return (
            <div className="c-network" ref={this.props.ref1}>
                <FacebookShareButton
                    className="network"
                    url="https://shoppies-2021-fall.herokuapp.com/"
                    quote={`I just nominated ${nominatedMovieTitles} for the 2021 Shoppies!`}
                    hashtag="#shoppies2021">
                    <FacebookIcon logoFillColor="white" size={"2rem"} round/>
                </FacebookShareButton>
                <TwitterShareButton
                    className="network"
                    url="https://shoppies-2021-fall.herokuapp.com/"
                    title={`I just nominated ${nominatedMovieTitles} for the 2021 Shoppies!`}
                    >
                    <TwitterIcon logoFillColor="white" size={"2rem"} round/>
                </TwitterShareButton>
                <WhatsappShareButton
                    className="network"
                    url="https://shoppies-2021-fall.herokuapp.com/"
                    title={`I just nominated ${nominatedMovieTitles} for the 2021 Shoppies!`}
                    >
                    <WhatsappIcon logoFillColor="white" size={"2rem"} round/>
                </WhatsappShareButton>
                <TumblrShareButton
                    className="network"
                    url="https://shoppies-2021-fall.herokuapp.com/"
                    title="Shoppies 2021"
                    caption={`I just nominated ${nominatedMovieTitles} for the 2021 Shoppies!`}
                    >
                    <TumblrIcon logoFillColor="white" size={"2rem"} round/>
                </TumblrShareButton>
                <RedditShareButton
                    className="network"
                    url="https://shoppies-2021-fall.herokuapp.com/"
                    title={`I just nominated ${nominatedMovieTitles} for the 2021 Shoppies!`}
                    >
                    <RedditIcon logoFillColor="white" size={"2rem"} round/>
                </RedditShareButton>
                <FacebookMessengerShareButton
                    className="network"
                    url="https://shoppies-2021-fall.herokuapp.com/"
                    title={`I just nominated ${nominatedMovieTitles} for the 2021 Shoppies!`}
                    appId="715761142463541"
                    >
                    <FacebookMessengerIcon logoFillColor="white" size={"2rem"} round/>
                </FacebookMessengerShareButton>
        </div>

        )
    }
}