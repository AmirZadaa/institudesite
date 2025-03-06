import React from 'react'

const ModuleOverview = ({summary}: any) => {
    return (
        <div className='bg-primary-500'>
            <div className='container text-background text-center padding-x space-y-5 max-sm:space-y-2 py-20 max-xl:py-14 max-sm:py-6'>
                <h1 className='text-4xl font-bold max-sm:text-2xl'>What You Will Learn in This Module?</h1>
                <p className='text-muted max-sm:text-sm'>{summary}</p>
            </div>
        </div>
    )
}

export default ModuleOverview
