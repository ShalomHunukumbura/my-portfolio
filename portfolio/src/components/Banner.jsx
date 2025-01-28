import { useState, useEffect } from "react";
import {motion, AnimatePresence} from "framer-motion";  

export const Banner = () => {
    const toRotate = ["Web Developer", "React Developer", "MERN Stack Developer"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % toRotate.length);
        }, 2000);

        return () => clearInterval(interval);
    },[toRotate])


    return (
        <div id="home" className="h-screen flex flex-col  justify-center items-center">
            <h1 className="text-white text-4xl font-bold text-center">SHALOM HUNUKUMBURA</h1>
            <div className="text-white mt-5 h-8">
                <AnimatePresence mode="wait">
                    <motion.h3
                        key={toRotate[index]}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="text-lg font-medium"
                    >
                        {toRotate[index]}
                     </motion.h3>   
                </AnimatePresence>

            </div>
        </div>
    );
};
