import './style.css'
import Modal from "react-modal";
import {useSelector} from "react-redux";
import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import IconsInput from "../FormNewTask/InputSectionForm";
import SubTarefasSection from "../FormNewTask/SubTaskForm";
import DescriptionSection from "../FormNewTask/DescriptionForm";
import FilesSection from "../FormNewTask/FilesSectionForm";
import ModalImage from "../ModalShowFIle";

export default function ModalNewTask({ModalState, ChangeState}) {

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
            backgroundColor: 'transparent'
        },
    };

    const user = useSelector(state => state.User)
    let teams = useSelector(state => state.Team)
    teams = teams[0]
    const team = teams.find(team => team.team.id === user.teamId)
    const [TaskName, SetNameTask] = useState('Nova Tarefa')
    const [OpenFile, SetOpenFile] = useState(false)

    function ChangeModalState() {
        ChangeState(!ModalState)
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
                                    <img onClick={ChangeModalState} src={'../../assets/KanbanPage/Cancel.png'}/>
                                </div>
                                <IconsInput />
                            </div>
                            <div className={'MidTask'}>
                                <DescriptionSection />
                                <FilesSection />
                                <SubTarefasSection/>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalImage State={OpenFile} ChangeState={SetOpenFile}/>
                <ToastContainer/>
            </Modal>
        </div>
    )
}