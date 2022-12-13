import axios from "axios";

export async function fetchAllProjects() {
    var response = await axios.get("http://localhost:8000/api/projects/all/");
    if (response.status == 200) {
        return response.data;
    }
}
export async function fetchFeaturedProjects() {
    var response = await axios.get("http://localhost:8000/api/projects/featured/");
    if (response.status == 200) {
        return response.data;
    }
}

export async function fetchProjectDetail(slug) {

    var response = await axios.get(`http://localhost:8000/api/projects/${slug}/detail/`);
    if (response.status == 200) {
        return response.data;
    }
    throw Error("Not found")
} 