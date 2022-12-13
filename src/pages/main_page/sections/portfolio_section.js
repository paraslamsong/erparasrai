import { Container, Row } from "react-bootstrap";
import PortfolioCard from "../../../components/portfolio_card";
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
// import Carousel from 'react-elastic-carousel'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import React, { useRef, useCallback } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchFeaturedProjects } from "../../../fetches/project_fetch";

export default function ProjectsSection() {
    const containerRef = useRef();
    const navigate = useNavigate();

    const onWheel = useCallback(e => {
        const containerScrollPosition = containerRef.current.scrollLeft;
        containerRef.current.scrollTo({
            left: containerScrollPosition + e.deltaY,
            behaviour: "smooth"
        });
    }, []);


    const { isLoading, isError, data, error } = useQuery('all-projects', fetchFeaturedProjects)
    if (isLoading) {
        return <></>
    }
    if (isError) {
        return <></>
    }

    return (
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
                {data.map((project) => <PortfolioCard className="portfoliowidth" project={project} />)}
                <div style={{ width: "1.5rem" }} />
            </div>
            <Container style={{ textAlign: "center", marginTop: 30, marginBottom: 20 }}>
                <span className="portfoliobtn" onClick={() => navigate("/projects")}>
                    More Projects
                </span>
            </Container>

        </div >
    )
}