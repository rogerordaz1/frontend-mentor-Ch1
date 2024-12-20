import { Typography } from "../Typography";
import './PercentCircle.css';

export const PercentCircle = () => {

    
  return (
    <div className="circle">
      <Typography fontSize="64px" fontWeight="900" color="rgb(248, 248, 249)">
        76
      </Typography>
      <Typography
        fontSize="16px"
        fontWeight="900"
        color="rgba(248, 248, 249, 0.64)"
      >
        of 100
      </Typography>
    </div>
  );
};
