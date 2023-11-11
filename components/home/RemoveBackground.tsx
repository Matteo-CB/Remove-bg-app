"use client";

import React, { useState } from "react";
import imglyRemoveBackground from "@imgly/background-removal";
import { HiDownload } from "react-icons/hi";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";

const RemoveBackground = () => {
  const [blob, setBlob] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="flex items-center lg:items-start lg:justify-start justify-center mt-4">
        {!blob ? (
          <label
            htmlFor="file"
            className="lg:w-[600px] sm:w-[400px] w-[300px] relative h-[250px] flex items-center justify-center  border-2 border-dashed border-neutral-400 cursor-pointer"
          >
            <span className="flex items-center text-neutral-600">
              Uploadez votre image <HiDownload className="w-[20px] ml-2" />
            </span>
          </label>
        ) : (
          <div className="lg:w-[600px] sm:w-[400px] w-[300px] relative h-[250px] flex items-center justify-center  border-2 border-dashed border-neutral-400">
            <RiDeleteBinLine
              className="absolute top-2 right-2 z-10 text-red-500 cursor-pointer"
              onClick={() => {
                // setBlob("");
                // setLoading(false);
                window.location.reload();
              }}
            />
            <Image
              src={blob}
              width={30}
              height={30}
              alt="Image uploadée"
              className="!h-full w-max"
            />
          </div>
        )}
      </div>
      <input
        type="file"
        name="file"
        id="file"
        className="hidden"
        onChange={(e) => {
          setLoading(true);
          const [file]: any = e.target.files;
          setBlob(URL.createObjectURL(file));
          imglyRemoveBackground(file).then((blob: Blob) => {
            setBlob(URL.createObjectURL(blob));
            setTimeout(() => {
              setLoading(false);
            }, 1000);
          });
        }}
      />
      <div className="flex flex-col-reverse items-center lg:flex-row justify-start gap-4 mt-4">
        {blob && !loading ? (
          <a
            href={blob}
            download="image.png"
            className="bg-sky-500 shadow-lg hover:shadow-2xl hover:bg-sky-600 text-neutral-100 px-4 py-2 rounded hover:scale-105 ease-in-out transition-all"
          >
            Télécharger
          </a>
        ) : (
          <p className="select-none bg-neutral-500 cursor-not-allowed text-neutral-100 px-4 py-2 rounded">
            Télécharger
          </p>
        )}
        {!loading ? (
          <label className="flex items-center p-2 px-4 py-2 rounded hover:scale-105 ease-in-out transition-all border shadow-lg hover:shadow-2xl border-neutral-950">
            Choisissez une image <HiDownload className="w-[20px] ml-2" />
            <input
              type="file"
              name="file"
              className="hidden"
              onChange={(e) => {
                setLoading(true);
                const [file]: any = e.target.files;
                setBlob(URL.createObjectURL(file));
                imglyRemoveBackground(file).then((blob: Blob) => {
                  setBlob(URL.createObjectURL(blob));
                  setTimeout(() => {
                    setLoading(false);
                  }, 1000);
                });
              }}
            />
          </label>
        ) : (
          <p className="flex items-center select-none  cursor-not-allowed p-2 px-4 py-2 rounded border border-neutral-950">
            Choisissez une image <HiDownload className="w-[20px] ml-2" />
          </p>
        )}
      </div>
    </>
  );
};

export default RemoveBackground;
