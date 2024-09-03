import './style.css'
import TaskCard from "../TaskCard";
import {useEffect, useState} from "react";
import ModalNewTask from "../ModalNewTask/ModalNewTask";
import {useSelector} from "react-redux";

export default function KanbanSection({section}){

    const [ModalState, SetState ] = useState(false)
    const TasksCreated = useSelector(state => state.Task)

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
                {
                    TasksCreated.filter(task => task.GetInpuSection.Id === section.id)
                        .map(FilteredTask => (
                            <TaskCard Task={FilteredTask} />
                        ))
                }
            </div>
            <ModalNewTask ChangeState={SetState} ModalState={ModalState} />
        </div>
    )
}