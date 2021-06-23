import { useLocation } from "react-router-dom";
import {
  add,
  deleteItemFromDatabase,
  getItemCollectionFromDatabase,
} from "../firebase/item.controller";

const { createContext, useState } = require("react");

const ItemContext = createContext({});

export default ItemContext;

export const ItemProvider = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [itemData, setItemData] = useState({});
  const [dataUpdate, setDataUpdate] = useState(false);
  const [updatedItems, setUpdatedItems] = useState(false);

  const location = useLocation();

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleImageChange = (e) => {
    setItemData({ ...itemData, image: e.target.value });
  };
  const handleNameChange = (e) => {
    setItemData({ ...itemData, name: e.target.value });
  };
  const handleDescriptionChange = (e) => {
    setItemData({ ...itemData, description: e.target.value });
  };
  const handlePriceChange = (e) => {
    setItemData({ ...itemData, price: e.target.value });
  };

  const handleItemAdd = async (e) => {
    e.preventDefault();

    let res = null;

    switch (location.pathname) {
      case "/mobiles":
        res = await add(itemData, "mobiles");
        break;
      case "/laptops":
        res = await add(itemData, "laptops");
        break;
      case "/appliances":
        res = await add(itemData, "appliances");
        break;
      default:
    }
    refreshInventory();

    toggleForm();

    return res;
  };

  const getItemCollections = async (collection) => {
    return await getItemCollectionFromDatabase(collection);
  };

  const deleteItem = async (item, collection) => {
    await deleteItemFromDatabase(item, collection);
    refreshInventory();
  };

  const refreshInventory = () => {
    setUpdatedItems(true);

    setTimeout(() => setUpdatedItems(false), 10);
  };

  const values = {
    showForm,
    toggleForm,
    handleImageChange,
    handleNameChange,
    handleDescriptionChange,
    handlePriceChange,
    handleItemAdd,
    getItemCollections,
    dataUpdate,
    setDataUpdate,
    updatedItems,
    deleteItem,
  };
  return (
    <ItemContext.Provider value={values}>{props.children}</ItemContext.Provider>
  );
};
