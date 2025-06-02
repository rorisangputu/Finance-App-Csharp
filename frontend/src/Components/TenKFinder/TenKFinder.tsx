import { useEffect, useState } from "react";
import type { CompanyTenK } from "../../company";
import { getTenK } from "../../api";
import TenKFinderItem from "./TenKFindItem/TenKFindItem";
import Spinner from "../Spinners/Spinner";

type Props = {
  ticker: string;
};

const TenKFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyTenK[]>();
  useEffect(() => {
    const getTenKData = async () => {
      const value = await getTenK(ticker);
      setCompanyData(value?.data);
    };
    getTenKData();
  }, [ticker]);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 rounded-md m-4" role="group">
      {companyData ? (
        companyData?.slice(0, 5).map((tenK) => {
          return <TenKFinderItem tenK={tenK} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TenKFinder;