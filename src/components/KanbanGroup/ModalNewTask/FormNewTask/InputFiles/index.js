import { useDropzone } from 'react-dropzone';
import './style.css'
import {useState} from "react";

function FilesContentInput({setter, value}) {

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: acceptedFiles => {
            const newFiles = acceptedFiles.map(file => ({
                ...file,
                preview: URL.createObjectURL(file)
            }));
            setter(prevImages => [...prevImages, newFiles]);
            console.log("Image Array: ", value)
        }
    });

    return (
        <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            <button className={'Drop'}>
                <img src={'../../assets/KanbanPage/Clips.png'}/>
            </button>
        </div>
    );
}

export default FilesContentInput
