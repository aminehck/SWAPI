import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return ( 
        <div className="loading">
            <Spinner className='spin' animation="border" variant="warning" />
        </div>    
    );
}
 
export default Loading;