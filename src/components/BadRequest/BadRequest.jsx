import PropTypes from 'prop-types'
import { TbFaceIdError } from 'react-icons/tb';
import { BadRequestWrapper } from "./BadRequest.styled";

export const BadRequest = ({children}) => {
    return (
        <BadRequestWrapper>
            <p>{children}</p>
            <TbFaceIdError size={64} />
        </BadRequestWrapper>
    )
}

BadRequest.propTypes = {
    children: PropTypes.string,    
}