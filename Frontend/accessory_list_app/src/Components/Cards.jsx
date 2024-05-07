import { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { Input } from "../assets/Shadcn UI Components/Input";
import * as React from "react";
// import Rating from '@mui/material/Rating';
import { Rating } from "@mantine/core";
import axios from "axios";
import { Button } from "../assets/Shadcn UI Components/button";
import { Link } from "react-router-dom";

const Cards = () => {
  const [items, setItems] = useState([]);
  const [modalCategory, setModalCategory] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [users, setUsers] = useState([]);
  const [selectValue, setSelectValue] = useState("");

  const showModal = (category, id) => {
    document.getElementById("my_modal_1").showModal();
    setModalCategory(category);
    setDeleteId(id);
  };

  const fetchData = () => {
    axios
      .get("https://s53-important-accessories.onrender.com/accessory")
      .then((res) => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchUsers = () => {
    axios
      .get("https://s53-important-accessories.onrender.com/user")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
    fetchUsers();
  }, []);

  const handleDelete = () => {
    axios
      .delete(`https://s53-important-accessories.onrender.com/accessory/${deleteId}`)
      .then(() => {
        fetchData();
        console.log({ modalCategory, deleteId }, "deleted from database");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Filter items based on selected user ID
  const filteredItems = selectValue
    ? items.filter((item) => item.user_id === selectValue)
    : items;

  return (
    <>
      <Input
        className="w-[80vw] md:w-[20vw]"
        type="search"
        placeholder="🔍 Search Items"
      />
      <select
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        <option value="">All Users</option>
        {users.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="grid grid-cols-1 md:grid-cols-2 m-[auto] gap-[3vmin] bg-amber-100 text-center p-5">
        {filteredItems.map((item) => (
          <Card
            key={item._id}
            imgSrc={item.image}
            horizontal
            className="max-w-sm m-[auto] glass bg-yellow-200 min-h-[45vh]"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.category}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.description}
            </p>
            <p className="font-normal text-gray-800 dark:text-gray-600">
              Average Buy: {item.averageBuyPrice}
            </p>
            <a href={item.amazonLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Buy Now</a>
            <div className="flex justify-between">
              <Link to={`/update/${item._id}`}>
                <Button variant="secondary" className="bg-slate-400 hover:bg-slate-500">Update</Button>
              </Link>
              <Button
                variant="destructive"
                className="bg-red-400 hover:bg-red-500"
                onClick={() => showModal(item.category, item._id)}
              >
                Delete
              </Button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Are You Sure !</h3>
                  <p className="py-4">You want to Delete {modalCategory} ?</p>
                  <div className="modal-action">
                    <form method="dialog" className="flex justify-evenly w-[100%]">
                      <button className="btn bg-blue-400 hover:bg-blue-500">Cancel</button>
                      <button className="btn bg-red-400 hover:bg-red-500" onClick={handleDelete}>Delete</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </Card>
        ))}
      </div>
    </>
  );
};

export default Cards;

