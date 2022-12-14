import { Col, Container } from "react-bootstrap";
import PortfolioCard from "../../../components/portfolio_card";
import '@brainhubeu/react-carousel/lib/style.css';
import React, { useRef, useCallback } from "react";
import { useQuery } from "react-query";
import { fetchFeaturedProjects } from "../../../fetches/project_fetch";
import FadeIn from "react-fade-in/lib/FadeIn";

export default function ProjectsSection() {
    const containerRef = useRef();

    const onWheel = useCallback(e => {
        const containerScrollPosition = containerRef.current.scrollLeft;
        containerRef.current.scrollTo({
            left: containerScrollPosition + e.deltaY,
            behaviour: "smooth"
        });
    }, []);


    const { isLoading, isError, data } = useQuery('all-projects', fetchFeaturedProjects)
    if (isLoading) {
        return <div id='projects' className="projectcontainer"></div>
    }
    if (isError) {
        return <></>
    }

    return (<FadeIn>
        <div id='projects' className="projectcontainer">
            <Container className="projecttitle">
                Portfolio
            </Container>

            <div className="d-flex projectbox p-5"
                ref={containerRef}
                onWheel={onWheel}
                onDrag={onWheel}
            >
                <div style={{ width: "1.5rem" }} />
                {data.map((project) => <Col><PortfolioCard className="portfoliowidth" project={project} />
                </Col>)}
                <div style={{ width: "1.5rem" }} />
            </div>
            <Container style={{ textAlign: "center", marginTop: 30, marginBottom: 20 }}>
                <a className="portfoliobtn" href={"/projects"} aria-label={`Click to view more projects`}>
                    More Projects
                </a>
            </Container>

        </div >
    </FadeIn>
    )
}