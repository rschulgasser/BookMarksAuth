import React from 'react';




const HomeRow = ({BookMark}) => {
    const {url, count} = BookMark;
    
    return (
        
     <tr>

        <td><a target="_blank" href={url}>{url}</a></td>
        <td>{count}</td>
    </tr>
         
    )
    
}

export default HomeRow ;