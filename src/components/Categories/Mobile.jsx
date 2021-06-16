import { useContext, useEffect, useState } from "react";
import ItemContext from "../../contexts/item.context";

// const data = [
//   {
//     name: "Redmi Note 10 Pro Max",
//     price: 410,
//     description:
//       "The Redmi Note 10 Pro Max brings a revolutionary change to the mid-premium segment. This smartphone features a magnificent 108MP Quad Camera setup that combines a 3rd generation HM2 108MP primary sensor, 8MP ultra-wide-angle lens, with 118° field of view, a 5MP Super tele-macro camera and a dedicated 2MP depth sensor",
//     image:
//       "https://i02.appmifile.com/489_operator_in/04/03/2021/01eddd95340c9a304ab55cc66653f173.jpg",
//   },
//   {
//     name: "OnePlus Nord",
//     price: 500,
//     description: "",
//     image:
//       "https://www.gizmochina.com/wp-content/uploads/2020/10/OnePlus-Nord-N100-1-500x500.jpg",
//   },
// ];

const Mobile = () => {
  const item = useContext(ItemContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await item.getItemCollections("mobiles");
      setData(res);
    }

    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <h1>Mobiles</h1>
      <div className="flex flex-col gap-2">
        {data.map((val) => (
          <div className="grid grid-cols-5 gap-1 px-2 py-4 shadow-md bg-green-700 items-center justify-items-center">
            <img src={val.image} alt="" />
            <p className="">{val.name}</p>
            <p className="col-span-2">{val.description}</p>
            <p>${val.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobile;
