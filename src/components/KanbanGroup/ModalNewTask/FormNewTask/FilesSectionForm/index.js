import './style.css'
import FilesContentInput from "../InputFiles";
import {useState} from "react";
import ModalImage from "../../ModalShowFIle";

export default  function FilesSection(){
    const [OpenFile, SetOpenFile] = useState(false)
    const [files, setFiles] = useState([]);
    const [ShowFile, SetShowFile] =  useState(undefined)

    function OpenModalFile(file){
        SetOpenFile(!OpenFile)
        console.log("Arquivo Escolhido", file)
        SetShowFile(file)
    }

    return (
        <div className={'Files'}>
            <label>Anexos</label>
            <div className="AnexosInput">
                <textarea placeholder={"Insira seus Links ou Arquivos"}/>
                <FilesContentInput value={files} setter={setFiles}/>
            </div>

            <div className={'FileContainer'}>
                {files.map(file => (
                    <div key={file.path}>
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