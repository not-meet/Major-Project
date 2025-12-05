"use client"
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import Navbar from "@/components/NavBar";

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex">
        {/* Left Side - White Background */}
        <div className="w-1/2 bg-white flex items-center justify-center p-12">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Upload the{' '}
              <span className="text-teal-500 font-bold">CSV file</span> of your
              brand's data for{' '}
              <span className="text-teal-500 font-bold">insights!</span>
            </h1>
            <p className="mt-6 text-gray-600 text-xl font-semibold">
              Simply drag and drop your data file, and let us analyze it for you.
            </p>
          </div>
        </div>

        {/* Right Side - Teal/Green Background */}
        <div className="w-1/2 bg-linear-to-b from-teal-400 to-teal-600 flex items-center justify-center p-12">
          <div className="w-full max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Upload Here!
            </h2>

            {/* File Upload Component */}
            <div className="w-full max-w-4xl mx-auto min-h-96 border-2 border-dashed bg-white border-white/30 rounded-lg backdrop-blur-sm">
              <FileUpload onChange={handleFileUpload} />
            </div>

            {/* Optional: Show uploaded files */}
            {files.length > 0 && (
              <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-white font-semibold mb-2">Uploaded Files:</p>
                <ul className="space-y-1">
                  {files.map((file, index) => (
                    <li key={index} className="text-white/90 text-sm">
                      {file.name} ({(file.size / 1024).toFixed(2)} KB)
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
