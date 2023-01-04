import React, { useState } from "react";
import { Button, Container, Image, Modal } from "react-bootstrap";
import { MetaTags } from "react-meta-tags";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ReactSEOMetaTags from "react-seo-meta-tags";
import { Loading } from "../../components/loading";
import { fetchAlgorithmDetail } from "../../fetches/algorithms_fetch";

import useDownloader from 'react-use-downloader';

import '../../styles/project.css';
import NotFound from "../not_found_page/not_found_page";
import FadeIn from "react-fade-in/lib/FadeIn";
export default function AlgorithmDetailPage() {
    let { slug } = useParams();
    const location = window.location


    const [modalShow, setModalShow] = React.useState(false);

    const { isLoading, isError, data } = useQuery(`algorithm-${slug}`, () => fetchAlgorithmDetail(slug), { retry: 1 })

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
            <center>
                <Image className="w-100" style={{ maxWidth: 700 }} src={data.image} fluid alt={data.name} />
            </center>
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
                Algorithm
            </div>
            <div className="body w-100">
                <ol>
                    {data.steps.map((step) => <li>{step}</li>)}
                </ol>
            </div>
            <div className="title w-100">
                Example
            </div>
            <div className="body w-100">{data.example_description}</div>

            <center>
                <Image className="my-2 w-100" style={{ maxWidth: 700 }} src={data.example_image} fluid alt={data.name} />
            </center>
            <div>
                <div className="title w-100">
                    Language
                </div>

                <div className="body w-100 my-3">{data.language}</div>
                <div className="title w-100">
                    Solution
                </div>
                <div className="body w-100 my-3">
                    <span className="portfoliobtn" onClick={() => setModalShow(true)}>View Code</span>
                </div>

            </div>
            <div style={{ height: 60 }} />
            <ReactSEOMetaTags
                website={{
                    url: `${location.protocol}//${location.host}/algorithm/${data.slug}/detail`,
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
                    { name: data.slug, url: `${location.protocol}//${location.host}/algorithm/${data.slug}/detail`, },
                ]}
                organization={{
                    name: 'Paras Rai',
                    legalName: 'Paras',
                    url: `${location.protocol}//${location.host}/`,
                    logo: `${location.protocol}//${location.host}/`
                }}
                blogPost={{
                    url: `${location.protocol}//${location.host}/algorithm/${data.slug}/detail`,
                    title: data.name,
                    description: data.description,

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
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                code={data.solution}
                file={data.file}
                file_name={data.file_name}
            />
        </Container>
    </FadeIn>
}


function MyVerticallyCenteredModal(props) {
    const { download } =
        useDownloader();
    const [isCopied, setCopied] = useState(false);

    return (
        <Modal
            {...props}
            size="lg"
            backdropClassName="model-dialog"
            // dialogClassName="model-dialog"
            contentClassName="model-content"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Code
                </Modal.Title>
                <div className="text-right my-3">
                    <span className="portfoliobtn"
                        data-toggle="tooltip" data-placement="top" title="Copy code"
                        onClick={() => {
                            setCopied(false);
                            navigator.clipboard.writeText(props.code);
                            setCopied(true);
                        }}>
                        Copy&nbsp;
                        <img alt="copy" width={20} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABrElEQVRoge2YMU7jQBhGvx8oaKBCKdACQdT0XAAuABJX4Ag5BDXsFnsBKJHoIRKipqYgiUSRrUiFRKJHgb0aIY8VO2PPrjSvsTVjzf8+z3gkj5RIJBL/DcA20AP6wCswJQxj4DfQaUp8FTgH3gMJ+3gGNkLLd4DHhsVdrkLKrxbI3wOnwCawHKxYE/C1bHI+gLPYTnPD1wfrrvkzp68L/AJGhPuQc6bZuD+B7iIBes6gd077ETAJLO1jAhzWDdB3BjrN2nZblM95A3Z8nkslGfac+3527Ulaq/VG6rOe1S3EfB3AVFK+y6yY2QwYSfoR1m8uhmZWOAtlAfj7kJllbW6oNpmZ2UpRR9kSKiLWvu+tWzXAP0cKEJsUIDYpQGxSgNikALFJAWKTAsSmLMCf1iwWoCzATWsWC1D2S9mR9CBpz/mlxPd80+QO3/HOgJmNJR1IunaaZ4G95sVb1zsDRQBDSVsL61RnYGaFp3RVd6HbADJ18NatOgNdSU9q93BrImnfzIZFnZVmwMxeJB1ng7bBRNKJT742wA5wCQxo5nR6AFwA20HFE4lEIjifSk+TwERAwZ4AAAAASUVORK5CYII=" />
                    </span>
                </div>
            </Modal.Header>
            {
                isCopied ?
                    <div className="px-4 py-2 bg-success" style={{ fontSize: 10, fontWeight: 600, textAlign: "right" }}>Code Copied</div> : <></>
            }
            <Modal.Body style={{ overflowY: "scroll" }}>
                <pre onselectstart='return true;'>
                    {props.code}
                </pre>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn-success btn-sm" onClick={() => {
                    download(props.file, props.file_name);
                }}>Download</Button>
                <Button className="btn-danger btn-sm" onClick={() => {
                    props.onHide()
                }}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
}