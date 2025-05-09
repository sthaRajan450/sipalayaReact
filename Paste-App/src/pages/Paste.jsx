import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Paste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const [paste, setPaste] = useState(null);

  useEffect(() => {
    if (id) {
      const foundPaste = allPastes.find((paste) => paste.id === id);
      setPaste(foundPaste);
    }
  }, [id, allPastes]);

  if (!paste) {
    return <div className="text-center mt-10 text-gray-500">Paste not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{paste.title}</h2>
      <p className="whitespace-pre-wrap">{paste.content}</p>
    </div>
  );
};

export default Paste;
