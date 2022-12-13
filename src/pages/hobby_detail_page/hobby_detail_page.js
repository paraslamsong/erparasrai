import { Container, Image } from "react-bootstrap";
import { MetaTags, ReactTitle } from "react-meta-tags";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ReactSEOMetaTags from "react-seo-meta-tags";
import { Loading } from "../../components/loading";
import { fetchHobbyDetail } from "../../fetches/hobbies_fetch";
import NotFound from "../not_found_page/not_found_page";

export function HobbyDetailPage() {


    let { slug } = useParams();
    const location = window.location
    const { isLoading, isError, data, error } = useQuery(`hobby-${slug}`, () => fetchHobbyDetail(slug), { retry: 1 });


    if (isError) {
        return <NotFound />
    }
    if (isLoading) {
        return <Loading />
    }



    return <Container className="py-3 my-4">
        <center>
            <Image src={data.cover} style={{ maxHeight: 450 }} fluid />
        </center>
        <div className="hobby-title my-3">
            {data.name}
        </div>
        <p dangerouslySetInnerHTML={{ __html: data.content }} />
        <MetaTags>
            <title>{data.name} | Paras Rai</title>
        </MetaTags>


        <ReactSEOMetaTags
            website={{
                url: `${location.protocol}//${location.host}/hobby/${data.slug}/detail`,
                title: data.name,
                datePublished: data.created_at,
                dateModified: data.updated_at,
                description: data.content.replace(/(<([^>]+)>)/ig, " "),
                language: 'en-US',
                author: {
                    email: 'erparasrai@gmail.com',
                    name: 'Paras Rai',
                },
                site: {
                    siteName: 'Paras Rai',
                    searchUrl: `https://www.google.com/search?q=${location.host}`,
                }
            }}
            breadcrumb={[
                { name: 'Paras Rai', url: `${location.protocol}//${location.host}/`, },
                { name: data.slug, url: `${location.protocol}//${location.host}/hobby/${data.slug}/detail`, },
            ]}
            organization={{
                name: 'Paras Rai',
                legalName: 'Paras',
                url: `${location.protocol}//${location.host}/`,
                logo: `${location.protocol}//${location.host}/`
            }}
            blogPost={{
                url: `${location.protocol}//${location.host}/hobby/${data.slug}/detail`,
                title: data.name,
                description: data.content.replace(/(<([^>]+)>)/ig, " "),
                image: data.cover,
                imageAlt: data.name,
                datePublished: data.created_at,
                dateModified: data.updated_at,
                tags: data.tags,
                author: "Paras Rai",
                publisher: "Paras Rai",
            }}
            facebook={{ facebookAppId: 'paraslamsong' }}
            twitter={{ twitterUser: '@idiotcat' }}
        />
    </Container>
}