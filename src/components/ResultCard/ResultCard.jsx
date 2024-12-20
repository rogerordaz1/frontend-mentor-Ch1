import { Typography } from "../Typography";
import { PercentCircle } from "./PercentCircle";

import "./ResultCard.css";

export const ResultCard = () => {
  return (
    <div className="result-card">
      <Typography fontSize="24px" fontWeight="700" color="rgb(194 ,183 ,255)">
        Your Result
      </Typography>

      <PercentCircle />

      <div className="titles">
        <Typography fontSize="24px" fontWeight="500" color="rgb(248, 248, 249)">
          Great
        </Typography>
        <Typography
          fontSize="16px"
          fontWeight="200"
          color="rgba(248, 248, 249, 0.64)"
        >
          You scored higher than 65% of the people who have taken these tests.
        </Typography>
      </div>
    </div>
  );
};
