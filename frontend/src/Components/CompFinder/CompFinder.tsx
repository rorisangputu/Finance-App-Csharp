import { useEffect, useState } from "react";
import CompFinderItem from "./CompFindItem/CompFindItem";
import type { CompanyCompData } from "../../company";
import { getCompData } from "../../api";
import Spinner from "../Spinners/Spinner";
type Props = {
  ticker: string;
};

const CompFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyCompData[]>([]);
  const [loading, setLoading] = useState(true);
  //console.log("Co data",companyData)
 
  useEffect(() => {
    const getComps = async () => {
      setLoading(true);
      const data = await getCompData(ticker);
      setCompanyData(data || []);
      setLoading(false);
    };
    getComps();
  }, [ticker]);

  if (loading) return <Spinner />;

  return (
    <div className="grid grid-cols-4  lg:grid-cols-6 xl:grid-cols-8 rounded-md m-4 gap-2" role="group">
      {companyData.length > 0 ? (
        companyData.map((comp) => (
          <CompFinderItem key={comp.symbol} ticker={comp.symbol} />
        ))
      ) : (
        <h1>No comparable companies found</h1>
      )}
    </div>
  );
};

export default CompFinder;