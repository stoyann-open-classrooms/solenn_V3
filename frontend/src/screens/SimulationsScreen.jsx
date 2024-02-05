import { Row } from "react-bootstrap";
import { useGetSimulationsQuery } from "../slices/simulationsApiSlice";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";

const SimulationsScreen = () => {
  const { data: simulations, error, isLoading } = useGetSimulationsQuery();



  return (
    <>
       
    
      {isLoading ? (
        <Loader />
      ) : error ? (
        
        <Message variant='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <h1>Simulations</h1>
          <Row>
            {simulations &&
              simulations.map((simulation) => (
                <div key={simulation._id}>
                  <h5>{simulation._id}</h5>
                </div>
              ))}
          </Row>
        </>
      )}
    </>
  );
};

export default SimulationsScreen;
