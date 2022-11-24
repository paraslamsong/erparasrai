import { Container } from "react-bootstrap";
import { Gallery } from "react-grid-gallery";

export default function PhotographyPage() {
    const images = [
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",

            caption: "After Rain (Jeshu John - designerspics.com)",
        }, {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",

            caption: "After Rain (Jeshu John - designerspics.com)",
        }, {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",

            caption: "After Rain (Jeshu John - designerspics.com)",
        }, {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",

            caption: "After Rain (Jeshu John - designerspics.com)",
        }, {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",

            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",

            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            alt: "Boats (Jeshu John - designerspics.com)",
        },

        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        },
    ];
    return <Container>
        <Gallery
            images={images} enableImageSelection={false}
            onClick={({ index, image }) => { }}
        />
    </Container>
} 