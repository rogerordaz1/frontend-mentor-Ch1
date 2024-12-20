import { data } from "../../data/data"
import { Typography } from "../Typography"
import { PercentSection } from "./PercentSection/PercentSection"
import './SummaryCard.css'


export const SummaryCard = () => {
  return (
    <div className="summary-content">

      <Typography className='title-summary' color="black" fontSize="24px" fontWeight="700"> Summary </Typography>

     <div className="summary-litte-cards">
          {
          data.map( ({score , category , icon} , index) => {
            return <PercentSection
            percent={score}
            key= {index}
            text={category} 
            icon={ icon }
        />
          } )
        }
      </div>

      <button className="btn"> Continue </button>
      
    </div>
  )
}
