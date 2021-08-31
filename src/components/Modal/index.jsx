import React, {useEffect} from 'react';
import Portal from './Portal';

import { Overlay, Dialog } from './styles';
const ESC = 27;

const Modal = ({children, open, onClose}) => {
    useEffect(() => {
        // effect
        function onEsc(e){
            if(e.keyCode === ESC){
                onClose();
            }
        }

        window.addEventListener('keydown', onEsc);

        // cleanup
        return () => {
            window.removeEventListener('keydown');
        }
    }, [])

    if(!open) return null;

    function onOverlayClick(){
        onClose();
    }

    function onDialogClick(e){
        e.stopPropagation();
    }

    return (
        <Portal>
           <Overlay onClick={onOverlayClick}>
               <Dialog onClick={onDialogClick}>{children}</Dialog>
           </Overlay>
        </Portal>
    )
}

export default Modal;