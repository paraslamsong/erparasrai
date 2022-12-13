import axios from "axios";

export async function fetchAbout() {
    var response = await axios.get("http://localhost:8000/api/about/");
    if (response.status == 200) {
        return response.data;
    }
}
export async function fetchContact() {
    var response = await axios.get("http://localhost:8000/api/about/contacts/");
    if (response.status == 200) {
        return response.data;
    }
}
export async function fetchSocial() {
    var response = await axios.get("http://localhost:8000/api/about/socials/");
    if (response.status == 200) {
        return response.data;
    }
}
export async function fetchCV() {
    var response = await axios.get("http://localhost:8000/api/about/cv/");
    if (response.status == 200) {
        return response.data;
    }
}