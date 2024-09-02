import './style.css'
import Modal from "react-modal";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import IconsInput from "../FormNewTask/InputSectionForm";
import SubTarefasSection from "../FormNewTask/SubTaskForm";
import DescriptionSection from "../FormNewTask/DescriptionForm";
import FilesSection from "../FormNewTask/FilesSectionForm";
import ModalImage from "../ModalShowFIle";
import {AddTask} from "../../../../store/reducers/tasks";

export default function ModalNewTask({ModalState, ChangeState}) {

    const dispatch = useDispatch()

    const customStyles2 = {
        content: {
            width: '100vw',
            height: '100vh',
            top: '50%',
            left: '50%',
            right: 'auto',
            border: '0px',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'transparent',
        },
    };

    const user = useSelector(state => state.User)
    let teams = useSelector(state => state.Team)
    const tasks = useSelector(state => state.Task)

    teams = teams[0]
    const team = teams.find(team => team.team.id === user.teamId)
    const [TaskName, SetNameTask] = useState('Nova Tarefa')
    const [OpenFile, SetOpenFile] = useState(false)
    const [ValidationError, SetError] =  useState([])

    const [GetInpuSection, SetInpuSection] = useState(null)
    const [GetDescription, SetDescription] = useState(null)
    const [GetFiles, SetFiles] = useState(null)
    const [GetSubTasks, SetSubTask] = useState(null)
    const [GetValue, ActiveState] = useState(false)

    const [FinalTask, SetFinalTask] = useState('')

    // Atualizar FinalTask sempre que qualquer um dos estados relevantes mudar
    useEffect(() => {
        const TaskFinal = {
            TaskName,
            GetInpuSection,
            GetDescription,
            GetFiles,
            GetSubTasks
        };
        SetFinalTask(TaskFinal);
    }, [TaskName, GetInpuSection, GetDescription, GetFiles, GetSubTasks]);

    function ShowInfo() {
        ActiveState(!GetValue)
    }

    useEffect(() => {
        let errorparameter = false
        if (GetValue === true) {
            if (FinalTask.GetInpuSection !== null && GetFiles !== null &&  GetSubTasks !== null) {
                if (TaskName === "Nova Tarefa") {
                    errorparameter = true
                    SetError(prevError => [...prevError, "Insira um nome Valido"]);
                } if (FinalTask.GetInpuSection.Status === "Vazio") {
                    errorparameter = true
                    SetError(prevError => [...prevError, "Insira um Status Valido"]);
                } if (FinalTask.GetInpuSection.Data === "Vazio") {
                    errorparameter = true
                    SetError(prevError => [...prevError, "Insira uma Data"]);
                } if (FinalTask.GetDescription.Description === null) {
                    errorparameter = true
                    SetError(prevError => [...prevError, "Insira uma Descrição"]);
                } if (FinalTask.GetInpuSection.Prioridade === "Vazio") {
                    errorparameter = true
                    SetError(prevError => [...prevError, "Insira uma Prioridade"]);
                }

                ActiveState(!GetValue)

                if (errorparameter === false) {
                    dispatch(AddTask(FinalTask))
                    ChangeModalState()
                    toast.success("Tarefa Criada!", {
                        position: "bottom-right",
                        autoClose: 5000
                    })

                }
                setTimeout(() => {
                    SetError([])
                }, 5100)
            }
        }

    }, [FinalTask]);

    useEffect(() => {
        toast.error(ValidationError[0], {
            position: "bottom-right",
            autoClose: 5000
        })
    }, [ValidationError])

    function ChangeModalState() {
        ChangeState(!ModalState)
        SetNameTask('Nova Tarefa')
    }

    function HandleName(event) {
        if (event.target.value.length < 31) {
            SetNameTask(event.target.value)
        } else {
            toast.error('Caracteres máximos atingidos', {
                position: "bottom-right",
                autoClose: 10000
            })
        }

        if (event.target.value === '') {
            setTimeout(() => {
                const NewValue = event.target.value
                if (NewValue === '') {
                    toast.error('Preencha o nome da sua Task!', {
                        position: "bottom-right",
                        autoClose: 10000
                    })
                } else {
                }
            }, 5000);
        }
    }

    return (
        <div>
            <Modal
                isOpen={ModalState}
                style={customStyles2}
                overlayClassName="custom-overlay2"
            >
                <div className={'AnimationContainer2'}>
                    <div className={'ModalTask'}>
                        <div className={'ModalContent'}>
                            <div className={'path'}>
                                <p>{user.name + " / " + team.team.name + " / " + TaskName}</p>
                            </div>
                            <div className={'TopTask'}>
                                <div className={'NameTask'}>
                                    <input onChange={HandleName} value={TaskName}/>
                                    <button onClick={ShowInfo}>Criar Tarefa</button>
                                    <img onClick={ChangeModalState} src={'../../assets/KanbanPage/Cancel.png'}/>
                                </div>
                                <IconsInput SetterInfo={SetInpuSection} Active={GetValue} />
                            </div>
                            <div className={'MidTask'}>
                                <DescriptionSection SetterInfo={SetDescription} Active={GetValue} />
                                <FilesSection SetterInfo={SetFiles} Active={GetValue} />
                                <SubTarefasSection SetterInfo={SetSubTask} Active={GetValue}/>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalImage State={OpenFile} ChangeState={SetOpenFile}/>
            </Modal>
        </div>
    )
}
