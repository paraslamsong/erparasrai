import { Box, Text, Center, Flex, Square, useColorMode, Stack, Image, HStack, VStack } from "@chakra-ui/react";

import displayphone from '../../../assets/images/displayphone.png';

import * as animationData from '../../../assets/json/gradient-animation.json'

import Lottie from 'react-lottie';
import { Col, Container, Row } from "react-bootstrap";

export default function MainSection() {
    return (
        <div style={{ minHeight: "90vh" }} id='home' >
            <Container>
                <Row className="align-items-center">
                    <Col lg={4} md={12} sm={12} >
                        <span id='greeting'>
                            Hello, I’m Paras Rai
                        </span>
                        <div id="introduction">
                            I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.
                        </div>
                        <Row>
                            <Col className="experience" style={{ borderStartStartRadius: "0.375rem", borderEndStartRadius: "0.375rem" }}>
                                <div className="exptitle">15 Y.</div>
                                <div className="expintro">Experience</div>
                            </Col>
                            <Col className="experience" style={{ borderStartEndRadius: "0.375rem", borderEndEndRadius: "0.375rem" }}>
                                <div className="exptitle">10</div>
                                <div className="expintro">Project Completed</div>
                            </Col>

                        </Row>
                    </Col>
                    <Col lg={8} md={12} sm={12}>
                        <VStack>
                            <Center w={"full"}>
                                <Lottie options={{
                                    loop: true,
                                    autoplay: true,

                                    animationData: animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }}
                                    width={"full"}
                                />
                            </Center>
                            <Flex flex='1' position="absolute" textAlign="center" w={"full"} h="100%">
                                <Center w={"100%"}>
                                    <Image src={displayphone} h={400} />
                                </Center>
                            </Flex>
                        </VStack>
                    </Col>

                </Row>

            </Container>

        </div>
    );
}