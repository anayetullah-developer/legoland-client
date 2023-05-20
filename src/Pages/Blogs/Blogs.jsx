import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import database from "../../assets/blog/server.png";
import nodejs from "../../assets/blog/nodejs.png";
import express from "../../assets/blog/expressjs.png";
import token from "../../assets/blog/token.jpg";
import { Link } from "react-router-dom";
const Blogs = () => {
  return (
    <div className="container">
    <h1 className="text-center my-5">Blogs</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3 shadow-lg" style={{ "max-width": "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={database}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                  SQL vs NoSQL databases</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer...
                    <Link className="ms-2 fw-normal">continue reading</Link>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-3 " style={{ "max-width": "540px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={nodejs}
                  className="w-100 h-100 rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">What is MongoDB aggregate</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer...
                    <Link className="ms-2 fw-normal">continue reading</Link>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3 " style={{ "max-width": "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={express}
                  className="rounded-start h-100 w-100"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">What is express js? What is Nest JS</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer...
                    <Link className="ms-2 fw-normal">continue reading</Link>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-3 " style={{ "max-width": "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={token}
                  className="w-100 h-100 rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">What is an access token and refresh token? How do they work </h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer...
                    <Link className="ms-2 fw-normal">continue reading</Link>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
