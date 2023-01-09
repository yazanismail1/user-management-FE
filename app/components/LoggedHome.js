import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function LoggedHome() {
  const [reqData, setReqData] = useState([]);

  useEffect(() => {
    let credentials = {
      refresh: JSON.parse(localStorage.getItem("refresh")),
    };
    axios
      .get("http://127.0.0.1:8000/country/", {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
        },
      })
      .then((res) => {
        setReqData(res.data);
      })
      .catch((err) => {
        axios
          .post("http://127.0.0.1:8000/api/token/refresh/", credentials)
          .then((res) => {
            localStorage.setItem("access", JSON.stringify(res.data.access));
            window.location.reload(false);
          })
          .catch((err) => {});
      });
  }, []);

  return (
    <>
      <section className="py-5 h-screen">
        <Container className="flex flex-wrap justify-center gap-3">
          {reqData.map((item, index) => {
            return (
              <Card className="border-gray-200 w-64" key={index}>
                <Card.Header as="h5">
                  <Card.Title className="mb-0">{item.county_name}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Title>{item.city}</Card.Title>
                  <Card.Text>{item.currency}</Card.Text>
                  <div className="flex gap-2 mt-3">
                    <Button
                      variant="dark"
                      className="bg-gray-800 hover:bg-gray-700"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="dark"
                      className="bg-red-700 border-red-700 hover:bg-red-500 hover:border-red-500"
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </Container>
      </section>
    </>
  );
}
