import DefaultLayout from "../../layout/DefaultLayout";
import { baseUrl } from "../../data/fetchData";
import { useEffect, useState } from "react";

const AmmosPage = (props) => {
  const url = baseUrl + "ammos?limit=20";
  const [data, setData] = useState();

  // useEffect(() => {
  //   async function fetchEldenRing() {
  //     const response = await fetch(url);
  //     const proccesedResponse = await response.json();
  //     setData(proccesedResponse);
  //     console.log(data.data);
  //   }
  //   fetchEldenRing();
  // }, []);

  return (
    <>
      <DefaultLayout />
      <div className="lg:p-10 m-auto relative lg:left-28 top-20 text-white md:w-screen h-screen">
        <div className="border-2 lg:w-9/12 w-screen m-auto">
          <div className="text-center">Title</div>
          <div className="flex gap-10 flex-wrap justify-center m-10">
            {data ? (
              data.data.map((item) => (
                <div className="border-2 rounded-lg p-10 h-96 w-2/5">
                  {item.name}
                  <img src={`${item.image}`} />
                </div>
              ))
            ) : (
              <div>Waiting...</div>
            )}
            {/* <div className="border-2 rounded-lg p-10 h-96 w-2/5"></div> */}
            {/* <div className="border-2 rounded-lg p-10 h-96 w-2/5">
              Content Here
            </div>
            <div className="border-2 rounded-lg p-10 h-96 w-2/5">
              Content Here
            </div>
            <div className="border-2 rounded-lg p-10 h-96 w-2/5">
              Content Here
            </div>
            <div className="border-2 rounded-lg p-10 h-96 w-2/5">
              Content Here
            </div>
            <div className="border-2 rounded-lg p-10 h-96 w-2/5">
              Content Here
            </div>
            <div className="border-2 rounded-lg p-10 h-96 w-2/5">
              Content Here
            </div>
            <div className="border-2 rounded-lg p-10 h-96 w-2/5">
              Content Here
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AmmosPage;
