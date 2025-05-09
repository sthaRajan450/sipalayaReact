import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/features/pasteSlice";
import { useEffect } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteID");

  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((paste) => paste.id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  function createpaste() {
    const paste = {
      title: title,
      content: value,
      id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste)); // update
    } else {
      dispatch(addToPastes(paste)); // create
    }

    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div>
      <div className="flex justify-between rounded-lg mt-5 bg-gray-300 w-1/2 m-auto">
        <input
          className="p-2 outline-none w-[50%]"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="cursor-pointer bg-black/75 text-white p-2 rounded-lg"
          onClick={createpaste}
        >
          {pasteId ? "Update my paste" : "Create my paste"}
        </button>
      </div>
      <div className="flex justify-center mt-10">
        <textarea
          value={value}
          className="rounded-2xl border p-4 w-[80%] h-[600px] bg-gray-200"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter content here"
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
