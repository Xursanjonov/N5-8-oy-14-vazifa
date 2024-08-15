import React, { memo } from 'react'
import { Card } from 'antd';

const ProductsWrapper = () => {

    return (
        <div className='w-full my-12 mx-auto flex flex-col gap-14'>
            <h1 className='text-[48px] text-center font-extrabold'>NEW ARRIVALS</h1>
            <div className="max-w-[1240px] w-full mx-auto flex flex-wrap items-center justify-start gap-2">
                <Card hoverable className='w-[240px] border-0'
                    cover={<img className='w-[295px] h-[298px] mx-auto' alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} >
                    <div className="flex flex-col gap-3">
                        <h5>Title</h5>
                        <p>Rating <span>4.5/5</span></p>
                        $120
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default memo(ProductsWrapper)