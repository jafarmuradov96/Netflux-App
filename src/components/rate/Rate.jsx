import './Rate.scss';
import { FaRegStar } from "react-icons/fa";


const Rate = ( {openModal, id, } ) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '5px'}} onClick={() => openModal(id)}>
        <FaRegStar /> 
        <span>0</span>
    </div>
  )
}

export default Rate