import "./AddFilter.css"

import React, {useState} from "react"

export default function(props){
    const {setModal, filts, setFilts} = props.children
    const [ffilts, serFilter] = useState({tipeFilter: 'pilot', filter:''})

    const valueInput=(e)=>{
        serFilter({...ffilts, ['filter'] : e.target.value })
        console.log(ffilts);
    }

    const formPilo = <input onChange={valueInput} placeholder = "Nombre del Piloto"type="text"/>        
    

    const formDuration = 
    <select>
        <option value="">Alta</option>
        <option value="">Media</option>
        <option value="">Baja</option>
    </select>

    const forms = {
        pilot : formPilo,
        duration : formDuration
    }

    const optionSelected=(e)=>{
        const options = {
            0 : "pilot",
            1 : "duration"
        }
        setSelecter(options[e.target.selectedIndex])
        serFilter({...ffilts, ['tipeFilter'] : selected })
        console.log(selected);
        console.log(ffilts);
        
    }

    const [selected, setSelecter] = useState('pilot')

    const filt = ()=>{
        const f = ffilts.tipeFilter
        const ff = ffilts.filter
        setFilts([...filts, {pilot : ff}])
        setModal(false)
    }
    return(
        <div className="AddFilterModal">

            <div className="content">

                <div>
                    <div className="body">
                        <select name="" id="optionsFilter" onChange={optionSelected}>
                            <option value="pilot">Piloto</option>
                            <option value="duration">duración</option>
                        </select>
                        {forms[selected]}
                    </div>
                    
                    <div className="butons">
                        <button className="cancel" onClick={()=>setModal()}>Cancelar</button>
                        <button className="add" onClick={()=>filt()}>Agregar</button>
                    </div>
                </div>
                
                </div>
            
        </div>
    )
}