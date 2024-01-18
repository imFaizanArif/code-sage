import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { useRouter } from 'next/navigation';
import { fetchedProblems } from "@/data/problemsDescription";
const Topbar = () => {
    const router = useRouter();
    const problemId = Object.keys(fetchedProblems);

    const [lastSegment, setLastSegment] = useState('');
    useEffect(() => {
        const pathSegments = window.location.pathname.split('/');
        const lastSegmentValue = pathSegments[pathSegments.length - 1];
        setLastSegment(lastSegmentValue);
    }, []);

    const moveToProblem = (direction: "forward" | "backward") => {
        const currentProblemId = lastSegment as string;
        const currentIndex = problemId.indexOf(currentProblemId);

        if (direction === "forward" && currentIndex < problemId.length - 1) {
            const nextProblemId = problemId[currentIndex + 1];
            router.push(`/problems/${nextProblemId}`);
        } else if (direction === "backward" && currentIndex > 0) {
            const prevProblemId = problemId[currentIndex - 1];
            router.push(`/problems/${prevProblemId}`);
        }
    }

    return (
        <div className="absolute z-50 top-4 left-[35rem]">

            <div className='flex items-center gap-4 flex-1 justify-center'>
                <div
                    className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
                    onClick={() => moveToProblem("backward")}
                >
                    <FaChevronLeft className={`text-primary`} />
                </div>
                <Link
                    href='/problems'
                    className='flex items-center gap-2 font-medium max-w-[170px] text-primary cursor-pointer'
                >
                    <div>
                        <BsList className={`text-primary`} size={23} />
                    </div>
                    <p className={`text-primary`}>Problem List</p>
                </Link>
                <div
                    className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
                    onClick={() => moveToProblem("forward")}
                >
                    <FaChevronRight className={`text-primary`} />
                </div>
            </div>
        </div>

    );
};
export default Topbar;