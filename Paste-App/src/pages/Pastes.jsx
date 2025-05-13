import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromPastes } from "../redux/features/pasteSlice";
import { useNavigate } from "react-router-dom";

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
        📋 Your Pastes
      </h1>

      <div className="flex justify-center ">
        <input
          className="w-full max-w-xl bg-white p-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          type="text"
          value={searchTerm}
          placeholder="🔍 Search pastes..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mt-10 space-y-6">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div
              key={paste.id}
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl p-6 mx-auto max-w-4xl border border-gray-200 flex justify-between items-center"
            > 
              <div className="w-3/5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate">
                  {paste.title}
                </h2>
                <p className="text-gray-600 overflow-hidden line-clamp-3">
                  {paste.content}
                </p>
              </div>

              <div className="flex flex-col gap-5 w-2/5 items-end">
                <div className="flex gap-5">
                  <button
                    className="text-sm text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                    onClick={() => navigate(`/?pasteID=${paste.id}`)}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="text-sm text-green-600 hover:text-green-800 transition-colors cursor-pointer"
                    onClick={() => navigate(`/pastes/${paste.id}`)}
                  >
                    👁️ View
                  </button>
                  <button
                    className="text-sm text-purple-600 hover:text-purple-800 transition-colors cursor-pointer"
                    onClick={() => navigator.clipboard.writeText(paste.content)}
                  >
                    📋 Copy
                  </button>
                  <button
                    className="text-sm text-red-600 hover:text-red-800 transition-colors cursor-pointer"
                    onClick={() => dispatch(RemoveFromPastes(paste.id))}
                  >
                    🗑️ Delete
                  </button>
                </div>
                <div>
                  <p>{paste.createdAt}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 mt-10 text-lg">
            No matching pastes found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Pastes;
