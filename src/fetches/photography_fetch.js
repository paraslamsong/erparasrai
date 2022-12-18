import axios from "axios";

export async function fetchPhotography() {
    var response = await axios.get("https://api.erparasrai.com.np/api/photography/all/");
    const images = []
    if (response.status === 200) {
        response.data.forEach((img) => {
            images.push({
                nano: img.thumbnail,
                src: img.original,
                tags: img.tags.map((tag) => { return { value: tag, title: tag } }),
                alt: img.alt,

                width: 5000,
                caption: img.description,
                original: img.original,
                description: img.description,
            })
        })
        return images;
    }
}
