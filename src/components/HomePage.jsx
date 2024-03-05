import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_REACT_APP_CATEGORY_COURSE)
      .then((res) => setDatas(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteCategory = (categoryId) => {
    axios
      .delete(import.meta.env.VITE_REACT_APP_CATEGORY_COURSE + categoryId)
      .then(() => {
        setDatas(datas.filter((data) => data.id !== categoryId));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto px-10 py-10">
      <h1 className="text-3xl text-center font-bold">CRUD full JS</h1>
      <Link to="/add">
        <button className="my-5 px-4 py-2 bg-blue-600 rounded-sm hover:bg-blue-700 text-white">
          Add
        </button>
      </Link>
      <div className="flex flex-wrap justify-center gap-2">
        {datas?.map((data) => (
          <div
            className="w-[255px] rounded-md border border-slate-600"
            key={data.id}
          >
            <img
              src={data.imageUrl}
              alt={data.name}
              className="w-full h-[200px] rounded-t-md"
            />
            <div className="p-2">
              <h1 className="text-xl font-normal text-slate-700 mb-2">
                {data.name}
              </h1>
              <div className="flex gap-2">
                <Link to={`/update/${data.id}`}>
                  <button className="px-4 py-2 bg-green-600 rounded-sm hover:bg-green-700 text-white">
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => deleteCategory(data.id)}
                  className="px-4 py-2 bg-red-600 rounded-sm hover:bg-red-700 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
