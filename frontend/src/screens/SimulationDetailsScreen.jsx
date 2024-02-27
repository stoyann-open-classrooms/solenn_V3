import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useGetSimulationDetailsQuery } from '../slices/simulationsApiSlice';
import Loader from '../components/shared/Loader';
import { Row, Col, ListGroup, Card, Button, Badge } from 'react-bootstrap';
import { FaArrowAltCircleLeft, FaUser } from 'react-icons/fa';
import ThirdPartyCard from '../components/ThirdPartyCard';
import InstallationInfos from '../components/InstallationInfos';
import InstallationOnduleurs from '../components/InstallationOnduleurs';
import InstallationPanneaux from '../components/InstallationPanneaux';
import InstallationSupportage from '../components/InstallationSupportage';
import InstallationStockage from '../components/InstallationStockage';
import InstallationPrestations from '../components/InstallationPrestations';
import InstallationSuppervision from '../components/InstallationSuppervision';
import { BASE_URL } from "../constants/constants";
const SimulationDetailsScreen = () => {
  const { id: simulationId } = useParams();

  const {
    data: simulation,
    isLoading,
    refetch,
    error,
  } = useGetSimulationDetailsQuery(simulationId);

  const [copied, setCopied] = useState(false);

  

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${BASE_URL}/api/simulations/${simulation._id}`);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy to clipboard", err);
    }
  };

  useEffect(() => {
    let timeout;
    if (copied) {
      timeout = setTimeout(() => setCopied(false), 3000);
    }

    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <>
      <Link className="btn btn-light my-3" to="/simulations">
        <FaArrowAltCircleLeft /> RETOUR
      </Link>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <h3>{error?.data?.message || error.error}</h3>
      ) : (
        <>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>Refference de la simulation : {simulation.refference}</h3>
                  <p>Accès data api : <strong>{BASE_URL}/api/simulations/{simulation._id}</strong></p>
                  <Button className="btn-sm" variant="info" onClick={handleCopyToClipboard}>
                    {copied ? "Adresse copier!" : "Copier l'adresse"}
                  </Button>
                  <p>
                    date de création :{' '}
                    <strong>
                      {new Date(simulation.createdAt).toLocaleDateString()}
                    </strong>
                  </p>
                  <Link
                    className="btn btn-light"
                    to={`/simulation-edit/${simulation._id}`}
                  >
                    EDITER LA SIMULATION{' '}
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={4}>

              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Col>
                      <Badge>{simulation.status}</Badge>
                    </Col>
                    <Col>Concessionaire : {simulation.concessionaire}</Col>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <strong> Stockage:</strong>
                      </Col>
                      <Col>
                        <strong>
                          {simulation.stockage ? <p>Oui</p> : <p>Non</p>}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h5>
                      Adresse de l'installation:{' '}
                      <strong>{simulation.address} </strong>{' '}
                    </h5>
                  </ListGroup.Item>
                  {/* Displaying consoN data */}
                </ListGroup>
              </Card>
            </Col>
            <ListGroup variant='flush'>
             {/* Displaying consoN data */}


    {/* Displaying consoN1 data */}
   
        {/* Displaying consoN data */}
    {/* Displaying consoN data */}
    <Row className="my-4">
              <Col>
                <ThirdPartyCard
                  tierId={simulation.demandeur}
                  title={"Demandeur"}
                />
              </Col>
              <Col>
                <ThirdPartyCard
                  tierId={simulation.benneficiaire}
                  title={"benneficiare"}
                />
              </Col>
            </Row>
    <ListGroup.Item>
     
      <h5 style={{ textAlign:'center', fontSize: "30px", color:"orange"}}>Conso N</h5>
      <table className="table" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px", color:'orange'}}> Mois</th>
            {Object.keys(simulation.consoN).map((month) => (
              <th key={month} style={{ border: "1px solid #ddd", padding: "8px" }}>{month}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" , color:'orange'}}> <strong>Valeur</strong></td>
            {Object.values(simulation.consoN).map((value, index) => (
              <td key={index} style={{ border: "1px solid #ddd", padding: "8px" }}>{value}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </ListGroup.Item>

    {/* Displaying consoN1 data */}
    <ListGroup.Item>
      <h5  style={{ textAlign:'center', fontSize: "30px", color:"orange"}}>Conso N -1 </h5>
      <table className="table" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd",  padding: "8px"  , color:'orange' }}>Mois</th>
            {Object.keys(simulation.consoN1).map((month) => (
              <th key={month} style={{ border: "1px solid #ddd",borderRight: "1px solid #ddd", padding: "8px" }}>{month}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px"  , color:'orange' }}> <strong>Valeur</strong></td>
            {Object.values(simulation.consoN1).map((value, index) => (
              <td key={index} style={{ border: "1px solid #ddd", padding: "8px" }}>{value}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </ListGroup.Item>
  </ListGroup>
       
          </Row>

         

          <InstallationInfos installation={simulation} />
         
          <Row className="my-4"></Row>
 
          {simulation.stockage && (
  <InstallationStockage
    capaciteBatterie={simulation.capaciteBatterie}
    batteries={simulation.batteries}
    prof={simulation.prof}
    installationId={simulation.id}
  />
)}

{simulation.onduleurs && (
  <InstallationOnduleurs
    onduleurs={simulation.onduleurs}
    prof={simulation.prof}
    installationId={simulation.id}
  />
)}

{simulation.prestations && (
  <InstallationPrestations
    prestations={simulation.prestations}
    prof={simulation.prof}
    installationId={simulation.id}
  />
)}

{simulation.modulesPV && (
  <InstallationPanneaux
    panneaux={simulation.modulesPV}
    prof={simulation.prof}
    installationId={simulation.id}
  />
)}

{simulation.suppervision && (
  <InstallationSuppervision
    suppervision={simulation.suppervision}
    prof={simulation.prof}
    installationId={simulation.id}
  />
)}


{simulation.supportage && (
  <InstallationSupportage
    supportages={simulation.supportage}
    prof={simulation.prof}
    installationId={simulation.id}
  />
)}

     
        </>
      )}
    </>
  )
}

export default SimulationDetailsScreen
