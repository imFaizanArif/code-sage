// import Link from 'next/link'
import React from 'react'
import ProblemTable from '@/components/Problems/ProblemTable'
const Problems = () => {
    return (
        <div className='bg-background text-background'>
            <div className='container px-5 py-12 mx-auto'>
                <h1 className='text-4xl text-center text-primary'>
                    Problems
                </h1>
                <div className="flex flex-wrap -mx-3 mt-12">
                    <div className="w-full max-w-full px-3 mb-6  mx-auto">
                        <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] glassmorphism m-5">
                            <div className='absolute w-1/4 h-1/4 rounded-full bg-gradient-to-r from-stext to-etext blur-3xl opacity-15 '></div>
                            <div className='absolute w-1/2 h-1/2 rounded-full bg-gradient-to-r from-stext to-etext blur-3xl opacity-5 rotate-180 bottom-40 right-64 animate-spin'></div>
                            <div className='absolute w-1/4 h-1/4 rounded-full bg-gradient-to-r from-stext to-etext blur-3xl rotate-180 bottom-0 right-0 opacity-15  '></div>
                            <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                                <div className="flex-auto block py-8 pt-6 px-9">
                                    <div className="overflow-x-auto">
                                        <table className="w-full my-0 align-middle text-dark border-neutral-200">
                                            <thead className="align-bottom">
                                                <tr className="font-semibold text-xl bg-gradient-to-r from-stext to-etext text-transparent bg-clip-text">
                                                    <th className="pb-3 text-start min-w-[175px]">TITLE</th>
                                                    <th className="pb-3 text-start min-w-[100px]">CATEGORY</th>
                                                    <th className="pb-3 text-start min-w-[100px]">DIFFICULTY</th>
                                                    <th className="pb-3 text-center min-w-[175px]">STATUS</th>
                                                    <th className="pb-3 text-start min-w-[100px]">SOLUTION</th>
                                                </tr>
                                            </thead>
                                            <ProblemTable />
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Problems