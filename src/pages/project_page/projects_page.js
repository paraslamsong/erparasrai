import { Col, Container } from "react-bootstrap";
import { MetaTags } from "react-meta-tags";
import { useQuery } from "react-query";
import { Loading } from "../../components/loading";
import { ProPagination } from "../../components/pagination";
import PortfolioCard from "../../components/portfolio_card";
import { fetchAllProjects } from "../../fetches/project_fetch";

export default function ProjectsPage() {

    const { isLoading, data } = useQuery('all-projects', fetchAllProjects)


    if (isLoading) return <Loading />
    return (
        <Container className="projectcontainer" style={{ paddingBottom: 20, paddingTop: 20 }}>

            <MetaTags>
                <title>Projects | Paras Rai</title>
            </MetaTags>
            <div className="d-flex projectrow">
                {data.map((project) => {
                    return <Col lg={4} md={6} sm={12} xs={12} >
                        <PortfolioCard project={project} />
                    </Col>
                })}
            </div>
            <ProPagination
                currentPage={1}
                totalPage={3}
                onPageChange={(page) => { }}
            />
        </Container>
    )
}