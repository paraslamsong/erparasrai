import axios from "axios";
export async function fetchAlgorithms() {
    var response = await axios.get("https://api.erparasrai.com.np/api/algorithm/all/");
    if (response.status === 200) {

        return response.data;
    }
}
export async function fetchAlgorithmDetail(slug) {
    var response = await axios.get(`https://api.erparasrai.com.np/api/algorithm/${slug}/detail/`);
    if (response.status === 200) {
        return response.data;
    }
    throw Error("Not found")
}
export async function fetchCode(fileUrl) {
    var response = await axios.get(fileUrl);
    if (response.status === 200) {
        return response.data;
    }
}