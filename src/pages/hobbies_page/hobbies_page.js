import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FadeIn from "react-fade-in/lib/FadeIn";
import { MetaTags } from "react-meta-tags";
import { useQuery } from "react-query";
import { HobbyCard } from "../../components/hobby_card";
import { Loading } from "../../components/loading";
import { fetchHobbies, fetchHobbyCategories } from "../../fetches/hobbies_fetch";

export function HobbiesPage() {
    const { isLoading, data } = useQuery('all-hobbies', fetchHobbies);
    const categories = useQuery('hobby-categories', fetchHobbyCategories);
    const [filterCategory, setFilter] = useState("");

    if (isLoading) {
        return <Loading />
    }


    return (<FadeIn>
        <Container>
            <MetaTags>
                <title>Hobbies | Paras Rai</title>
            </MetaTags>
            <div>
                {categories.isLoading ? <></> :
                    categories.data.map((category) => <div
                        onClick={() => setFilter(category.name)}
                    >{category.name}</div>)
                }
            </div>
            <Row>
                {data.filter((hobby) => filterCategory === "" || hobby.category === filterCategory).map((hobby) => <Col lg={4} md={6} sm={12} xs={12} >
                    <HobbyCard hobby={hobby} />
                </Col>)}
            </Row>
        </Container>
    </FadeIn>);
}