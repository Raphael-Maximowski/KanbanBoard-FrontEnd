import './style.css'
import FilesContentInput from "../InputFiles";
import {useEffect, useState} from "react";
import ModalImage from "../../ModalShowFIle";

export default  function FilesSection({SetterInfo, Active}){
    const [OpenFile, SetOpenFile] = useState(false)
    const [files, setFiles] = useState([]);
    const [ShowFile, SetShowFile] =  useState(undefined)
    const [Anexos, SetAnexos] =  useState()

    function OpenModalFile(file){
        SetOpenFile(!OpenFile)
        SetShowFile(file)
    }

    function HandleAnexos(event){
        SetAnexos(event.target.value)
    }

    useEffect(() => {
        if (Active) {
            const ContentFiles = {
                    files: files,
                    anexos: Anexos
            }

            SetterInfo(ContentFiles)
        }
    }, [Active]);


    return (
        <div className={'Files'}>
            <label>Anexos</label>
            <div className="AnexosInput">
                <textarea onChange={HandleAnexos} placeholder={"Insira seus Links ou Arquivos"}/>
                <FilesContentInput value={files} setter={setFiles}/>
            </div>

            <div className={'FileContainer'}>
                {files.map((file, index) => (
                    <div key={index}>
                        <div onClick={() => OpenModalFile(file)} className={'file-previews'}>
                            <img className={'ImgPreview'} src={'../../assets/KanbanPage/File.png'}/>
                        </div>
                    </div>
                ))}
            </div>
            <ModalImage data={ShowFile} State={OpenFile} ChangeState={SetOpenFile}/>
        </div>
    )
}