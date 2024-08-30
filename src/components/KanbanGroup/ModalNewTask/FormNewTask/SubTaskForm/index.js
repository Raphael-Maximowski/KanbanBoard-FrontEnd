import './style.css'
import {toast} from "react-toastify";
import {useState} from "react";


export default function SubTarefasSection(){

    const [InputTask, ActiveInputTask] = useState(false)
    const [SubTarefas, SetSubTarefas] = useState([])
    const [NewSubTask, SetNewSubTask] = useState()
    const [CheckNewSubTask, SetCheckNewSubTask] = useState(false)

    function handleCheckSubTask() {
        SetCheckNewSubTask(!CheckNewSubTask)
    }

    function AddSubTask() {
        if (NewSubTask.length > 0) {
            const SubTaskId = (SubTarefas.length) + 1
            const SubTask = {
                name: NewSubTask,
                checked: CheckNewSubTask,
                id: SubTaskId
            }
            SetSubTarefas(prevSubTarefas => [...prevSubTarefas, SubTask])
            ActiveSubTask()
            SetNewSubTask('')
        } else {
            toast.error("Preencha o campo de título", {
                position: "bottom-right",
                autoClose: 5000
            })
        }
    }

    function ActiveSubTask() {
        ActiveInputTask(!InputTask)
    }

    function handleSubTask(event) {
        if (event.target.value.length > 19) {
            toast.error("Caracteres máximos atingiddos", {
                position: "bottom-right",
                autoClose: 5000
            })
        } else {
            SetNewSubTask(event.target.value)
        }

    }

    function EditSubTaskState(SubTarefa){

        const updateTask = [...SubTarefas]
        updateTask[(SubTarefa.id) - 1] = {
            ...updateTask[(SubTarefa.id) - 1],
            checked : !SubTarefa.checked

        }
        SetSubTarefas(updateTask)
    }

    return (
        <div className={'SubTarefas'}>
            <div className={'LabelHeader'}>
                <label>SubTarefas</label>
                <img onClick={ActiveSubTask} src={'../../assets/KanbanPage/AddSubTask.png'}/>
            </div>

            {InputTask === true ? <div className={'InputSection'}>
                <input onChange={handleCheckSubTask} type={"checkbox"}/>
                <input onBlur={AddSubTask} onChange={handleSubTask} value={NewSubTask}
                       type={"text"} placeholder={"Insira o Título"}/>
            </div> : ''}

            <div className={'CheckBox'}>
                {SubTarefas.map(SubTarefa => {
                    return <div>
                        <div className={'CheckBoxContainer'}>
                            <img src={'../../assets/KanbanPage/CancelSubTask.png'}/>
                            <input onChange={() => EditSubTaskState(SubTarefa)}
                                   defaultChecked={SubTarefa.checked} type={"checkbox"}/>
                            <p>{SubTarefa.name}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}