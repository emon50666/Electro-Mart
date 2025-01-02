import { SpinnerRoundFilled } from "spinners-react";

const Skeleton = () => {
  return (
     <div className="flex justify-center items-center h-[350px] ">
         <SpinnerRoundFilled
           size={100}         // Size of the spinner
           thickness={100}   // Thickness of the spinner
                // Speed of rotation
           color="#4f46e5"   // Primary color of the spinner
           secondaryColor="rgba(0, 0, 0, 0.1)" // Secondary color
         />
       </div>
  );
};

export default Skeleton;
