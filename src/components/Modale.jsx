import '../styles/Modale.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { isModaleVisible } from '../app/selectors'
import { useStore, useSelector } from 'react-redux'

function Modale({ content }) {
    const store = useStore()
    const modaleVue = useSelector(isModaleVisible)
    return (
        <div className='modale' style={modaleVue ? { display: "block" } : { display: "none" }}>
            <div className='modale_content'>
                {content}
                <FontAwesomeIcon icon={faTimesCircle}
                                 className='btn_close_modale'
                                 onClick={() => store.dispatch({type:'TOGGLE_VUE'})}
                 />
            </div>
        </div>
    )
}

export default Modale