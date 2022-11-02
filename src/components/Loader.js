import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Loader = () => {
    return (
        <ThreeDots
            height="40"
            width="40"
            radius="9"
            color="#fff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    )
}

export default Loader