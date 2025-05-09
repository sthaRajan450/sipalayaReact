import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromPastes, updateToPastes } from "../redux/features/pasteSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const navigate = useNavigate();
  return (
    <div>
      <input
        className="w-[80%] bg-gray-200 p-4 block m-auto rounded-2xl mt-5 border outline-0"
        type="text"
        value={searchTerm}
        placeholder="Search here"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredData.length > 0 &&
        filteredData.map((paste) => (
          <div key={paste.id} className="flex border mx-20 my-10 p-10 justify-between rounded-lg max-h-[200px] overflow-hidden">
            <div>
              <div className="text-2xl font-semibold">{paste.title}</div>
              <div>{paste.content}</div>
            </div>
            <div className="flex gap-10">
              <button
                className="cursor-pointer hover:text-red-600"
                onClick={() => {
                  navigate(`/?pasteID=${paste.id}`);
                }}
              >
                Edit
              </button>
              <button
                className="cursor-pointer hover:text-red-600"
                onClick={() => {
                  navigate(`/pastes/${paste.id}`);
                }}
              >
                View
              </button>
              <button
                className="cursor-pointer hover:text-red-600"
                onClick={() => navigator.clipboard.writeText(paste.content)}
              >
                Copy
              </button>
              <button
                className="cursor-pointer hover:text-red-600"
                onClick={() => dispatch(RemoveFromPastes(paste.id))}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Pastes;
