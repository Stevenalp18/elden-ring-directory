import DefaultLayout from "../../layout/DefaultLayout";
import { baseUrl } from "../../data/fetchData";
import { useEffect, useState } from "react";
import AmmosCards from "../../components/Cards/AmmosCards";

const AmmosPage = (props) => {
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
      <div className="relative top-16 lg:left-72 text-white font-['Lora'] lg:w-9/12">
        <div className="border-2 border-[#0a0a0a] m-auto w-full">
          <div className="text-center m-10 text-3xl font-bold ">Ammo Types</div>
          <div className="flex gap-8 text-xl flex-wrap justify-center m-auto my-10 text-center">
            {loading ? <div>Loading...</div> : <AmmosCards arr={data} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AmmosPage;
