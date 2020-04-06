import React from 'react';
const Scroll = (props) => {
    return(
        <div style = {{overflowY: 'scroll', border: '1px solid Black',height: '1000px' }}>
            {props.children}
        </div>
    )
};
export default Scroll;