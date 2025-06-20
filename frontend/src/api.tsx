/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { type CompanyKeyMetrics, type CompanyCompData, type CompanyProfile, type CompanySearch, type CompanyTenK, type CompanyIncomeStatement, type CompanyBalanceSheet, type CompanyCashFlow } from "./company"
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

export const getCompData = async (query: string) => {
  console.log(query)
  try {
    const response = await axios.get<CompanyCompData[]>(
      `https://financialmodelingprep.com/stable/stock-peers?symbol=${query}&apikey=${apiKey}` );
    return response.data;
  } catch (error: any) {
    console.log("error message: ", error.message);
    return [];
  }
};

export const getTenK = async (query: string) => {
  try {
    const data = await axios.get<CompanyTenK[]>(
      `https://financialmodelingprep.com/api/v3/sec_filings/${query}?type=10-K&page=0&apikey=${apiKey}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getKeyMetrics = async (query: string) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${apiKey}`
    );
    return data;
  
  } catch (error: any) {
    console.log("Error message: ", error.message)
  }
};

export const getIncomeStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&apikey=${apiKey}`
    );
    return data;
  
  } catch (error: any) {
    console.log("Error message: ", error.message)
  }
};
export const getBalanceSheet = async (query: string) => {
  try {
    const data = await axios.get<CompanyBalanceSheet[]>(
      `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=40&apikey=${apiKey}`
    );
    return data;
  
  } catch (error: any) {
    console.log("Error message: ", error.message)
  }
};

export const getCashFlow = async (query: string) => {
  try {
    const data = await axios.get<CompanyCashFlow[]>(
      `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=100&apikey=${apiKey}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};