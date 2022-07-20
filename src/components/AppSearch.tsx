import React from "react";

function AppSearch(props: any) {
    let handle_change = props.onChange ?? (() => null);
    let handle_click = props.onClick ?? (() => null);
    return(
        <div>
            <input onChange={handle_change} type='text'></input> <br></br>
            <button onClick={handle_click}>ADD Cionar</button>
        </div>
    )
}

export default AppSearch;