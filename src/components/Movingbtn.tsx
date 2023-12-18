import { useState, useEffect } from "react";
import { FaWalkieTalkie } from "react-icons/fa6";
function Movingbtn() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);
  useEffect(() => {
    const moveButton = () => {
      // Adjust the range (2 pixels in this example)
      const newPosition = position + 2 * direction;

      setPosition(newPosition);

      // Change direction when reaching the top or bottom of the range
      if (newPosition <= -5 || newPosition >= 5) {
        setDirection((prevDirection) => prevDirection * -1);
      }
    };

    // Move the button every 100 milliseconds (adjust the interval as needed)
    const intervalId = setInterval(moveButton, 100);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [position, direction]);

  return (
    <button className="movingButton" style={{ top: position }}>
      <FaWalkieTalkie />
    </button>
  );
}

export default Movingbtn;
