import axios from "axios";

export async function fetchHobbies() {
    var response = await axios.get("https://api.erparasrai.com.np/api/hobby/all/");
    if (response.status == 200) {
        return response.data;
    }
}
export async function fetchHobbyDetail(slug) {
    var response = await axios.get(`https://api.erparasrai.com.np/api/hobby/${slug}/detail/`);
    if (response.status == 200) {
        return response.data;
    }
    throw Error("Not found")
}


export async function fetchHobbyCategories() {
    var response = await axios.get("https://api.erparasrai.com.np/api/hobby/category/all/");
    if (response.status == 200) {
        return response.data;
    }
}
