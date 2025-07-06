import React from 'react'



const TrendReport = () => {
    return (
        <section className='bg-white'>
            <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8'>
                <h2 className='text-2xl font-bold tracking-tight text-gray-900'>THE TREND REPORT <span className='text-xl font-bold'><sup className='align-super text-xs'>™</sup></span></h2>

                <div className='mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                    <div className='group relative'>
                        <img src="./media/trend-report/cardimg.jpg" alt="Front of men's Basic Tee in black." className='aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto sm:h-fit lg:h-100' />
                    </div>
                    <div className='group relative'>
                        <img src="./media/trend-report/cardimg2.jpg" alt="Front of men's Basic Tee in black." className='aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-100' />
                    </div>
                    <div className='group relative'>
                        <img src="./media/trend-report/cardimg3.jpg" alt="Front of men's Basic Tee in black." className='aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-100' />
                    </div>
                    <div className='group relative'>
                        <img src="./media/trend-report/cardimg4.jpg" alt="Front of men's Basic Tee in black." className='aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-100' />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default TrendReport;