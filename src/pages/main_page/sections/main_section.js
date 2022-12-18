
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
                        <Row>
                            <Col className="experience" style={{ borderStartStartRadius: "0.375rem", borderEndStartRadius: "0.375rem" }}>
                                <div className="exptitle">{data.experience} Y.</div>
                                <div className="expintro">Experience</div>
                            </Col>
                            <Col className="experience" style={{ borderStartEndRadius: "0.375rem", borderEndEndRadius: "0.375rem" }}>
                                <div className="exptitle">{data.no_projects}</div>
                                <div className="expintro">Projects Involved</div>
                            </Col>

                        </Row>
                    </Col>
                    <Col lg={8} md={12} sm={12}>
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
                        <div flex='1' position="absolute" textAlign="center" w={"full"} h="100%">
                            <center className='w-100'>
                                <Lottie options={{
                                    loop: true,
                                    autoplay: true,



                                    animationData: developerAnimation,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }}
                                    isPaused={false}
                                    height={500}
                                    width={"full"}
                                />
                                {/* <Image src={displayphone} h={400} /> */}
                            </center>
                        </div>
                    </Col>

                </Row>

            </Container>

        </div>
    );
}