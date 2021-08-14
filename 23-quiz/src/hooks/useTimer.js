import { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
const useTimer = () => {
    const initialTime = 5
    const [timer, setTimer] = useState(initialTime)
    const { nextQuestion } = useGlobalContext()

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setTimer(prevState => prevState - 1)
        }, 1000);
        if (timer === 0) {
            clearTimeout(timeOut)
            setTimer(initialTime)
            nextQuestion()
        }
        return () => clearTimeout(timeOut)
    }, [timer])


    return [timer, setTimer]
}

export default useTimer
