import { useNavigate } from 'react-router-dom';

const NavigateExample = () => {

    let navigate = useNavigate();

    const handleClick = () => {

        navigate('/about')

    }
    return (
        <>
        <h1>This is the Navigate Example</h1>
        <button onClick={handleClick}>Click to navigate</button>
        </>
    )
}

export default NavigateExample;