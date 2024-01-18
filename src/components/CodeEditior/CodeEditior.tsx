'use client';
import React, { useState, useEffect } from 'react'
import EditorNavbar from './EditorNavbar/EditorNavbar'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { SplitPane } from 'react-collapse-pane'
import EditorFooter from './EditorFooter/EditorFooter';
import { problems } from '@/utils/Problems';
import useLocalStorage from '@/hooks/useLocalStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CodeEditior = ({ fetchedProblems, setSuccess }: { fetchedProblems: any, setSuccess: any }) => {
    const problemId = Object.keys(fetchedProblems)[0];
    const problem = fetchedProblems[problemId];
    let [userCode, setUserCode] = useState(problem?.starterCode);
    console.log(fetchedProblems, "dfjkgkdfjkgjk");
    console.log(setSuccess, "dfjkgkdfjkgjk");
    // const handleSubmit = () => {
    //     alert("hi");
    // }
    const bolierPlate = `function twoSum(nums,target){
        // Write your code here
      };`
    const [fontSize, setFontSize] = useLocalStorage("lcc-fontSize", "16px");
    const [settings, setSettings] = useState({
        fontSize: fontSize,
        settingsModalIsOpen: false,
        dropdownIsOpen: false,
    });
    const [activeTestCaseId, setActiveTestCaseId] = useState(0);

    const [lastSegment, setLastSegment] = useState('');
    useEffect(() => {
        const pathSegments = window.location.pathname.split('/');
        const lastSegmentValue = pathSegments[pathSegments.length - 1];
        setLastSegment(lastSegmentValue);
    }, []);

    const handleSubmit = async () => {
        try {
            userCode = userCode?.slice(userCode?.indexOf(problem?.starterFunctionName));
            const cb = new Function(`return ${userCode}`)();
            console.log(cb, "cb");
            const handler = problems[lastSegment as string].handlerFunction;
            console.log(typeof (handler), "handler");

            if (typeof handler == "function") {
                console.log("handler is a function")
                const success = handler(cb);
                if (success) {
                    toast.success("Congrats! All tests passed!", {
                        position: "top-center",
                        autoClose: 3000,
                        theme: "dark",
                    });
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 4000);
                }
            }
        } catch (error: any) {
            console.log(error.message);
            if (
                error.message.startsWith("AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:")
            ) {
                toast.error("Oops! One or more test cases failed", {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "dark",
                });
            } else {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "dark",
                });
            }
        }
    };
    const onChange = (value: string) => {
        setUserCode(value);
        localStorage.setItem(`code-${lastSegment}`, JSON.stringify(value));
    };
    useEffect(() => {
        const code = localStorage.getItem(`code-${lastSegment}`);
        setUserCode(code ? JSON.parse(code) : problem?.starterCode);
    }, [lastSegment, problem?.starterCode]);
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <EditorNavbar settings={settings} setSettings={setSettings} />
            <div className='flex flex-col bg-dark-layer-1 relative h-[90vh]'>
                <SplitPane split="horizontal" minSizes={1} initialSizes={[2, 1.8]} collapse={true}>
                    <div className='w-full overflow-auto'>
                        <CodeMirror
                            value={userCode}
                            extensions={[javascript()]}
                            onChange={onChange}
                            theme={vscodeDark}
                            style={{ fontSize: settings.fontSize }}
                            height='500px'

                        />
                    </div>
                    <div className='w-full px-5 overflow-y-scroll'>
                        <div className='absolute w-1/4 h-1/4 rounded-full bg-gradient-to-r from-stext to-etext blur-3xl opacity-15 '></div>
                        <div className='absolute w-1/2 h-1/2 rounded-full bg-gradient-to-r from-stext to-etext blur-3xl opacity-5 rotate-180 bottom-40 right-64 animate-spin'></div>
                        <div className='absolute w-1/4 h-1/4 rounded-full bg-gradient-to-r from-stext to-etext blur-3xl rotate-180 bottom-0 right-0 opacity-15  '></div>
                        {/* testcase heading */}
                        <div className='flex h-10 items-center space-x-6'>
                            <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                                <div className='text-sm font-medium leading-5 text-white'>Testcases</div>
                                <hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
                            </div>
                        </div>
                        <div className='flex'>
                            {problem?.examples?.map((example: any, index: number) => (
                                <div
                                    className='mr-2 items-start mt-2 '
                                    key={example.id}
                                    onClick={() => setActiveTestCaseId(index)}
                                >
                                    <div className='flex flex-wrap items-center gap-y-4'>
                                        <div
                                            className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
										${activeTestCaseId === index ? "text-white" : "text-gray-500"}
									`}
                                        >
                                            Case {index + 1}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='font-semibold my-4'>
                            <p className='text-sm font-medium mt-4 text-white'>Input:</p>
                            <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2 font-thin'>
                                {problem?.examples[activeTestCaseId]?.inputText}
                            </div>
                            <p className='text-sm font-medium mt-4 text-white'>Output:</p>
                            <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2 font-thin'>
                                {problem?.examples[activeTestCaseId]?.outputText}
                            </div>
                        </div>

                    </div>

                </SplitPane>
                <EditorFooter handleSubmit={handleSubmit} />


            </div>
        </>

    )
}

export default CodeEditior