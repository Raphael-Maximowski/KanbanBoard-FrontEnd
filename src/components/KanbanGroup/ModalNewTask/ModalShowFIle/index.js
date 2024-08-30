import './style.css'
import Modal from "react-modal";
import {useEffect, useState} from "react";



export default function ModalImage({State, ChangeState, data}) {

    const [FileType, SetType] = useState(undefined)

    function CloseModal(){
        ChangeState(!State)

    }

    function Type() {
        const type = data[0].path.slice(-3)

        if (
            type === 'jpg'
            || type === 'peg'
            || type === 'png'
            || type === 'gif'
            || type === 'svg'
            || type === 'ebp') {
            SetType('Image')
            console.log("Setado como Imagem")
        } else if (
            type === 'mp4'
            || type === 'ebm'
            || type === 'ogg'
            || type === 'avi'
            || type === 'mov') {
            SetType('Video')
            console.log("Setado como Video")
        } else {SetType('PDF')}
    }

    const customStyles3 = {
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
            backgroundColor: 'rgba(0, 0, 0, 0.95)'
        },
    };


    useEffect(() => {
        if (data !== undefined) {
            Type()
        }
    })

    return (
        <div>
            <Modal
                isOpen={State}
                style={customStyles3}
                overlayClassName="custom-overlay3"
            >
                {data !== undefined ?
                <div className="AnimationContainer3">
                    <div className={'ButtonsFiles'}>
                        <div className={'ButtonsContainer'}>
                            <div><a href={data[0].preview} download={data[0].path}><img src={'../../assets/KanbanPage/DownloadFile.png'}/></a></div>
                            <div><img onClick={CloseModal} src={'../../assets/KanbanPage/CancelModal.png'}/></div>
                        </div>
                    </div>
                    <div className="ModalImage">
                    {FileType === 'Image' && (
                            <img src={data[0].preview} alt="Preview"/>
                        )}
                        {FileType === 'Video' && (
                            <video controls>
                                <source src={data[0].preview} type="video/mp4"/>
                                Seu navegador não suporta a reprodução de vídeo.
                            </video>
                        )}
                        {FileType === 'PDF' && (
                            <iframe
                                src={data[0].preview}
                                width="100%"
                                height="100%"
                                title="PDF Viewer"
                            ></iframe>
                        )}
                    </div>
                </div> : '' }
            </Modal>
        </div>
    )
}