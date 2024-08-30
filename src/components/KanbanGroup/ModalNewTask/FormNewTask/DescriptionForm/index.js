import './style.css'
import {useState} from "react";

export default function DescriptionSection(){

    const [Description, SetDescription] = useState("")
    function handleDescription(event) {
        SetDescription(event.target.value)
    }

    return (
        <div className={'DescriptionArea'}>
            <label>Descrição Completa da Tarefa</label>
            <textarea onChange={handleDescription} value={Description}
                      placeholder="Descreva o passo a passo para sua atividade..."></textarea>
        </div>



    )
}