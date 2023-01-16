import React, { useEffect, useState }  from 'react';

function Calculate(){
    
    const[number,setNumber]=useState(0);
    const[number2,setNumber2]=useState(0)
    useEffect(()=>{
        setNumber2(number2+1)
    },[number])

    return(
        <div>
            <div>the number entered : {number+1}</div>
            <button className='Calculate' 
             onClick={()=>setNumber(number+1)}>press me</button>
             <div>the number2 entered : {number2}</div>
             <button onClick={()=>setNumber2(0)}>pesse2</button>

        </div>

    )

}

export default Calculate;
