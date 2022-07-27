import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import NavBar from "./navBar";

function Properties() {
  const { id } = useParams();
  // const [properties, setProperties] = useState([]);
  const [property, setProperty] = useState({});
  useEffect(() => {
    const getProperties = async (req, res) => {
      res = await axios.get("http://localhost:8000/properties");
      setProperty(
        res.data.find((obj) => {
          return obj._id === id;
        })
      );
    };
    getProperties();
  }, [id]);
  console.log(property);
  // useEffect(() => {
  //   const getProperty = () => {
  //     setProperty(
  //       properties.find((obj) => {
  //         return obj._id === id;
  //       })
  //     );
  //   };
  //   // getProperty();
  // }, [properties]);
  const [details, setDetails] = useState(false);
  // console.log(property);
  return (
    <div className="pt-5">
      <NavBar />
      <Container>
        <Card className="shadow mt-5 p-3">
          <h3 className="border-bottom">
            {property.type} {property.subtype}
          </h3>
          <Row>
            <Col md="4">
              <div>
                <img
                  src={`../images/${property.image}`}
                  alt={property.type}
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col md="6">
              <p>
                <strong> Rent : </strong> ₹ {property.rent}
              </p>
              <p>
                <strong> Description : </strong> {property.description}
              </p>
              <p>
                <strong> Country : </strong> {property.country}
              </p>
              <p>
                <strong> Town/Village : </strong> {property.village}
              </p>
              <p>
                <strong> Address : </strong> {property.address}
              </p>
              <p>
                <strong> Pincode : </strong> {property.pincode}
              </p>
            </Col>
          </Row>
          <Button
            className="mb-2"
            onClick={() => {
              setDetails(true);
            }}
          >
            Get Owner Details
          </Button>
          {details && (
            <div>
              <p className="text-center">
                <strong> Name : </strong> {property.sellerName}
              </p>
              <p className="text-center">
                <strong> Mail id : </strong> {property.sellerEmail}
              </p>
              <p className="text-center">
                <strong> Contact no. : </strong> {property.sellerMobile}
              </p>
            </div>
          )}
        </Card>
      </Container>
    </div>
  );
}

export default Properties;
