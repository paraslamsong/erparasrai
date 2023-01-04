import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FadeIn from "react-fade-in/lib/FadeIn";
import { MetaTags } from "react-meta-tags";
import { useQuery } from "react-query";
import AlgorithmCard from "../../components/algorithm_card";
import { Loading } from "../../components/loading";
import { fetchAlgorithms } from "../../fetches/algorithms_fetch";


export function AlgorithmPage() {

    const { isLoading, data } = useQuery('algorithms', fetchAlgorithms)


    if (isLoading) return <Loading />
    return <FadeIn>
        <Container>
            <MetaTags>
                <title>Algorithms | Paras Rai</title>
            </MetaTags>
            <Row className="my-4">
                {
                    data.map((algorithm) =>
                        <Col lg={4} md={6} sm={12} xs={12} >
                            <AlgorithmCard algorithm={algorithm} />
                        </Col>)
                }
            </Row>
        </Container>
    </FadeIn>
}