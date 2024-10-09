"use client";
import React, { useState } from "react";
import { FaCloudUploadAlt, FaTrash } from "react-icons/fa";
// import { _handleFileUpload, _handleFileDelete } from "@/models/storage";
import { LoadingSpinner } from "../ui/loading-spinner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Image from "next/image";
import { Upload } from "@/assets/icons";

const CustomDropzone = ({ onFileUpload, onFileDelete }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFileURL, setUploadedFileURL] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [error, setError] = useState(null);
  const [actionType, setActionType] = useState(null); // 'upload' or 'delete'

  const resetState = () => {
    setSelectedFile(null);
    setUploadedFileURL(null);
    setUploadedFileName(null);
    setError(null);
  };

  const handleFileChange = (e) => {
    if (uploadedFileURL) {
      setError("Please delete the existing file before uploading a new one.");
      return;
    }

    const file = e.target.files[0];
    if (isValidFileType(file)) {
      setSelectedFile(file);
      setError(null);
    } else {
      setError("Only PDF or DOC files are allowed.");
    }
  };

  const isValidFileType = (file) => {
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    return file && validTypes.includes(file.type);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if (!uploadedFileURL) {
      setDragActive(true);
    }
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    if (uploadedFileURL) {
      setError("Please delete the existing file before uploading a new one.");
      return;
    }

    const file = e.dataTransfer.files[0];
    if (isValidFileType(file)) {
      setSelectedFile(file);
      setError(null);
    } else {
      setError("Only PDF or DOC files are allowed.");
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError("Please select a file to upload.");
      return;
    }

    setIsLoading(true);
    setActionType("upload");
    setError(null);

    try {
      const downloadURL = await _handleFileUpload(selectedFile);
      setUploadedFileURL(downloadURL);
      setUploadedFileName(selectedFile.name);
      setSelectedFile(null);
      // onFileUpload(downloadURL);
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("Failed to upload file. Please try again.");
    } finally {
      setIsLoading(false);
      setActionType(null);
    }
  };

  const handleFileDelete = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setActionType("delete");
    setError(null);

    // try {
    //   await _handleFileDelete(uploadedFileURL);
    //   resetState();
    //   onFileDelete();
    // } catch (error) {
    //   console.error("Error deleting file:", error);
    //   setError("Failed to delete file. Please try again.");
    // } finally {
    //   setIsLoading(false);
    //   setActionType(null);
    // }
  };

  return (
    <div className="mb-2 flex flex-col  gap-2 w-full">
      {error && (
        <Alert variant="destructive" className="mb-2 w-full max-w-md">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <div
        className={`flex h-40 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed transition-all ${
          dragActive
            ? "border-blue-500 bg-blue-50"
            : uploadedFileURL
            ? "border-green-500 bg-green-50"
            : "border-gray-400 bg-white"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {uploadedFileURL ? (
          <div className="flex flex-col items-center gap-2 p-4 text-center">
            <p className="text-green-600">File uploaded successfully!</p>
            <p className="text-sm text-gray-600">{uploadedFileName}</p>
            <button
              onClick={handleFileDelete}
              disabled={isLoading}
              className={`mt-2 flex items-center gap-2 rounded px-4 py-2 text-white transition-colors ${
                isLoading
                  ? "cursor-not-allowed bg-gray-400"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              {isLoading && actionType === "delete" ? (
                <LoadingSpinner className="h-4 w-4" />
              ) : (
                <FaTrash size={16} />
              )}
              {isLoading && actionType === "delete"
                ? "Deleting..."
                : "Delete File"}
            </button>
          </div>
        ) : (
          <label
            htmlFor="file-upload"
            className="flex cursor-pointer flex-col items-center p-4 text-center"
          >
            {isLoading && actionType === "upload" ? (
              <div className="flex flex-col items-center gap-2">
                <LoadingSpinner />
                <p>Uploading...</p>
              </div>
            ) : (
              <span className="mb-2 text-gray-700">
                {selectedFile ? (
                  <div className="flex flex-col items-center gap-2">
                    <p>{`Selected: ${selectedFile.name}`}</p>
                    <button
                      onClick={handleUpload}
                      disabled={isLoading}
                      className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-400"
                    >
                      Upload File
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <Image src={Upload} alt="icon" />
                    <p className="text-gray-900 text-center text-xs">
                      Drag & Drop or Click to Select file
                    </p>
                    <p className="text-gray-500 text-center text-xs">
                      Supports .pdf, .docx, .doc, .txt
                    </p>
                  </div>
                )}
              </span>
            )}
            <input
              id="file-upload"
              type="file"
              accept=".pdf, .doc, .docx"
              onChange={handleFileChange}
              className="hidden"
              disabled={uploadedFileURL !== null || isLoading}
            />
          </label>
        )}
      </div>
    </div>
  );
};

export default CustomDropzone;
