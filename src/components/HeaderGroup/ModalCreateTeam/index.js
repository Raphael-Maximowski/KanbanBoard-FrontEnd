import './style.css'
import Modal from 'react-modal'
import {AddList} from "../../../store/reducers/team";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";

export default function ModalNewTeam({ModalState, CloseModal}) {
    Modal.setAppElement('#root');
    const dispatch = useDispatch()
    const [TeamName, SetTeamName] = useState('')
    const [TeamDesc, SetTeamDesc] = useState('')
    let Teams = useSelector(state => state.Team)

    const customStyles = {
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

    function ChangeModalState(){
        CloseModal(!ModalState)
    }

    function NameState(event){
        SetTeamName(event.target.value)
    }

    function DescState(event){
        SetTeamDesc(event.target.value)
    }

    function Error(){
        toast.error('Preencha todos os campos!', {
            position: "bottom-right"
        })
    }

    function Succes(){
        toast.success("Time Cadastrado com Sucesso!", {
            position: "bottom-right"
        })
    }

    function CreateTeam(){

        if (TeamName !== '' && TeamDesc !== '') {
            let TeamId = Teams[0].length
            TeamId =  TeamId + 1

            const team = {
                team : {
                    id: TeamId,
                    name: TeamName,
                    desc: TeamDesc
                }
            }
            dispatch(AddList(team))
            ChangeModalState()
            Succes()

        } else { Error() }

    }

    return (
        <div>
            <Modal
                isOpen={ModalState}
                style={customStyles}

                overlayClassName="custom-overlay"
            >
                <div className={'AnimationContainer'}>
                    <div className={'ModalTeam'}>
                        <div className={'ContentModal'}>
                            <div className={'HeaderModal'}>
                                <div className={'ContentHeaderModal'}>
                                    <h2>Crie seu Time</h2>
                                    <p>Possibilite uma melhor gestão de tarefas a seus colaboradores</p>
                                </div>
                                <div className={'ImgModal'}>
                                    <img onClick={ChangeModalState} src={'../../assets/CreateTeam/CloseModal.png'}/>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>Nome</label>
                                    <input onChange={NameState} type={"text"}
                                           placeholder={"Insira o nome do seu time"}/>
                                </div>
                                <div>
                                    <label>Descrição</label>
                                    <input onChange={DescState} type={"text"}
                                           placeholder={"Insira a descrição do seu time"}/>
                                </div>
                                <button onClick={CreateTeam}>Criar TIme</button>

                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}



