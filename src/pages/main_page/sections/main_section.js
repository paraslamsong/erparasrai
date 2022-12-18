
import displayphone from '../../../assets/images/displayphone.png';

import * as animationData from '../../../assets/json/gradient-animation.json'
import * as developerAnimation from '../../../assets/json/developer-animation.json'

import Lottie from 'react-lottie';
import { Col, Container, Row } from "react-bootstrap";
import { fetchAbout } from "../../../fetches/about_fetch";
import { useQuery } from "react-query";

export default function MainSection() {
    const { isLoading, isError, data, error } = useQuery('about', fetchAbout)
    if (isLoading) {
        return <></>
    }
    if (isError) {
        return <></>
    }



    return (
        <div style={{ minHeight: "90vh" }} id='home' >
            <Container>
                <Row className="align-items-center">
                    <Col lg={4} md={12} sm={12} >
                        <span id='greeting'>
                            {data.greeting}<br />{data.name}
                        </span>
                        <div id="introduction">{data.description}</div>
                        <center>

                            <Row style={{ maxWidth: 450 }}>
                                <Col className="experience" style={{ borderStartStartRadius: "0.375rem", borderEndStartRadius: "0.375rem" }}>
                                    <div className="exptitle">{data.experience} Y.</div>
                                    <div className="expintro">Experience</div>
                                </Col>
                                <Col className="experience" style={{ borderStartEndRadius: "0.375rem", borderEndEndRadius: "0.375rem" }}>
                                    <div className="exptitle">{data.no_projects}</div>
                                    <div className="expintro">Projects Involved</div>
                                </Col>
                            </Row>
                        </center>
                    </Col>
                    <Col lg={8} md={12} sm={12}>
                        <div className='w-100' style={{
                            position: "relative",
                        }}>
                            <center className="w-100" style={{ opacity: 0.6 }}>
                                <Lottie
                                    options={{
                                        loop: true,
                                        autoplay: true,
                                        animationData: animationData,
                                        rendererSettings: {
                                            preserveAspectRatio: 'xMidYMid slice'
                                        }
                                    }}
                                    width={"full"}
                                />
                            </center>
                            <div className='d-flex align-items-center justify-content-center' style={{
                                position: "absolute",
                                textAlign: "center",
                                flex: 1,
                                width: "100%",
                                height: "100%",
                                top: 0,
                            }}
                            >
                                <center className='align-middle'>
                                    <div style={{ height: "75%", width: "75%", minWidth: 200, minHeight: 200, maxWidth: 700, maxHeight: 700 }}>

                                        <Lottie
                                            options={{
                                                loop: true,
                                                autoplay: true,
                                                animationData: developerAnimation,
                                                rendererSettings: {
                                                    preserveAspectRatio: 'xMidYMid slice'
                                                }
                                            }}
                                            isClickToPauseDisabled={true}
                                            isPaused={false}
                                            height={"100%"}
                                            width={"100%"}
                                        />

                                    </div>
                                </center>
                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </div>
    );
}