import { Container, Image } from "react-bootstrap";
import FadeIn from "react-fade-in/lib/FadeIn";
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

    const { isLoading, isError, data } = useQuery(`project-${slug}`, () => fetchProjectDetail(slug), { retry: 1 })

    if (isError) {
        return <NotFound />
    }
    if (isLoading) {
        return <Loading />
    }

    return <FadeIn>
        <Container >

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
                        {data.project_file != null ?
                            <div className="my-2">
                                <Image className="linkimg" alt="Download button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACB0lEQVRoge2ZzWoUQRSFz5WsRKIElaDr4IBxpxt/FhJduRR1pyt9Bn2HPIM+QXCjO0VBBReKiGQhCG7Enw6EoBAmGz8X3pGZdsZUd1U1jdQHA0NP1bnn1O2fokcqFArRADeAHbpnB7ge4tECQhyRtC7pQOyCtOS7pONm9ilKBbjvq7OWxlej2mte+0Gs0DUX2gKOJvLXpP4isOkerrYVWQC+usjNxB6b+LjlHjaAg20E7rnAU2DXaykXgAGP3MvdppPPAz+BITDI5LGJnyVg28NcDJ20F/jgk25n9hgMcMc9fQT2hUxY9QlvgLkOPAYBzLkngNWQCaMWtuVZQI0XkTW265p/XcQAwcs0m3kz+zEjxH5JW7EFzGzC+55YwRlcaPlba3J15L2k02a2WdNekPRS0lJsga46ckzSW+AKMO+fy0oUYhq5OpKdrjrSOSVI3yhBGnBG0rncRbLftUZ3l1y6I8qp1TdKkL5RgvSNEmQKZyWdklQFjK0knVTCB2XKIEMzeyVpRf8OU0laMbPXkoYJ608S8UKgAk64xgD4PP40nzHmS9tiOYNMDTOmmyxEF0EAvgHLrrU8pvvnmI+Jou4716ZxQ7+vg3c17YGkJ5IWYwt0tWk8JOkxfipJaUNMI/c2vpJ0yb8/lHQ4lXC9I+UtSt8oQfrGfx3keecumrPrfzCFQmGSXwgr3jCnkuc/AAAAAElFTkSuQmCC" height={30} width={30} />&nbsp;&nbsp;&nbsp;
                                <a className="projectlink" href={data.project_file} rel="noreferrer" target="_blank" aria-label={`Click to open download project file`} >Download File</a>
                            </div> : <></>
                        }
                        {data.project_links.map((link) => <div className="my-2">
                            <Image className="linkimg" src={getLinkIcon(link.type)} height={40} width={40} alt={link.type} />&nbsp;&nbsp;&nbsp;
                            <a className="projectlink" href={link.link} rel="noreferrer" target="_blank" aria-label={`Click to open project link`}>Open {link.type}</a>
                        </div>)}
                    </div>
                </div>
            </div>
            <div style={{ height: 60 }} />

            <ReactSEOMetaTags
                website={{
                    url: `${location.protocol}//${location.host}/project/${data.slug}/detail`,
                    title: data.name,
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
                    title: data.name,
                    description: data.description,
                    image: data.images[0],
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
    </FadeIn>
}