

import { PercentText } from '../../PercentText'
import { Typography } from '../../Typography'
import './PercentSection.css'

export const PercentSection = ({ bgColor = 'rgb(254 , 246 , 246)' , text , icon , percent}) => {
  return (
    <div className='percent-container' style={{backgroundColor: bgColor }}> 
      <div className='percent-title' >
            <img src={icon} alt="Icon" />
            <Typography fontWeight='600' color='rgb(191 , 114 , 114)'> {text} </Typography>
      </div>
    
      <PercentText percent={percent}/> 
    </div>
  )
}
