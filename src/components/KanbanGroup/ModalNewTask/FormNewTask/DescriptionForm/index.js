import './style.css'
import {useEffect, useState} from "react";

export default function DescriptionSection({Active, SetterInfo}){

    const [Description, SetDescription] = useState(null)
    function handleDescription(event) {
        SetDescription(event.target.value)
    }

    useEffect(() => {
        if (Active) {
            const DescriptionValue = {
                Description : Description
            }
            SetterInfo(DescriptionValue)
        }
    }, [Active]);

    return (
        <div className={'DescriptionArea'}>
            <label>Descrição Completa da Tarefa</label>
            <textarea onChange={handleDescription}
                      placeholder="Descreva o passo a passo para sua atividade..."></textarea>
        </div>



    )
}