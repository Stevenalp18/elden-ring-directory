import DefaultLayout from "../../layout/DefaultLayout";
import { baseUrl } from "../../data/fetchData";
import { useEffect, useState } from "react";
import AmmosCards from "../../components/Cards/AmmosCards";

const AmmosPage = () => {
  const url = baseUrl + "ammos?limit=100";
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch(url);
        const processedResponse = await response.json();
        setData(processedResponse);
        if (response.status === 200) {
          setTimeout(() => {
            setLoading(false);
          }, 2000);

          console.log(data.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchApi();
  }, []);

  return (
    <>
      <DefaultLayout />
      <div className="pt-24 lg:ml-60 text-white font-['Lora'] border-2">
        <div className="m-auto ">
          <div className="text-center text-3xl font-bold ">Ammo Types</div>
          <div className="flex gap-8 text-xl flex-wrap justify-center m-auto my-10 text-center">
            {loading ? <div>Loading...</div> : <AmmosCards arr={data} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AmmosPage;
