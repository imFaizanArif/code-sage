import React from 'react'
import { AiFillDislike, AiFillLike, AiFillStar, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { TiStarOutline } from 'react-icons/ti'
import { problems } from '@/data/problems.json'
import { BsCheck2Circle } from 'react-icons/bs'
// import { Problem } from '@/utils/Types/problem'

const ProblemDescription = ({ fetchedProblems }: { fetchedProblems: any }) => {
    const problemId = Object.keys(fetchedProblems)[0];
    const problemData = fetchedProblems[problemId];
    // console.log(problemData, "dfjkgkdfjkgjk");
    // console.log(fetchedProblems, "dfjkgkdfjkgjk");
    return (
        <div className='bg-background'>
            <div className='absolute w-1/4 h-1/4 rounded-full bg-gradient-to-r from-stext to-etext blur-3xl opacity-15 '></div>
            <div className='absolute w-1/2 h-1/2 rounded-full bg-gradient-to-r from-stext to-etext blur-3xl opacity-5 rotate-180 bottom-40 right-64 animate-spin'></div>
            <div className='absolute w-1/4 h-1/4 rounded-full bg-gradient-to-r from-stext to-etext blur-3xl rotate-180 bottom-0 right-0 opacity-15  '></div>
            {/* TAB */}
            <div className='relative z-50'>
                <div className='flex h-11 w-full items-center pt-2 bg-dark-layer-1 text-white overflow-x-hidden'>
                    <div className={"bg-dark-layer-2 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"}>
                        Description
                    </div>
                </div>

                <div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
                    <div className='px-5'>
                        {/* Problem heading */}
                        <div className='w-full'>
                            <div className='flex space-x-4'>
                                <div className='flex-1 mr-2 text-lg text-white font-medium'>{problemData?.title}</div>
                            </div>
                            <div className='flex items-center mt-3'>
                                <div
                                    className={`${problemData?.difficulty == 'easy' ? "text-olive bg-olive" : problemData?.difficulty == 'medium' ? "text-dark-yellow bg-dark-yellow" : "text-dark-pink bg-dark-pink"} inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
                                >
                                    {problemData?.difficulty}
                                </div>
                                {/* <div className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s'>
                                    <BsCheck2Circle />
                                </div> */}
                            </div>

                            {/* Problem Statement(paragraphs) */}
                            <div className='text-white text-sm'>
                                <div dangerouslySetInnerHTML={{ __html: problemData?.problemStatement }} />
                            </div>

                            {/* Examples */}
                            <div className='mt-4'>
                                {problemData?.examples?.map((example: any, index: number) => (
                                    <div key={example.id}>
                                        <p className='font-medium text-white '>Example {index + 1}: </p>
                                        {example.img && <img src={example.img} alt='' className='mt-3' />}
                                        <div className='example-card'>
                                            <pre>
                                                <strong className='text-white'>Input: </strong> {example.inputText}
                                                <br />
                                                <strong>Output:</strong>
                                                {example.outputText} <br />
                                                {example.explanation && (
                                                    <>
                                                        <strong>Explanation:</strong> {example.explanation}
                                                    </>
                                                )}
                                            </pre>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Constraints */}
                            <div className='my-5'>
                                <div className='text-white text-sm font-medium'>Constraints:</div>
                                <ul className='text-white ml-5 list-disc'>
                                    <div dangerouslySetInnerHTML={{ __html: problemData?.constraints }} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProblemDescription