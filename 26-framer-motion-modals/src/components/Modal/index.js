import React from 'react'
import { motion } from 'framer-motion'
import Backdrop from '../Backdrop'

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 10,
            stifness: 500,
            duration: 0.1,
        }
    },
    exit: {
        y: "100vh",
        opacity: 0,
    }
}
const flip = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        rotateX: 360,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 10,
            //stifness: 500,
            duration: 0.6,
        }
    },
    exit: {
        scale: 0,
        opacity: 0,
        rotateX: 180,
        transition: {
            type: "spring",
            damping: 10,
            duration: 0.3
        }
    }
}
const Modal = ({ handleClose, text, modalOpen, children }) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal orange-gradient"
                variants={flip}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {/* <p>{text}</p>
                <button onClick={handleClose}>Close</button> */}
                {children}
            </motion.div>
        </Backdrop>
    )
}

export default Modal
