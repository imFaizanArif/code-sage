// getStaticPropsHelper.ts
import { GetStaticPaths, GetStaticProps } from 'next';
import { problems } from '../utils/Problems';
import { Problem } from '../utils/Types/problem';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Object.keys(problems).map((key) => ({
        params: { pid: key },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const pid = params?.pid as string;
    const problem = problems[pid];

    if (!problem) {
        return {
            notFound: true,
        };
    }

    problem.handlerFunction = problem.handlerFunction.toString();
    console.log(problem, 'problemof my');

    return {
        props: {
            problem,
        },
    };
};

export const fetchedProblems = problems; // Export the fetched data separately
