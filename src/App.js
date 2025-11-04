import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
// import { FiArrowUp } from 'react-icons/fi'; // Importing the back icon
import Cube from "./components/Cube";
import Front from "./components/Front";
import Back from "./components/Back";
import Right from "./components/Right";
import Left from "./components/Left";
import Top from "./components/Top";
import Bottom from "./components/Bottom";
import Sample from "./components/Sample";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Background from "three/src/renderers/common/Background.js";

const App = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [password, setPassword] = useState(new Array(6).fill(""));
  const [sequenceChecked, setSequenceChecked] = useState(false);
  const navigate = useNavigate();
  const sequence = "142653";
  const [buttonLabel, setButtonLabel] = useState("read again");

  const goTo = (page) => {
    navigate(`/${page}`);
  };

  const loadCanvas = () => {
    setShowCanvas(true);
  };

  const goBack = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    if (buttonLabel === "Exit") {
      setPassword(new Array(6).fill(""));
      setShowPopup(false);
      setShowCanvas(false);
      console.log("hello");
    } else {
      setPassword(new Array(6).fill(""));
      setShowPopup(false);
      // alert("Wrong password");
      console.log("hello");
    }
  };

  const closePopup = () => {
    setPassword(new Array(6).fill(""));
    setShowPopup(false);
    console.log("hello");
  };

  const handleExit = () => {
    setShowCanvas(false);
    setShowPopup(false);
  };

  const handleChange = (e, index) => {
    if (isNaN(e.target.value)) return false;
    setPassword([
      ...password.map((data, indx) => (indx === index ? e.target.value : data)),
    ]);
    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  const handleCheckSequence = () => {
    if (password.join("") === sequence) {
      setSequenceChecked(true);
      setButtonLabel("Exit");
      alert("Correct sequence!");
    } else {
      setSequenceChecked(false);
      setButtonLabel("read again");
      alert("Incorrect sequence. Try again.");
    }
  };

  const variants = {
    zoomIn: {
      hidden: { scale: 0.8, opacity: 0, background: "black" },
      visible: {
        scale: 1,
        opacity: 1,
        background: "black",
        transition: { duration: 1 },
      },
      exit: {
        scale: 0.8,
        opacity: 0,
        background: "black",
        transition: { duration: 1 },
      },
    },
    zoomOut: {
      hidden: { scale: 1.2, opacity: 0 },
      visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
      exit: { scale: 1.2, opacity: 0, transition: { duration: 1 } },
    },
    swipeRight: {
      hidden: { x: "100%", opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 1 } },
      exit: { x: "100%", opacity: 0, transition: { duration: 1 } },
    },
    swipeLeft: {
      hidden: { x: "-100%", opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 1 } },
      exit: { x: "-100%", opacity: 0, transition: { duration: 1 } },
    },
    swipeUp: {
      hidden: { y: "-100%", opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 1 } },
      exit: { y: "-100%", opacity: 0, transition: { duration: 1 } },
    },
    swipeDown: {
      hidden: { y: "100%", opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 1 } },
      exit: { y: "100%", opacity: 0, transition: { duration: 1 } },
    },
  };

  return (
    <>
      <div className="bg-black">
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
              {!showCanvas && (
                <>
                  <motion.h1
                    className="text-6xl font-bold text-center mb-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    Welcome to the Game
                  </motion.h1>
                  <motion.h3
                    className="mb-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                  >
                    Click here
                  </motion.h3>
                  <motion.button
                    onClick={loadCanvas}
                    className="text-white font-bold rounded text-2xl transition duration-31ease-in-out flex justify-center items-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img
                      src="https://miro.medium.com/v2/resize:fit:1318/0*FEujJH65FdNLAA7m.jpg"
                      alt="Start game"
                      className="w-52 object-contain rounded-lg"
                    />
                  </motion.button>
                </>
              )}

              <AnimatePresence>
                {showCanvas && (
                  <motion.div
                    className="flex min-h-screen bg-black text-white"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={variants.zoomIn}
                  >
                    {/* Left Section */}
                    <div className="w-1/3 flex flex-col items-start justify-center p-8 space-y-8">
                      <button
                        onClick={goBack}
                        className="text-white font-bold rounded flex items-center transition duration-31ease-in-out"
                      >
                        <img
                          src="https://indianmemetemplates.com/wp-content/uploads/ye-fas-gaya.jpg"
                          alt="Popup Image"
                          className="w-48 rounded-3xl"
                        />
                      </button>
                      <p className="text-lg text-gray-200 leading-relaxed bg-black bg-opacity-50 p-4 rounded-md shadow-md">
                        The game is simple yet intriguing. Below is a cube with
                        six faces, each hiding a unique story. Click on any face
                        to uncover its story. Within each story lies a hidden
                        number, and the position for that number in a six-digit
                        code is also concealed in the narrative. Solve the
                        puzzle, find all six numbers, and assemble the code in
                        the correct order to unlock the exit. Will you succeed?
                      </p>
                    </div>

                    {/* Right Section */}
                    <div className="w-2/3">
                      <Canvas
                        style={{
                          width: "100%",
                          height: "100vh",
                          backgroundColor: "black",
                        }}
                      >
                        <ambientLight intensity={1} />
                        <Cube goTo={goTo} />
                        <OrbitControls minDistance={5} maxDistance={5} />
                      </Canvas>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
                  <div className="text-black p-6 rounded-lg shadow-lg flex flex-col items-center">
                    {/* Image Popup */}
                    <img
                      src="https://akamaividz2.zee5.com/image/upload/w_1755,h_987,c_scale,f_webp,q_auto:eco/resources/0-0-manual-6armf044r0i0/list/1170x658withlogo_193936317.jpg"
                      alt="Popup Image"
                      className="w-80 mb-4"
                    />
                    <h1 className="text-white">
                      here you need to enter the sequence of the story as the
                      code, warna nikal nahi paoge 😏{" "}
                    </h1>
                    <h1 className="text-white"> sequence bata kya hai ??</h1>

                    <div className="flex flex-wrap gap-4 p-4 rounded-md shadow-md">
                      {password.map((data, i) => (
                        <input
                          key={i} // Add a unique key for each input
                          className="border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-10 text-center"
                          type="text"
                          value={data}
                          maxLength={1} // Ensure only one character can be entered
                          onChange={(e) => handleChange(e, i)} // Correct `onChange` handler
                        />
                      ))}
                    </div>

                    {/* Button to check the sequence */}
                    <button
                      onClick={handleCheckSequence}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Check Sequence
                    </button>
                    {/* Button to close the popup */}
                    <button
                      onClick={
                        buttonLabel === "read again"
                          ? handlePopupClose
                          : handleExit
                      }
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                      // disabled={!sequenceChecked}
                    >
                      {buttonLabel}
                    </button>
                  </div>
                </div>
              )}
            </div>
          }
        />

        <Route
          path="/1"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants.zoomIn}
            >
              <Front />
            </motion.div>
          }
        />
        <Route
          path="/2"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants.zoomOut}
            >
              <Back />
            </motion.div>
          }
        />
        <Route
          path="/3"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants.swipeRight}
            >
              <Right />
            </motion.div>
          }
        />
        <Route
          path="/4"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants.swipeLeft}
            >
              <Left />
            </motion.div>
          }
        />
        <Route
          path="/5"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants.swipeUp}
            >
              <Top />
            </motion.div>
          }
        />
        <Route
          path="/6"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants.swipeDown}
            >
              <Bottom />
            </motion.div>
          }
        />
      </Routes>
      </div>
    </>
  );
};

export default App;
