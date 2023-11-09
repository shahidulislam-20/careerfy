import PropTypes from 'prop-types';

const Button = ({text}) => {
    return <button className="bg-primary-color text-white font-semibold py-3 px-6 border-2 border-primary-color hover:bg-transparent hover:text-primary-color transition ease-in-out rounded-md">{text}</button>
};

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button;