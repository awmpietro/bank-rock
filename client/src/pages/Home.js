import React, { Fragment, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import Datatable from "react-bs-datatable";
import moment from "moment";

import { fetchStatement, fetchBalance } from "../store/actions";

import TopCard from "../components/TopCard";

const header = [
  {
    title: "#",
    cell: row =>
      row.incoming ? (
        <i className="fas fa-arrow-down text-success"></i>
      ) : (
        <i className="fas fa-arrow-up text-danger"></i>
      ),
    sortable: true,
    filterable: true,
  },
  {
    title: "Date",
    prop: "createdAt",
    cell: row => moment(row.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    sortable: true,
    filterable: true,
  },
  {
    title: "Historic",
    prop: "historic",
    sortable: true,
    filterable: true,
  },
  {
    title: "Value",
    prop: "value",
    cell: row => `$ ${row.value}`,
    sortable: true,
    filterable: true,
  },
];

const Home = props => {
  const {incoming, total, outgoings, statement} = props.balance
  useEffect(() => {
    props.fetchStatement();
    props.fetchBalance();
  }, [incoming, total, outgoings, statement]);
  
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <h1 className="h3 mb-2 text-gray-800">
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </h1>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col xs="4">
            <TopCard
              title="Month Incoming"
              text={`$ ${incoming}`}
              icon="arrow-down"
              class="success"
            />
          </Col>
          <Col xs="4">
            <TopCard
              title="Month Outgoings"
              text={`$ ${outgoings}`}
              icon="arrow-up"
              class="danger"
            />
          </Col>
          <Col xs="4">
            <TopCard
              title="Balance"
              text={`$ ${total}`}
              icon="dollar-sign"
              class={incoming > outgoings ? 'success' : 'danger'}
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-green">Statement</h6>
              </div>
              <div className="card-body">
                <Datatable
                  tableHeaders={header}
                  tableBody={props.statement}
                  keyName="statementTable"
                  tableClass="striped hover responsive"
                  rowsPerPage={15}
                  rowsPerPageOption={[10, 15, 20, 50]}
                  initialSort={{ prop: "createdAt", isAscending: true }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = state => {
  const { statement, balance } = state.statements;
  return { statement, balance };
};

export default connect(mapStateToProps, {
  fetchStatement, fetchBalance
})(Home);
