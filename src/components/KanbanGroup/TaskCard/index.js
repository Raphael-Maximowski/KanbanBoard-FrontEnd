import './style.css'
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export default function TaskCard({Task}){
    const User = useSelector(state => state.User)

    return (
        Task.UserId === User.teamId ?
            <div className={'BodyCard'}>
                <div className={'Teste'}>
                    <div className={'Flag'}>
                        {Task.GetInpuSection.Prioridade === "Urgente" ?
                            <img src={'../../assets/KanbanPage/RedFlagCard.png'}/> :
                            Task.GetInpuSection.Prioridade === "Alta" ?
                                <img src={'../../assets/KanbanPage/OrangeFlagCard.png'}/> :
                                Task.GetInpuSection.Prioridade === "Normal" ?
                                    <img src={'../../assets/KanbanPage/GreenFlagCard.png'}/> :
                                    <img src={'../../assets/KanbanPage/BlueFlagCard.png'}/>
                        }
                    </div>
                </div>

                <div className={'TopContent'}>
                    <div>
                        <div className={'TitleTask'}>
                            <h4>{Task.TaskName}</h4>
                        </div>
                        <div className={'DescriptionTask'}>
                            <p>{Task.GetDescription.Description}</p>
                        </div>
                    </div>

                </div>
                <hr></hr>
                <div className={'BottomPart'}>
                    <div className={`${
                        Task.GetInpuSection.Prioridade === "Urgente" ? 'Urgency' :
                            Task.GetInpuSection.Prioridade === "Alta" ? "High" :
                                Task.GetInpuSection.Prioridade === "Normal" ? "Normal" :
                                    'Baixo'

                    }`}>
                        <p>{Task.GetInpuSection.Tags}</p>
                    </div>
                    <div className={'TaskDate'}>
                        <img src={'../../assets/SideBar/Callendar.png'}/>
                        <p>{Task.GetInpuSection.Data}</p>
                    </div>
                </div>

            </div> : ''
    )
}