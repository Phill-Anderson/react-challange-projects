import logo from './logo.svg';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react';
import Modal from './components/Modal';
function App() {
  const [modalOpen, setModalOpen] = React.useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
  return (
    <div className="App">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch modal
      </motion.button>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true} // animation before entering component is rendered
        onExitComplete={() => null} // fires when all exiting nodes have completed animating out
      >
        {modalOpen &&
          <Modal modalOpen={modalOpen} handleClose={close} text="энэ бол анимейшн модал">
            <h4>энэ бол children</h4>
          </Modal>}
      </AnimatePresence>

    </div>
  );
}

export default App;
