import './Tab.css'
import AddFilerModal from '../AddFilter'
import React,{useState} from 'react'

const j = [
    {namePilot : "Carlo ", duration: "Alta", destiny : "Hon Kong", ability : "Manizales", travelDate : '2022-06-21'},
    {namePilot : "Andrea ", duration: "Media", destiny : "New York", ability : "Manizales", travelDate : "2022-07-11"},
    {namePilot : "Laura ", duration: "Baja", destiny : "Bogotá", ability : "Medellín", travelDate : "2022-06-13"},
    {namePilot : "Carla ", duration: "Media", destiny : "Manizales", ability : "Buenos Aires", travelDate : "2022-07-01"},
    {namePilot : "Carolina ", duration: "Baja", destiny : "Hon Kong", ability : "Manizales", travelDate : '2022-06-21'} ,
    {namePilot : "Andres ", duration: "Baja", destiny : "New York", ability : "Manizales", travelDate : "2022-07-11"}, 
]

export default function Tab(){

    const [modal, setModal] = useState(false)
    const [filterSelected, seFilterSelected] = useState({tipeFilter: 'Todos', filter:''})
    const [filts, setFilts] = useState([{tipeFilter: 'Todos', filter:''},{tipeFilter: 'pilot', filter:'Car'}, {tipeFilter: 'pilot', filter:'And'}])

    const filterData = (data, filt)=>{

        if(filt.tipeFilter == "Todos"){
            return data
        }

        if(filt.tipeFilter == "pilot"){
            return data.filter((element)=>{
                if (element.namePilot.indexOf(filt.filter) != -1){
                    return element
                }  
            })
        }

        if(filt.tipeFilter == "duration"){}
    }

    const colorPiont = (ability)=>{
        const abilityColor = {
            Alta : "danger",
            Media : "warning",
            Baja :"info"
        }
        return "point "+abilityColor[ability]
    }

    const optionSelected=(e)=>{
        const select = filts[e.target.selectedIndex]
        seFilterSelected(select)

    }
    
    return (
    <div className='component'>

        {modal ? <AddFilerModal>{{setModal, filts, setFilts}}</AddFilerModal> : null}

        <div className='buttons'>
            <select className='buton' onChange={optionSelected}>
                <option value="s">Todos</option>
                {filts.map((element, i)=>{
                    if(element.tipeFilter != "Todos"){
                        return <option key={i} value="">{element.tipeFilter+" / "+element.filter}</option>
                    } 
                })}
                
            </select>
            <button className='buton filt' onClick={()=>console.log(setModal(true))}>Agregar Filtro</button>
        </div>

        <table className='tab'>
            <thead >
                <tr className='n'>
                    <td className='line title'>Piloto</td>
                    <td className='line title'>duración</td>
                    <td className='line title'>Origen</td>
                    <td className='line title'>Destino</td>
                    <td className='line title'>Fecha</td>
                </tr>
            </thead>

            <tbody>
                {
                    filterData(j,filterSelected).map((e, i)=>{
                        return (
                            <tr key={i} className = "center">
                                <td className={i == j.length -1 ? "" : "line"}><input type="checkbox" />{e.namePilot}</td>
                                <td className={i == j.length -1 ? "" : "line"}>{<div className='priori'><div className={colorPiont(e.duration)}></div>{e.duration}</div>}</td>
                                <td className={i == j.length -1 ? "" : "line"}>{e.destiny}  </td>
                                <td className={i == j.length -1 ? "" : "line"}>{e.ability}</td>
                                <td className={i == j.length -1 ? "" : "line"}>{e.travelDate}</td>
                             </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    )
}