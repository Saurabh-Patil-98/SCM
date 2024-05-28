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

const AddTeacher = () => {
  // Tabel Data y
  const [record, setRecord] = useState([]);
  // Modal Data
  const [modeldata, setModeldata] = useState({
    teacher_id: "",
    address: "",
    alternate_number: "",
    contact_number: "",
    email: "",
    experience: "",
    gender: "",
    government_id: "",
    image: "",
    joining_date: "",
    qualification: "",
    teacher_name: "",
  });

  // Fetch API
  useEffect(() => {
    // Fetch data when the component mounts
    myResponse();
  }, []);

  const myResponse = async () => {
    try {
      const accessToken =
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxLHNwMTIzIiwiaXNzIjoiV2F0ZXIgU29mdHdhcmVzIiwicm9sZXMiOiJbUk9MRV9VU0VSXSIsImlhdCI6MTcxNjYxOTM1OSwiZXhwIjoxNzE2NzA1NzU5fQ.Z_0wNbeLbD3VjM0FCpFbzPz7PmHIS4ilbY4ub_BYYstzpsAK3xRgppKXRnEL7rIeNIaaoeVZ1pOF_qA3M4ATxA";
      const response = axios.get(
        "http://localhost:2525/teacher/4F5455324D54453D",
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
  const showDetail = async (teacher_id) => {
    try {
      const accessToken =
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxLHNwMTIzIiwiaXNzIjoiV2F0ZXIgU29mdHdhcmVzIiwicm9sZXMiOiJbUk9MRV9VU0VSXSIsImlhdCI6MTcxNjYxOTM1OSwiZXhwIjoxNzE2NzA1NzU5fQ.Z_0wNbeLbD3VjM0FCpFbzPz7PmHIS4ilbY4ub_BYYstzpsAK3xRgppKXRnEL7rIeNIaaoeVZ1pOF_qA3M4ATxA";
      const response = axios.get(
        `http://localhost:2525/teacher/edit/4F5455324D54453D/${teacher_id}`,

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
    <div className="max-w-42rem px-4 py-6 md:px-8 md:py-8 mx-auto transition-colors duration-300 mr-56px">
      <div className="container mx-auto p-4">
        <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 ">
          {" "}
          {/* Added shadow-lg for more depth */}
          <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Add Teacher
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Fill in the details to process your Add teacher.
          </p>
          <form className="max-h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {" "}
              {/* Grid with responsive column changes */}
              <input
                type="text"
                placeholder="Teacher Name"
                className="border border-gray-300 p-2 rounded w-full dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              />
              <input
                type="number"
                placeholder="mobile :"
                className="border border-gray-300 p-2 rounded w-full dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {" "}
              {/* Grid with responsive column changes */}
              <input
                type="text"
                placeholder="Address"
                className="border border-gray-300 p-2 rounded w-full dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              />
              <input
                type="text"
                placeholder="Gender"
                className="border border-gray-300 p-2 rounded w-full dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {" "}
              {/* Additional row */}
              <input
                type="email"
                placeholder="Qulaification"
                className="border border-gray-300 p-2 rounded w-full dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              />
              <input
                type="text"
                placeholder="Goverment_id"
                className="border border-gray-300 p-2 rounded w-full dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {" "}
              {/* Another grid row */}
              <input
                type="text"
                placeholder="Experience"
                className="border border-gray-300 p-2 rounded w-full dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>

            <button
              type="button"
              className="px-2 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors" /* Ensure good hover transition */
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

      {/* Table */}
      <div>
        <Modal isOpen={open}>
          <div style={{ paddingBottom: "2%" }}>
            <div>
              <div className="  rounded-2xl shadow-2xl overflow-hidden mx-auto  lg:max-w-7xl  bg-white   lg:mr-[20px] overflow-x-scroll md:overflow-auto sm:overflow-auto ">
                <h1 className="mt-5" style={{ textAlign: "center" }}></h1>
                <h1
                  className="text-3xl font-bold underline text-center pb-5"
                  style={{ color: "rgb(45, 51, 89)" }}
                >
                  Teacher Table
                </h1>
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
                              onChange={(e) =>
                                setRecordsPerPage(e.target.value)
                              }
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
                                <th>Teacher Id</th>
                                {/* <th onClick={() => sorting("name")}>
                    {" "}
                    Name <FaSort />
                  </th> */}
                                <th>Teacher Name</th>
                                <th>Address</th>
                                <th>Contact Number</th>
                                <th>Email</th>
                                <th>Experience</th>
                                <th>Gender</th>
                                <th>Qualification</th>

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
                                    : item.teacher_name
                                        .toLowerCase()
                                        .includes(search);
                                })
                                .map((names, index) => (
                                  <tr key={index}>
                                    <td>{names.teacher_id}</td>
                                    <td>{names.teacher_name}</td>
                                    <td>{names.contact_number}</td>
                                    <td>{names.email}</td>
                                    <td>{names.experience}</td>
                                    <td>{names.gender}</td>
                                    <td>{names.qualification}</td>
                                    <td
                                      data-toggle="tooltip"
                                      data-placement="right"
                                      title="View Details"
                                      style={{ textAlign: "center" }}
                                    >
                                      <button
                                        className="btn btn-primary hover:bg-blue-500"
                                        onClick={(e) =>
                                          showDetail(names.teacher_id)
                                        }
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
                              Row No : {modeldata.teacher_id}
                            </h3>
                          </div>
                          <hr className="w-auto h-1   bg-blue-200 border-0 rounded  dark:bg-gray-700" />

                          <span className="my-2 text-gray-600">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                              Teacher Name : {modeldata.teacher_name}
                            </h3>
                          </span>
                          <span className="my-2 text-gray-600">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                              Address : {modeldata.address}
                            </h3>
                          </span>
                          <span className="my-2 text-gray-600">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                              Contact Number : {modeldata.contact_number}
                            </h3>
                          </span>
                          <span className="my-2 text-gray-600">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                              Alternate Number : {modeldata.alternate_number}
                            </h3>
                          </span>
                          <span className="my-2 text-gray-600">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                              Email : {modeldata.email}
                            </h3>
                          </span>
                          <span className="my-2 text-gray-600">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                              Experience : {modeldata.experience}
                            </h3>
                          </span>
                          <span className="my-2 text-gray-600">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                              Gender : {modeldata.gender}
                            </h3>
                          </span>

                          <span className="my-2 text-gray-600">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                              Government Id : {modeldata.government_id}
                            </h3>
                          </span>
                          <span className="my-2 text-gray-600">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                              Image : {modeldata.image}
                            </h3>
                          </span>
                          <span className="my-2 text-gray-600">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                              Joining Date : {modeldata.joining_date}
                            </h3>
                          </span>
                          <span className="my-2 text-gray-600">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                              Qualification : {modeldata.qualification}
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
    </div>
  );
};

export default AddTeacher;
