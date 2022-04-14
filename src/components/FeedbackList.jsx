import FeedbackItem from "./FeedbackItem"
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";
import {motion, AnimatePresence} from 'framer-motion'

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)
   
    if(!feedback || feedback.length === 0) {
        return 'No Feeback Yet';
    }

    return (  
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map(item => (
                <motion.div
                    key={item.id}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    <FeedbackItem key={item.id} item={item}/>
                </motion.div>                  
            ))}
            </AnimatePresence>
        </div>
    )

    //BELOW IS WITHOUT THE FRAMER-MOTION
    // return (  
    //     <div className="feedback-list">
    //         {feedback.map(item => (
    //             <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
    //         ))}
    //     </div>)
}

export default FeedbackList