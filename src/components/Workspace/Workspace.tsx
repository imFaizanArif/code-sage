"use client";
import React, { useState } from 'react'
import ProblemDescription from './ProblemDescription/ProblemDescription'
// import SplitPane from 'react-split-pane-v2'
// import Split from 'react-split'
import { SplitPane } from "react-collapse-pane";
import CodeEditior from '../CodeEditior/CodeEditior';
import { Problem } from '@/utils/Types/problem'
import Confetti from "react-confetti";
import useWindowSize from "@/hooks/useWindowSize";
import { fetchedProblems } from "@/data/problemsDescription";
import Topbar from '../Topbar/Topbar';
// type WorkspaceProps = {
//     problem: Problem;
//     allProblems: typeof fetchedProblems; // Use the same type as fetchedProblems
// };
type ProblemType = {
    id: string;
    title: string;
    problemStatement: string;
    examples: Array<{ id: number; inputText: string; outputText: string; explanation?: string }>;
    constraints: string;
    starterCode: string;
    order: number;
    starterFunctionName: string;
};

const Workspace = ({ props }: any) => {
    // console.log(props.toString(), "145678987654345678");
    const s = props.toString();
    const words = fetchedProblems; // Add the missing declaration of the 'words' variable
    const filterProblems = (): Record<string, ProblemType> => {
        // console.log("Starting filterTwoSumProblems");

        const filteredProblems = Object.keys(words)
            .filter((key) => {
                const titleLowerCase = words[key].id.toLowerCase();
                const includesS = titleLowerCase.includes(s);
                // console.log(`Filtering ${key} - Title: ${titleLowerCase}, Includes ${s}: ${includesS}\n`);
                return includesS;
            })
            .reduce((result, key) => {
                result[key] = words[key];
                return result;
            }, {} as Record<string, ProblemType>);

        // console.log("Filtered Two Sum Peblems:", twoSumProblems);

        return filteredProblems;
    };

    const finalProblems = filterProblems();
    // console.log("Final Problems:", fetchedProblems);

    const { width, height } = useWindowSize();
    const [success, setSuccess] = useState(false);
    const [solved, setSolved] = useState(false);
    return (
        <div>
            <>
                <Topbar />
                {/* {finalProblems} */}
                {success && <Confetti gravity={0.3} tweenDuration={4000} width={width - 1} height={height - 1} />}
                < SplitPane className='!h-[90.1vh] ' split="vertical" minSizes={1} collapse={true} >
                    <ProblemDescription fetchedProblems={finalProblems} />
                    {/* <div>dskjflksdjf</div> */}
                    <CodeEditior fetchedProblems={finalProblems} setSuccess={setSuccess} />

                </SplitPane >
            </>
        </div>
    )
}

export default Workspace