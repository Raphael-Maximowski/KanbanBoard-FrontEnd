import './style.css'
import FilesContentInput from "../InputFiles";
import {useState} from "react";
import ModalImage from "../../ModalShowFIle";

export default  function FilesSection(){
    const [OpenFile, SetOpenFile] = useState(false)
    const [files, setFiles] = useState([]);

    function OpenModalFile(){
        SetOpenFile(!OpenFile)
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
                    <>
                        <div onClick={OpenModalFile} key={file.path} className={'file-previews'}>
                            <img className={'ImgPreview'} src={'../../assets/KanbanPage/File.png'}/>
                        </div>
                        <ModalImage data={file} State={OpenFile} ChangeState={SetOpenFile}/>
                    </>
                ))}
            </div>
        </div>
    )
}