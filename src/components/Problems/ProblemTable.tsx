"use client";
import React, { useState, useEffect } from 'react'
import { problems } from "@/data/problems.json";
import Link from 'next/link';
import { FcCancel } from "react-icons/fc";
import { MdVerified } from "react-icons/md";
import YouTube from "react-youtube";
import { IoClose } from 'react-icons/io5';
import { AiFillYoutube } from 'react-icons/ai';
export default function ProblemTable() {
  const [youtubePlayer, setYoutubePlayer] = useState({
    isOpen: false,
    videoId: "",
  });
  const closeModal = () => {
    setYoutubePlayer({ isOpen: false, videoId: "" });
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  // console.log(problems)
  return (
    <>
      <tbody>
        {problems.map((problem) => {
          const difficulyColor =
            problem?.difficulty === "Easy"
              ? "text-olive bg-olive"
              : problem?.difficulty === "Medium"
                ? "text-dark-yellow bg-dark-yellow"
                : "text-dark-pink bg-dark-pink";
          return (
            <tr className="border-b border-dashed last:border-b-0 text-gray-300" key={problem?.order}>
              <td className="p-3 pl-0 text-start">
                <div className="flex items-center">
                  <div className="flex flex-col justify-start">
                    <Link href={`/problems/${problem?.id}`} className="mb-1 font-thin transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary">{problem?.title} </Link>
                  </div>
                </div>
              </td>
              <td className="py-2 text-start">
                <span className="font-thin text-light-inverse text-md/normal">{problem?.category}</span>
              </td>
              <td className="py-2 text-start">
                <span className={`text-center inline-block rounded-[21px] bg-opacity-[.15] px-3 py-1.5 text-sm font-medium capitalize ${difficulyColor}`}>{problem?.difficulty}</span>
              </td>
              <td className="py-2 text-center">
                <span className={`text-center align-baseline inline-flex px-4 py-2 mr-auto items-center font-thin text-[.95rem] leading-none rounded-lg`}>
                  {/* <FcCancel size={28} /> */}
                  <MdVerified className="text-green-600" size={28} />
                </span>
              </td>
              <td className=" text-start">
                <span className="font-thin text-light-inverse text-md/normal">
                  {problem?.solution ? (
                    <AiFillYoutube
                      fontSize={"28"}
                      className='cursor-pointer hover:text-red-600'
                      onClick={() =>
                        setYoutubePlayer({ isOpen: true, videoId: problem?.solution as string })
                      }
                    />
                  ) : (
                    <p className='text-gray-400'>Coming soon</p>
                  )}
                </span>
              </td>
            </tr>
          )
        }
        )}
      </tbody>
      {youtubePlayer.isOpen && (
        <tfoot className='fixed top-0 left-0 h-screen w-full flex items-center justify-center'>
          <div
            className='bg-black z-10 opacity-70 top-0 left-0 w-full h-[110vh] absolute'
            onClick={closeModal}
          ></div>
          <div className='w-full z-50 h-full px-6 relative max-w-4xl'>
            <div className='w-full h-full flex items-center justify-center relative'>
              <div className='w-full relative'>
                <IoClose
                  fontSize={"35"}
                  className='cursor-pointer absolute -top-16 right-0 text-primary'
                  onClick={closeModal}
                />
                <YouTube
                  videoId={youtubePlayer.videoId}
                  loading='lazy'
                  iframeClassName='w-full min-h-[500px]'
                />
              </div>
            </div>
          </div>
        </tfoot>
      )}
    </>
  )
}