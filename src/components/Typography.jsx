


// eslint-disable-next-line react/prop-types
export const Typography = ({children , fontSize = '16px' , color = 'white', fontWeight = '400' , className}) => {

    return (
        <p 
        className={className} 
        style={{
            fontSize,
            color,
            fontWeight,
        }}>{children}</p>
    )
}
