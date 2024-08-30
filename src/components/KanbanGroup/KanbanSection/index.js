import './style.css'
import TaskCard from "../TaskCard";
import {useState} from "react";
import ModalNewTask from "../ModalNewTask/ModalNewTask";

export default function KanbanSection({section}){

    const [ModalState, SetState ] = useState(false)

    function ChangeModalState(){
        SetState(!ModalState)
    }

    return (
        <div className={'BodyKanbanSection'}>
            <div className={'TopSectionKanban'}>

                <div className={'InfoTop'}>
                    <h3>{section.name}</h3>
                    <p>0</p>
                </div>
                <div className={'points'}>
                    <p>
                        ...
                    </p>
                </div>
            </div>

            <div onClick={ChangeModalState} className={'TaskButton'}>
                <img src={'../../assets/KanbanPage/plus.png'} />
                <p>Nova Tarefa</p>
            </div>

            <div>
                <TaskCard />
            </div>
            <ModalNewTask ChangeState={SetState} ModalState={ModalState} />
        </div>
    )
}