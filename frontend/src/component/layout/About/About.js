import React from "react";
import { Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./CSS/About.css";
import MetaData from "../MetaData";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
    return (
        <>
        <MetaData title={`About us`} />
        <div className="aboutSection">
            <div></div>
            <div className="aboutSectionGradient"></div>
            <div className="aboutSectionContainer">
                <Typography component="h1">About Us</Typography>

                <div>
                    <div>
                        <h2>Bondify</h2><br/>
                        <p>
                             Bondify is a website platform that helps trader to handle the trades.
                             </p>
                    </div>
                    <div className="aboutSectionContainer2">
                        <h3>Team 36</h3><br/>
                        <span></span>
                        <Typography component="h2">Get In Touch</Typography>
                        <div className="social">
                            <a
                            href="#"
                            target="blank"
                            >
                                <TwitterIcon className="twitterSvgIcon" />
                            </a>

                            <a href="#" target="blank">
                                <LinkedInIcon className="gitHubSvgIcon" />
                            </a>
                            <a href="#" target="blank">
                                <GitHubIcon className="gitHubSvgIcon" />
                            </a>
                        </div>
                    </div>

                    {/* <div className="aboutSectionContainer2">
                        <h3>Teknath Jha</h3><br/>
                        <span>Walchand College Of Engineering,Sangli.</span>
                        <Typography component="h2">Get In Touch</Typography>
                        <div className="social">
                            <a
                            href="https://twitter.com/teknath_jha"
                            target="blank"
                            >
                                <TwitterIcon className="twitterSvgIcon" />
                            </a>

                            <a href="https://www.linkedin.com/in/aditya-sanap-44ahs" target="blank">
                                <LinkedInIcon className="gitHubSvgIcon" />
                            </a>
                            <a href="https://github.com/adit242" target="blank">
                                <GitHubIcon className="gitHubSvgIcon" />
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </>
    );
};

export default About;
