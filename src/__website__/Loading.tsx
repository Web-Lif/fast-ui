import React, { useEffect, useRef } from 'react'
import LoadingBar, { LoadingBarRef } from '@weblif/react-top-loading-bar'

const Loading = () => {
    const ref = useRef<LoadingBarRef>(null)

    useEffect(() => {
        ref.current?.continuousStart()
        return () => {
            ref.current?.complete()
        }
    }, [])
    return (
        <>
            <LoadingBar ref={ref} />
            <div
                style={{
                    width: '100%',
                    height: '100vh',
                }}
            />
        </>
    )
}

export default Loading
