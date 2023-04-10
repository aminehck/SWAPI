import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return ( 
        <div className="loading text-center">
            <Spinner className='spin' animation="border" variant="warning" />
            <h3 className='mt-3'>Loading ...</h3>
        </div>    
    );
}
 
export default Loading;