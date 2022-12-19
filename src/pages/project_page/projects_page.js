import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { MetaTags } from "react-meta-tags";
import { isError, useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Loading } from "../../components/loading";
import { ProPagination } from "../../components/pagination";
import PortfolioCard from "../../components/portfolio_card";
import { fetchAllProjects } from "../../fetches/project_fetch";
import NotFound from "../not_found_page/not_found_page";

export default function ProjectsPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [page, setPage] = useState(searchParams.get("page") ?? 1);
    const { isLoading, data, isError } = useQuery(`all-projects-${page}`, () => fetchAllProjects(page))

    // useEffect(() => {
    //     setPage(searchParams.get("page") ?? 1)
    // }, [window.location])

    if (isLoading) return <Loading />
    if (isError) return <NotFound />
    return (
        <Container className="projectcontainer" style={{ paddingBottom: 20, paddingTop: 20 }}>

            <MetaTags>
                <title>Projects | Paras Rai</title>
            </MetaTags>
            <div className="d-flex projectrow">
                {data.projects.map((project) => {
                    return <Col lg={4} md={6} sm={12} xs={12} >
                        <PortfolioCard project={project} />
                    </Col>
                })}
            </div>
            <div style={{ height: 100 }} />
            <ProPagination
                currentPage={data.current_page}
                totalPage={data.total_pages}
                onPageChange={(page) => {
                    navigate(`?page=${page}`);
                    setPage(page);
                }}
            />
        </Container>
    )
}