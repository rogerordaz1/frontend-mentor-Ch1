
import { Typography } from './Typography'

// eslint-disable-next-line react/prop-types
export const PercentText = ({ percent }) => {
    return (
        <Typography color='grey' >
            <span style={{
                color: 'rgb( 25 , 3, 21 )', fontWeight: '600'
            }}> {percent} </span> / 100
        </Typography>
    )
}
