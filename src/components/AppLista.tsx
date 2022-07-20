import React from 'react'

function AppLista(props: any){
    return(
        <div>
            <input type="checkbox" name="BRUH" id=""/>
            <label htmlFor="BRUH"> {props.name}</label>
        </div>
    )
}

export default AppLista