import Workspace from '@/components/Workspace/Workspace'
import React from 'react'

const Problem = ({ params }: any) => {
    return (
        <div className='h-[88vh]'>
            {/* {params.slug} */}
            <Workspace props={[params.slug]} />
        </div>

    )
}

export default Problem