import { Container, Image } from "react-bootstrap";
import { MetaTags } from "react-meta-tags";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ReactSEOMetaTags from "react-seo-meta-tags";
import { getLinkIcon } from "../../assets/icons";
import { Loading } from "../../components/loading";
import { fetchProjectDetail } from "../../fetches/project_fetch";

import '../../styles/project.css';
import NotFound from "../not_found_page/not_found_page";
import ImageCarousel from "./component/carousel";
export default function ProjectDetailPage() {
    let { slug } = useParams();
    const location = window.location

    const { isLoading, isError, data, error } = useQuery(`project-${slug}`, () => fetchProjectDetail(slug), { retry: 1 })

    if (isError) {
        return <NotFound />
    }
    if (isLoading) {
        return <Loading />
    }

    return <Container >

        <MetaTags>
            <title>{data.name} | Paras Rai</title>
        </MetaTags>
        <div style={{ height: 60 }} />
        <ImageCarousel images={data.images} />
        <div style={{ height: 30 }} />
        {data.tags.map((tag) => <span className="tagbox">{tag}</span>)}
        <div className="title w-100">
            Name
        </div>
        <div className="body w-100" style={{ fontSize: 17, fontWeight: "bold" }}>{data.name}</div>
        <div style={{ height: 10 }} />
        <div className="title w-100">
            Description
        </div>
        <div className="body w-100">{data.description}</div>
        <div className="title w-100">
            Features
        </div>
        <div className="body w-100">
            <ol>
                {data.features.map((feature) => <li>{feature}</li>)}
            </ol>
        </div>
        <div>

            <div className="title w-100">
                Links
            </div>
            <div>
                <div>
                    {data.project_links.map((link) => <div className="my-2">
                        <Image className="linkimg" src={getLinkIcon(link.type)} height={40} />&nbsp;&nbsp;&nbsp;
                        <a className="projectlink" href={link.link} target="_blank" >Open {link.type}</a>
                    </div>)}
                </div>
            </div>
        </div>
        <div style={{ height: 60 }} />

        <ReactSEOMetaTags
            website={{
                url: `${location.protocol}//${location.host}/project/${data.slug}/detail`,
                title: data.title,
                datePublished: data.created_at,
                dateModified: data.updated_at,
                description: data.description,
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
                { name: data.slug, url: `${location.protocol}//${location.host}/project/${data.slug}/detail`, },
            ]}
            organization={{
                name: 'Paras Rai',
                legalName: 'Paras',
                url: `${location.protocol}//${location.host}/`,
                logo: `${location.protocol}//${location.host}/`
            }}
            blogPost={{
                url: `${location.protocol}//${location.host}/project/${data.slug}/detail`,
                title: data.title,
                description: data.description,
                image: data.images[0],
                imageAlt: data.title,
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