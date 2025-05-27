import axios from "axios";
import { type CompanySearch } from "./company"
interface searchRes{
    data: CompanySearch[];
}
export const searchCompanies = async(query: string) => {
    const apiKey = import.meta.env.VITE_API_KEY
    try {
        const data = await axios.get<searchRes>(
            `https://financialmodelingprep.com/stable/search-name?query=${query}&apikey=${apiKey}`
        );
        return data;
    } catch (error) {
        console.log(error)
        return "An unexpected error has occurred"
    }
}