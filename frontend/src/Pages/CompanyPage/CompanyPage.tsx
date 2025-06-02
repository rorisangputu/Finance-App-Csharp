import { useParams } from "react-router"
import { getCompanyProfile } from "../../api";
import { useEffect, useState } from "react";
import type { CompanyProfile } from "../../company";




const CompanyPage = () => {
  const {ticker} = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfile = async () => {
      const res = await getCompanyProfile(ticker as string);
      if (typeof res === "object" && res !== null && "data" in res) {
        setCompany(res.data[0]);
      } else {
        setCompany(undefined);
      }
    }

    getProfile();
  }, [ticker])

  return (
    <div>
      {
        company ? 
        (
          <>
            <div>{company?.companyName}</div>
          </>
        ) : (
          <>
            <div className="border border-red-600 bg-red-600 p-5
              flex flex-col justify-center items-center text-white gap-5"
            >
              <h1 className="text-5xl font-bold">No Data.</h1>
              <p className="font-medium">Company not found.</p>
            </div>
          </>
        )
      }
      
    </div>
  )
}

export default CompanyPage