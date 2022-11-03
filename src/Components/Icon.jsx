import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa'



 const Icon = ({ name }) => {

    switch (name) {
        case 'circle':
            return <FaRegCircle className='circle' />
        case 'cross':
            return <FaTimes className='cross' />
        default:
            return <FaPen className='icons' />
    }

}

export default Icon;