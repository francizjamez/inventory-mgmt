import { useContext } from "react";
import { useLocation } from "react-router-dom";
import ItemContext from "../../contexts/item.context";
import Button from "../common/Button";

export default function AddForm(props) {
  const item = useContext(ItemContext);

  const location = useLocation();

  console.log(location);
  if (!props.show) {
    return <></>;
  }
  return (
    <div className="fixed h-screen w-screen bg-gray-500 top-0 left-0 bg-opacity-50 grid place-items-center">
      <form
        className="bg-white text-black p-4 rounded flex flex-col gap-3 container max-w-md shadow-md"
        onSubmit={item.handleItemAdd}
      >
        {location.pathname === "/" ? (
          <h1>Select a category first</h1>
        ) : (
          <h1>Add an item in {location.pathname.slice(1)}</h1>
        )}

        <div className="flex flex-col">
          <label>Enter image url</label>
          <input
            type="text"
            className="border border-black rounded"
            onChange={item.handleImageChange}
          />
        </div>

        <div className="flex flex-col">
          <label>Enter name</label>
          <input
            type="text"
            className="border border-black rounded"
            onChange={item.handleNameChange}
          />
        </div>

        <div className="flex flex-col">
          <label>Enter description</label>
          <input
            type="text"
            className="border border-black rounded"
            onChange={item.handleDescriptionChange}
          />
        </div>

        <div className="flex flex-col">
          <label>Enter price</label>
          <input
            type="number"
            className="border border-black rounded"
            onChange={item.handlePriceChange}
          />
        </div>

        <div className="flex justify-center gap-4">
          <Button type="submit" disabled={location.pathname === "/"}>
            Add item
          </Button>
          <Button color="danger" type="button" onClick={item.toggleForm}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
