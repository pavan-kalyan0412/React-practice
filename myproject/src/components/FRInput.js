import React from 'react'

const FRInput = React.forwardRef((props, ref)=>{
    return (
        <div>
            <input ref={ref} type="text" />
        </div>
    )
})
export default FRInput;