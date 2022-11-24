import { Col, Container, Row } from "react-bootstrap";
import PortfolioCard from "../../components/portfolio_card";

export default function ProjectsPage() {
    return (
        <Container className="projectcontainer" style={{ paddingBottom: 20, paddingTop: 20 }}>
            <div className="d-flex projectrow">
                <Col lg={4} md={6} sm={12} xs={12} >
                    <PortfolioCard />
                </Col>
                <Col lg={4} md={6} sm={12} xs={12} >
                    <PortfolioCard />
                </Col>
                <Col lg={4} md={6} sm={12} xs={12} >
                    <PortfolioCard />
                </Col>
                <Col lg={4} md={6} sm={12} xs={12} >
                    <PortfolioCard />
                </Col>
            </div>
        </Container>
    )
}