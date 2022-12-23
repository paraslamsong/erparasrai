import { Col, Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { fetchSocial } from "../fetches/about_fetch";

export default function Footer() {

    const { isLoading, data } = useQuery('social-media', fetchSocial)

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
                                    <img className="white-icon" height="28" alt={social.media} src={social.icon} />
                                } />
                        )}
                    </Col>
                    <Col md={6}>
                        <div className='d-flex justify-content-md-start justify-content-sm-center justify-content-center my-2'>
                            Copyright© 2022
                        </div>
                    </Col>

                </Row>
            </Container>

        </section>
    )
}