import axios from "axios";

export async function fetchAllProjects(page) {
    var response = await axios.get(`https://api.erparasrai.com.np/api/projects/all/?page=${page}`);
    if (response.status === 200) {
        return response.data;
    }
}
export async function fetchFeaturedProjects() {
    var response = await axios.get("https://api.erparasrai.com.np/api/projects/featured/");
    if (response.status === 200) {
        return response.data;
    }
}

export async function fetchProjectDetail(slug) {
    var response = await axios.get(`https://api.erparasrai.com.np/api/projects/${slug}/detail/`);
    if (response.status === 200) {
        return response.data;
    }
    throw Error("Not found")
} 