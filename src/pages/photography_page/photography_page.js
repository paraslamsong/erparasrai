import { Container } from "react-bootstrap";
import { Gallery } from "react-grid-gallery";
import { MetaTags } from "react-meta-tags";
import { useQuery } from "react-query";
import { Loading } from "../../components/loading";
import { fetchPhotography } from "../../fetches/photography_fetch"

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import '../../styles/lightbox.css'
import { useState } from "react";
export default function PhotographyPage() {

    const { isLoading, isError, data, error } = useQuery('photography', fetchPhotography)


    const [currentImage, setCurrent] = useState(null);
    const [index, setIndex] = useState(-1);
    // const currentImage = images[index];
    // const nextIndex = (index + 1) % images.length;
    // const nextImage = images[nextIndex] || currentImage;
    // const prevIndex = (index + images.length - 1) % images.length;
    // const prevImage = images[prevIndex] || currentImage;

    const handleClick = (index, item) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(index - 1);
    const handleMoveNext = () => setIndex(index + 1);


    if (isLoading) return <Loading />
    return <Container style={{}}>

        <MetaTags>
            <title>Photography | Paras Rai</title>
        </MetaTags>
        <Gallery
            images={data} enableImageSelection={false}
            onClick={({ index, image }) => {
                setCurrent(image)
                setIndex(index)
            }}
        />
        {index != -1 ? (
            <Lightbox
                mainSrc={currentImage.src}
                imageTitle={currentImage.caption}
                mainSrcThumbnail={currentImage.nano}
            // nextSrc={data[index + 1].src}
            // nextSrcThumbnail={data[index + 1].nano}
            // prevSrc={data[index - 1].src}
            // prevSrcThumbnail={data[index - 1].nano}
            // onCloseRequest={handleClose}
            // onMovePrevRequest={handleMovePrev}
            // onMoveNextRequest={handleMoveNext}
            />
        ) : <></>}
        {/* <Lightroom style={{ marginTop: 200 }} images={data.map((img) => {
            return {
                src: img.src,
                desc: img.caption,
                sub: 'Dmitriy Frantsev'
            }
        })} settings={{
            columnCount: {
                default: 5,
                mobile: 3,
                tab: 4
            },
            mode: 'dark'
        }} /> */}
    </Container>
} 