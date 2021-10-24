import { useEffect, useState, useRef } from 'react'
import useDeepCompareEffect from './useDeepCompareEffect'
const DeepCompareComponent = () => {
    const [age, setAge] = useState(0)
    const [otherCount, setOtherCount] = useState(0)
    const useEffectCountRef = useRef()
    const useDeepCompareEffectCountRef = useRef()

    const person = { age: age, name: 'phill' }

    useEffect(() => {
        useEffectCountRef.current.textContent = parseInt(useEffectCountRef.current.textContent) + 1
    }, [person])

    useDeepCompareEffect(() => {
        useDeepCompareEffectCountRef.current.textContent = parseInt(useDeepCompareEffectCountRef.current.textContent) + 1
    }, [person])
    return (
        <>
            <div>
                useEffect: <span ref={useEffectCountRef}>0</span>
            </div>

            <div>
                useDeepCompareEffect: <span ref={useDeepCompareEffectCountRef}>0</span>
            </div>

            <div>
                other count: {otherCount}
            </div>

            <div>
                person object - ийн өөрчлөлт: {JSON.stringify(person)}
            </div>

            <button onClick={() => setAge(currentAge => currentAge + 1)}>Increment age</button>
            <button onClick={() => setOtherCount(currentAge => currentAge + 1)}>Increment other count</button>
        </>
    )
}

export default DeepCompareComponent
