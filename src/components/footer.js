import { Col, Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { fetchSocial } from "../fetches/about_fetch";

import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github-sign.png';
import twitter from '../assets/images/twitter-sign.png';

const getIcon = (type) => {
    if (type === "facebook") {
        return facebook;
    }
    else if (type === "instagram") {
        return instagram;
    }
    else if (type === "linkedin") {
        return linkedin;
    }
    else if (type === "github") {
        return github;
    }
    else if (type === "twitter") {
        return twitter;
    }

}

export default function Footer() {

    const { isLoading, data } = useQuery('social-media', fetchSocial);
    const SocialLink = ({ icon, link }) => <a href={link} rel="noreferrer" target="_blank" aria-label={`Click to open social profile`}><span className="mx-2">{icon}</span></a>
    return (
        <section className="footer">
            <Container>
                <Row className="d-flex flex-md-row-reverse justify-content-between ">
                    <Col md={6} className='d-flex justify-content-md-end  justify-content-sm-center justify-content-center'>
                        {isLoading ? <></> : data.map((social) =>
                            <SocialLink
                                link={social.link}
                                icon={
                                    <img className="white-icon social-icon" alt={social.media} src={getIcon(social.media)} />
                                } />
                        )}
                    </Col>
                    <Col md={6}>
                        <div className='d-flex justify-content-md-start justify-content-sm-center justify-content-center my-3'>
                            Copyright© {(new Date()).getFullYear()}
                        </div>
                    </Col>

                </Row>
            </Container>

        </section>
    )
}