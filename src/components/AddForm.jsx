import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AddForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  const loadImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const saveCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    try {
      await axios.post(
        import.meta.env.VITE_REACT_APP_CATEGORY_COURSE,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      <div className="w-[500px] mx-auto rounded-md border border-slate-600 py-3 px-3">
        <h1 className="text-center font-bold">Add</h1>
        <form onSubmit={saveCategory}>
          <div className="mb-3">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full mt-1 p-2 border border-slate-600"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="font-semibold">
              Image
            </label>
          </div>
          <div className="mb-3 relative">
            <input type="file" name="image" onChange={loadImage} required />
            <div className="absolute top-0 left-[100px] bg-white w-32 h-full z-10"></div>
          </div>
          {preview ? (
            <figure className="w-[120px] h-[120px]">
              <img src={preview} alt="preview image" />
            </figure>
          ) : (
            ""
          )}

          <div className="mt-3 ">
            <button className="my-1 mr-2 px-4 py-2 bg-blue-600 rounded-sm hover:bg-blue-700 text-white">
              Save
            </button>
            <Link to="/">
              <button className="my-1 px-4 py-2 bg-blue-600 rounded-sm hover:bg-blue-700 text-white">
                Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
