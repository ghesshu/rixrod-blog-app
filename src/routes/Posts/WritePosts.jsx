import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const WritePosts = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null);
  const [content, setContent] = useState("");
  const [loadBtn, setLoadBtn] = useState("hidden");
  const [logBtn, setLogBtn] = useState("block");
  const [loadDBtn, setLoadDBtn] = useState("hidden");
  const [logDBtn, setLogDBtn] = useState("block");
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageSelected, setIsImageSelected] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setSelectedImage({ file: selectedFile, url: imageUrl });
      setIsImageSelected(true); // Set to true when an image is selected
    }
  };

  const handleRemoveImage = async () => {
    setSelectedImage(null);
    setIsImageSelected(false);
  };

  const handleSub = async (e) => {
    e.preventDefault();
    setLoadBtn("block");
    setLogBtn("hidden");

    // Create a new FormData object to send the form data
    const formData = new FormData();

    // Append the selected image file to the FormData object
    if (selectedImage) {
      formData.append("image", selectedImage.file);
    }

    // Append the title and content to the FormData object
    formData.append("title", title);
    formData.append("content", content);

    if (!title || !content || !selectedImage) {
      toast.warn(`All Fields are required`, {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoadBtn("hidden");
      setLogBtn("block");
    } else {
      try {
        // Log the FormData object here after data has been appended
        console.log("Form Data:", formData.get("image"));
        setLoadBtn("hidden");
        setLogBtn("block");

        // Perform your API request here using the formData object
        // Example: await newEvents(formData);
        // await getEvents();
        // navigate(-1);
      } catch (err) {
        console.log(err);
        setLoadBtn("hidden");
        setLogBtn("block");
      }
    }
  };

  return (
    <div>
      <div className="p-4 h-14 w-full bg-white flex justify-between items-center">
        <h1 className="font-semibold">WRITE POST</h1>
      </div>

      <div className="bg-white my-8 p-8">
        <h1 className="text-xl font-bold">POST DETAILS</h1>
        <div className=" my-7 grid grid-cols-1 md:grid-cols-2 slg:grid-cols-3 gap-8 lg:gap-14">
          <div
            className="col-span-2 border-2 border-dashed border-blue-300 p-4 text-center cursor-pointer"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <p>Drag and drop image here or click to select image</p>
            <input
              type="file"
              multiple
              className="hidden"
              onChange={handleFileInputChange}
              ref={fileInputRef}
            />
            <button
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => fileInputRef.current.click()}
            >
              Select Image
            </button>

            {isImageSelected && (
              <button
                className="mx-4 mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleRemoveImage}
              >
                Remove Image
              </button>
            )}

            <div className="mt-4">
              {files.map((file, index) => (
                <div key={index} className="text-left">
                  {file.name}
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2 w-full relative">
            <label
              htmlFor="firstName"
              className="absolute ml-3 -mt-[0.6rem] font-light bg-white px-2 text-xs"
            >
              POST TITLE <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full border p-3 border-black"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="firstName" // Add the name attribute
            />
          </div>

          <div className="w-full relative col-span-2">
            <label
              htmlFor="eventDescription"
              className="absolute ml-3 mt-[0.6rem] font-light bg-white px-2 text-xs m"
            >
              POST CONTENT
            </label>

            <textarea
              id="eventDescription"
              name="eventDescription"
              rows="4"
              cols="50"
              className="w-full border p-3 border-black mt-6"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter POST CONTENT"
            />
          </div>
        </div>

        {selectedImage && (
          <div className="mt-4 border-black border p-4 ">
            <h1 className="font-bold bg-white w-full border px-4 py-4">
              IMAGE PRIVIEW
            </h1>

            <img
              src={selectedImage.url}
              alt={selectedImage.file.name}
              className="w-full h-[30rem]  object-contain "
            />
          </div>
        )}

        <div className="mt-4">
          <button
            onClick={handleSub}
            className={` ${logBtn} mt- text-white bg-blue-400 px-8 py-3 -lg hover:bg-blue-600 duration-300 ease-in-out transition w-[8rem] `}
          >
            Submit
          </button>

          <button
            disabled
            type="button"
            className={`${loadBtn} text-white bg-blue-400 -lg hover:bg-blue-600   px-5 py-3 text-center mr-2  items-center w-[8rem] justify-center`}
          >
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mr-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritePosts;
