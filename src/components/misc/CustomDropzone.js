"use client";
import React, { useEffect, useState } from "react";
import { Trash, X } from "lucide-react";

const CustomDropzone = ({ onFileUpload, onFileDelete }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFileURL, setUploadedFileURL] = useState(null);
  const [error, setError] = useState(null);

  // Simulate file upload progress
  const simulateFileUpload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsLoading(false);
        setUploadedFileURL("dummy-url");
      }
    }, 200);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    handleFileSelection(file);
  };

  const handleFileSelection = (file) => {
    if (file) {
      setSelectedFile(file);
      setIsLoading(true);
      setUploadProgress(0);
      simulateFileUpload();
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    handleFileSelection(file);
    onFileUpload(file);
  };

  const handleDelete = () => {
    setSelectedFile(null);
    setUploadProgress(0);
    setUploadedFileURL(null);
    setIsLoading(false);
    onFileDelete(selectedFile);
  };

  useEffect(() => {
    console.log(selectedFile);
  }, [selectedFile]);

  return (
    <div className="w-full">
      {/* Dropzone */}
      <div
        className={`border-2 border-dashed rounded-lg p-6 mb-4
          ${
            dragActive
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-white"
          }
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label className="flex flex-col items-center justify-center cursor-pointer">
          <div className="mb-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4V16M12 4L8 8M12 4L16 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 16V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-600">
            Drag & Drop files here or click to select files
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Supports .pdf, .docx, .doc, .txt
          </p>
          <input
            type="file"
            className="hidden w-full h-full"
            onChange={handleFileInputChange}
            accept=".pdf,.doc,.docx,.txt"
            max={1}
          />
        </label>
      </div>

      {/* Upload Progress */}
      {selectedFile && (
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm truncate flex-grow text-black">
              {selectedFile.name}
            </span>
            <button
              onClick={handleDelete}
              className="text-gray-500 hover:text-gray-700 ml-2"
            >
              <Trash size={16} className="hover:text-red-500" />
            </button>
          </div>
          {isLoading && (
            <div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-blue-500 h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <p className="text-xs text-black mt-1">
                {uploadProgress < 100
                  ? `${Math.ceil((100 - uploadProgress) / 10)} seconds left`
                  : "Upload complete"}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomDropzone;
