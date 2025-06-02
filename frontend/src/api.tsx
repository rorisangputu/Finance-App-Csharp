import axios from "axios";
import { type CompanyProfile, type CompanySearch } from "./company"
interface searchRes{
    data: CompanySearch[];
}
const apiKey = import.meta.env.VITE_API_KEY;

export const searchCompanies = async(query: string) => {
    
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

export const getCompanyProfile = async(query: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${apiKey}`
        );
        return data;

    } catch (error) {
        console.log(error);
        return "Error has occured from api"
    }
}