import React, { useEffect, useState, useMemo } from "react";
import Card from "react-bootstrap/Card";
import "./styles.css";
import {
  FaEye,
  FaEdit,
  FaSort,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import Modal from "./Modal";
import Modal1 from "./Modal1";
import axios from "axios";

const Fees = () => {
  // Handlling form data
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setInputs("");
  };

  // Tabel Data
  const [record, setRecord] = useState([]);
  // Modal Data
  const [modeldata, setModeldata] = useState({
    fee_id: "",
    amount_type: "",
    grand_total: "",
    late_fee: "",
    total_amount: "",
  });

  // Fetch API
  useEffect(() => {
    // Fetch data when the component mounts
    myResponse();
  }, []);

  const myResponse = async () => {
    try {
      const accessToken =
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxLGR1cmdlc2giLCJpc3MiOiJXYXRlciBTb2Z0d2FyZXMiLCJyb2xlcyI6IltST0xFX1VTRVJdIiwiaWF0IjoxNzE2NTQ4OTM3LCJleHAiOjE3MTY2MzUzMzd9.dKzK8OZcKxqg7SN2IvW2oMceCcZzw2cTkzREWNzGKiOXX3WffBBSXb3s1w97bcsi2CrbgRzmAyrHy35iCv4APQ";
      const response = axios.get(
        "http://localhost:2525/fees/4F5455324D54453D",
        {
          headers: { Authorization: "Bearer " + accessToken },
        }
      );
      setRecord((await response).data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // show single data
  const showDetail = async (fee_id) => {
    try {
      const accessToken =
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxLGR1cmdlc2giLCJpc3MiOiJXYXRlciBTb2Z0d2FyZXMiLCJyb2xlcyI6IltST0xFX1VTRVJdIiwiaWF0IjoxNzE2NTQ4OTM3LCJleHAiOjE3MTY2MzUzMzd9.dKzK8OZcKxqg7SN2IvW2oMceCcZzw2cTkzREWNzGKiOXX3WffBBSXb3s1w97bcsi2CrbgRzmAyrHy35iCv4APQ";
      const response = axios.get(
        `http://localhost:2525/fees/edit/4F5455324D54453D/${fee_id}`,

        {
          headers: { Authorization: "Bearer " + accessToken },
        }
      );
      setModeldata((await response).data.data);
      setOpen1(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // modal
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  // modal1
  const [open1, setOpen1] = React.useState(false);
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleOpen1 = () => {
    setOpen1(true);
  };

  // Data sorting
  const [order, setOrder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...record].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setRecord(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...record].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setRecord(sorted);
      setOrder("ASC");
    }
  };

  // Search
  const [search, setSearch] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const records2 = recordsPerPage;
  const lastIndex = currentPage * records2;
  const firstIndex = lastIndex - records2;
  const records = record.slice(firstIndex, lastIndex);
  const npages = Math.ceil(record.length / records2);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  // Functions prev, next
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== npages) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }

  let headers = Object.keys(record);

  return (
    <div>
      <div
        className="p-8 lg:w-[1300px] xl:w-[1300px] mx-auto"
        style={{ marginTop: "30px" }}
      >
        <h1
          className="text-3xl font-bold underline text-center pb-5"
          style={{ color: "rgb(45, 51, 89)" }}
        >
          Fees
        </h1>
        <div
          className=" p-5 rounded-2xl shadow-2xl overflow-hidden mx-auto  lg:max-w-7xl  bg-white"
          style={{ marginRight: "20px" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="amount_type"
                  className="peer  h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                  placeholder=""
                  value={inputs.amount_type || ""}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="text"
                  className="absolute cursor-text left-0 -top-3 text-sm text-gray-900 bg-white mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >
                  Amount Type
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  name="grand_total"
                  className="peer  h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                  placeholder=""
                  value={inputs.grand_total || ""}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="number"
                  className="absolute cursor-text left-0 -top-3 text-sm text-gray-900 bg-white mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >
                  Grand Total
                </label>
              </div>
            </div>

            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  name="late_fee"
                  className="peer  h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                  placeholder=""
                  value={inputs.late_fee || ""}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="number"
                  className="absolute cursor-text left-0 -top-3 text-sm text-gray-900 bg-white mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >
                  Late Fee
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  name="total_amount"
                  className="peer  h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                  placeholder=""
                  value={inputs.total_amount || ""}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="number"
                  className="absolute cursor-text left-0 -top-3 text-sm text-gray-900 bg-white mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >
                  Total Amount
                </label>
              </div>
            </div>

            <button
              //   onClick={onClear}
              type="submit"
              className="text-white bg-blue-500 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleOpen}
              className="text-white bg-blue-500 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-5 sm:mt-5"
            >
              Show List
            </button>
          </form>
        </div>
      </div>

      <Modal isOpen={open}>
        <div style={{ paddingBottom: "2%" }}>
          <div>
            <div className="  rounded-2xl shadow-2xl overflow-hidden mx-auto  lg:max-w-7xl  bg-white   lg:mr-[20px] overflow-x-scroll md:overflow-auto sm:overflow-auto ">
              <h1 className="mt-5" style={{ textAlign: "center" }}></h1>
              <Card.Body>
                <div className="p-5  bg-white">
                  <div className="row mt-2 ">
                    <div className="col-lg-1 col-md-6 col-sm-12"></div>
                    <div className="col-lg-11 col-md-6 col-sm-12">
                      <button
                        onClick={handleClose}
                        style={{ marginLeft: "95%" }}
                        className="  hover:bg-blue-500 text-blue-dark font-semibold hover:text-white py-2 px-4 border border-black hover:border-blue rounded"
                      >
                        <i className="fa fa-close fa-2md"></i>
                      </button>
                      <h5 className="mt-3 mb-3  font-semibold text-[18px]">
                        Records
                      </h5>

                      {/* Page limit */}
                      <div className="container col-12 font-semibold ">
                        <label>
                          Show{" "}
                          <select
                            className="w-[50px] h-[25px] text-md pl-1 border border-black rounded-md"
                            onChange={(e) => setRecordsPerPage(e.target.value)}
                          >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                          </select>{" "}
                          entries
                        </label>
                      </div>

                      {/* Search Bar */}

                      <form className="max-w-md mx-auto  ml-[81%] ">
                        <label
                          htmlFor="default-search"
                          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                          Search
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                              className="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                              />
                            </svg>
                          </div>
                          <input
                            onChange={(e) => setSearch(e.target.value)}
                            type="search"
                            id="default-search"
                            className=" block w-auto p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Here ..."
                            required
                          />
                        </div>
                      </form>

                      <div className="tabel table-striped table-container border border-solid border-2 mt-5 ">
                        <table className=" table-md">
                          <thead className="thead-light">
                            <tr>
                              <th>Fee Id</th>
                              {/* <th onClick={() => sorting("name")}>
                    {" "}
                    Name <FaSort />
                  </th> */}
                              <th>Amount Type</th>
                              <th>Grand Total</th>
                              <th>Late Fee</th>
                              <th>Total Amount</th>

                              <th style={{ textAlign: "center" }}>
                                Show Details
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {records
                              .filter((item) => {
                                return search.toLowerCase() === ""
                                  ? item
                                  : item.amount_type
                                      .toLowerCase()
                                      .includes(search);
                              })
                              .map((names, index) => (
                                <tr key={index}>
                                  <td>{names.fee_id}</td>
                                  <td>{names.amount_type}</td>
                                  <td>{names.grand_total}</td>
                                  <td>{names.late_fee}</td>
                                  <td>{names.total_amount}</td>

                                  <td
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="View Details"
                                    style={{ textAlign: "center" }}
                                  >
                                    <button
                                      className="btn btn-primary hover:bg-blue-500"
                                      onClick={(e) => showDetail(names.fee_id)}
                                    >
                                      <FaEye />
                                    </button>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <span className="text-[18px] pl-4 font-semibold">
                          Page showing {currentPage} from {npages}
                        </span>
                      </div>
                      {/* Pagination */}
                      <div
                        className={`w-full justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-2.5 px-1 items-center ${
                          records?.length > 0 ? "flex" : "hidden"
                        }`}
                      >
                        <div className="text-lg"></div>
                        <div className="flex">
                          <ul
                            className="flex justify-center items-center gap-x-[10px] z-30"
                            role="navigation"
                            aria-label="Pagination"
                          >
                            <li
                              className={`prev-btn flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] disabled 
                          ${
                            currentPage === npages - 1
                              ? "bg-[#cccccc]   "
                              : " cursor-pointer"
                          }`}
                              onClick={prePage}
                            >
                              <FaChevronLeft />
                            </li>

                            {numbers.map((n, i) => (
                              <li
                                className={`flex items-center justify-center w-[36px] rounded-[6px] h-[34px] border-[1px] border-solid border-[2px] bg-[#FFFFFF] cursor-pointer ${
                                  currentPage === n ? "bg-blue-600" : ""
                                }`}
                                key={i}
                              >
                                <a
                                  className="page-link "
                                  onClick={() => changeCPage(n)}
                                >
                                  {n}
                                </a>
                              </li>
                            ))}

                            <li
                              className={`flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB]  
                           
                          ${
                            currentPage === npages
                              ? "bg-[#cccccc] pointer-events-none"
                              : " cursor-pointer"
                          }`}
                              onClick={nextPage}
                            >
                              <FaChevronRight />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Model Box  */}

                  <Modal1 isOpen1={open1}>
                    <div
                      className="relative max-w-2xl h-auto md:mt-[10%] md:ml-[25%] sm:center"
                      style={{}}
                    >
                      <span className="absolute left-1 w-full h-full mt-1 ml-1 mr-3 bg-blue-500 rounded-lg"></span>
                      <div className="relative h-full p-3 bg-white border-2 border-blue-500 rounded-lg">
                        <button
                          onClick={handleClose1}
                          style={{ marginLeft: "90%" }}
                          className="  hover:bg-blue-500 text-blue-dark font-semibold hover:text-white py-2 px-4 border border-black hover:border-blue rounded"
                        >
                          <i className="fa fa-close fa-2md"></i>
                        </button>
                        <div className="flex items-center -mt-1">
                          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                            Row No : {modeldata.fee_id}
                          </h3>
                        </div>
                        <hr className="w-auto h-1   bg-blue-200 border-0 rounded  dark:bg-gray-700" />

                        <span className="my-2 text-gray-600">
                          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                            Amount Type : {modeldata.amount_type}
                          </h3>
                        </span>
                        <span className="my-2 text-gray-600">
                          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                            Grand Total : {modeldata.grand_total}
                          </h3>
                        </span>
                        <span className="my-2 text-gray-600">
                          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                            Late Fee : {modeldata.late_fee}
                          </h3>
                        </span>
                        <span className="my-2 text-gray-600">
                          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                            Total Amount : {modeldata.total_amount}
                          </h3>
                        </span>
                      </div>
                    </div>
                  </Modal1>
                </div>
              </Card.Body>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Fees;
