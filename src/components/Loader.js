import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Loader = ({color}) => {
    return (
        <ThreeDots
            height="40"
            width="40"
            radius="9"
            color= {color}
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    )
}

export default Loader