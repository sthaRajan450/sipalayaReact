import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  // Check if featuredImage is provided and valid
  const imagePreview = featuredImage
    ? appwriteService.getFilePreview(featuredImage)
    : null; // If no image, don't attempt to fetch a preview

  return (
    <Link to={`post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt={title}
              className="rounded-xl"
            />
          ) : (
            <div className="h-48 bg-gray-300 rounded-xl flex items-center justify-center text-gray-500">
              No Image Available
            </div>
          )}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
