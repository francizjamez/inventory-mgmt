import { useContext, useEffect, useState } from "react";
import ItemContext from "../../contexts/item.context";
import Button from "../common/Button";

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
  }, [item.updatedItems]);
  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <h1>Mobiles</h1>
      <div className="flex flex-col gap-2">
        {data.map((val) => (
          <div className="grid grid-cols-6 gap-1 px-2 py-4 shadow-md bg-green-700 items-center justify-items-center">
            <img src={val.image} alt="" />
            <p className="">{val.name}</p>
            <p className="col-span-2">{val.description}</p>
            <p>${val.price}</p>
            <Button
              color="danger"
              onClick={() => item.deleteItem(val.id, "mobiles")}
            >
              Del
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobile;
