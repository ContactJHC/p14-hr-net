import { useCallback, useEffect } from 'react'
import './Modal.css'

export default function Modal(props) {
    // il y a du code dans Modal.css non présent ici

    // il faut installer react-transition-group
    // yarn add react-transition-group

    // dans Employees.jsx le code ajouté est : 
    // const [show, setShow] = useState(false)
    // <button onClick={()=>setShow(true)}>Save</button>
    // <Modal onClick={()=>setShow(false)} show={show}/>


    // let modalStyle = {
    //     width : '90%',
    //     backgroundColor: 'lightgrey',
    //     borderRadius: '10px',
    //     color: 'white',
    //     fontSize: ''
    //   }
    // <Modal
    // title='Modale P14'
    // large={true}
    // style={modalStyle} 
    // onClose={() => setShow(false) } 
    // show={show}
    // >
    // <p>La prop children</p>
    // </Modal>

    const { onClose } = props;
    const closeOnEscapeKeyDown = useCallback((e) => {
        if ((e.charCode || e.keyCode) === 27) {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [closeOnEscapeKeyDown])

  return (
    <div className=
        {`modal ${props.show ? 'show' : ''}`} 
        onClick={props.onClose}
    >
        <div 
            className = {
                `modal-content 
                ${props.small ? 'small' : ''}
                ${props.large ? 'large' : ''}
                `
            }
            onClick={e => e.stopPropagation()}
            style = {{
                width:`${props.style.width}`,
                backgroundColor:`${props.style.backgroundColor}`,
                borderRadius:`${props.style.borderRadius}`,
                color:`${props.style.color}`,
                fontSize:`${props.style.fontSize}`,
            }}
        >
            <div className='modal-header'>
                <h4 className='modal-title'>
                    {props.title}
                </h4>
            </div>
            <div className='modal-body'>
                {props.children}
            </div>
            <div className='modal-footer'>
                <button onClick={props.onClose} className='button'>Close</button>
            </div>
        </div>

    </div>
  )
}
