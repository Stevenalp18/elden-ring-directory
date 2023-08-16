const AmmosCards = ({ arr }) => {
  return (
    <>
      {arr.data.map((item) => (
        <div
          className="bg-neutral-400 text-black rounded-lg w-full sm:w-96 sm:p-10 p-6 mx-4 h-auto text-center"
          key={item.id}
        >
          <div className="text-2xl mb-8 lg:text-3xl">{item.name}</div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-center">
              <img src={item.image} className="w-[100px] lg:w-[200px]" />
            </div>
            {/* Content */}
            <div className="text-md flex flex-col gap-4 justify-center align-middle lg:text-lg">
              <div>{item.description}</div>
              <hr className="border-neutral-500" />
              <div>Type: {item.type}</div>
              <hr className="border-neutral-500" />
              <div>Passive Effects: {item.passive}</div>
              <hr className="border-neutral-500" />
              <div>Attack Power:</div>
              <div className="flex flex-row justify-center flex-wrap gap-2  -mt-2">
                {item.attackPower.map((subitem) => (
                  <div>
                    {subitem.name}: {subitem.amount}
                  </div>
                ))}
              </div>
            </div>
            {/* Content End */}
          </div>
        </div>
      ))}
    </>
  );
};
export default AmmosCards;
