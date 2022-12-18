import { Container } from "react-bootstrap";
import { Gallery } from "react-grid-gallery";
import { MetaTags } from "react-meta-tags";
import { useQuery } from "react-query";
import { Loading } from "../../components/loading";
import { fetchPhotography } from "../../fetches/photography_fetch"

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";


import '../../styles/lightbox.css'
import { useState } from "react";
export default function PhotographyPage() {

    const { isLoading, data } = useQuery('photography', fetchPhotography)


    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);


    if (isLoading) return <Loading />
    return <Container style={{}}>

        <MetaTags>
            <title>Photography | Paras Rai</title>
        </MetaTags>
        <div className="py-3">
            <Gallery
                images={data} enableImageSelection={false}
                rowHeight={300}
                margin={4}
                onClick={(index, image) => {
                    setIndex(index);
                    setOpen(true);
                }}
            />

        </div>

        <Lightbox
            open={open}
            index={index}
            plugins={[Zoom, Thumbnails, Captions]}
            close={() => setOpen(false)}
            slides={data}
            styles={{
                container: { backgroundColor: "hsla(0, 0%, 12%, 0.9)" },
                thumbnailsContainer: {
                    backgroundColor: "rgba(0,0,0,0.6)",
                },
                captionsDescriptionContainer: {
                    backgroundColor: "rgba(0,0,0,0.6)",
                    color: "#ffff00",
                },
                captionsDescription: {
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: "#ffff00",
                }
            }}
            thumbnails={{
                position: "bottom",
                width: 200,
                height: 100,
                border: 5,
                borderRadius: 6,
                padding: 0,
                gap: 2,
                imageFit: "cover",
                vignette: false,
            }}
            zoom={{
                maxZoomPixelRatio: 5,
            }}
            captions={{
                descriptionTextAlign: "center",
                descriptionMaxLines: 6,
            }}
        />

    </Container>
} 