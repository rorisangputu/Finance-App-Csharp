import { useParams } from "react-router"
import { getCompanyProfile } from "../../api";
import { useEffect, useState } from "react";
import type { CompanyProfile } from "../../company";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";
import CompFinder from "../../Components/CompFinder/CompFinder";
import TenKFinder from "../../Components/TenKFinder/TenKFinder";
import Spinner from "../../Components/Spinners/Spinner";

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
         <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile title="Price" subTitle={"$" + company.price.toString()} />
            <Tile title="DCF" subTitle={"$" + company.dcf.toString()} />
            <Tile title="Sector" subTitle={company.sector} />
            <CompFinder ticker={company.symbol} />
            <TenKFinder ticker={company.symbol} />
            <p className="bg-white shadow rounded text-medium font-medium text-gray-900 p-3 mt-1 m-4">
              {company.description}
            </p>
          </CompanyDashboard>
        </div>
        ) : (
          <>
            <div className="
              flex flex-col justify-center items-center text-white gap-5"
            >
              {/* <h1 className="text-5xl font-bold">No Data.</h1>
              <p className="font-medium">Company not found.</p> */}
              <Spinner />
            </div>
            
          </>
        )
      }
      
    </div>
  )
}

export default CompanyPage