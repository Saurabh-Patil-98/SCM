import React, { useEffect, useState } from "react";
import {
  FaEye,
  FaEdit,
  FaSort,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import Modal from "./Modal";
// import "./styles.css";
import Card from "react-bootstrap/Card";
const Table1 = () => {
  const [record, setRecord] = useState([]);

  const [modeldata, setModeldata] = useState({
    id: "",
    userName: "",
    username: "",
    email: "",
    website: "",
  });

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((resposne) => resposne.json())
      .then((res) => setRecord(res));
  };

  useEffect(() => {
    getData();
  }, []);

  const showDetail = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resposne) => resposne.json())
      .then((res) => setModeldata(res));
    setOpen(true);
  };

  // modal
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
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
    <div style={{ paddingBottom: "2%" }}>
      <div>
        <div className="  rounded-2xl shadow-2xl overflow-hidden mx-auto  lg:max-w-7xl  bg-white   lg:mr-[20px] overflow-x-scroll md:overflow-auto sm:overflow-auto ">
          <h1 className="mt-5" style={{ textAlign: "center" }}></h1>
          <Card.Body>
            <div className="p-5  bg-white">
              <div className="row mt-2 ">
                <div className="col-lg-1 col-md-6 col-sm-12"></div>
                <div className="col-lg-11 col-md-6 col-sm-12">
                  <h5 className="mt-3 mb-3 text-secondary">
                    Records of Employees
                  </h5>

                  {/* Page limit */}
                  <div
                    className="container col-12 "
                    style={{ padding: "0 95% 0 0" }}
                  >
                    <a>
                      <h5>Show</h5>
                      <select
                        className=""
                        name=""
                        id=""
                        onChange={(e) => setRecordsPerPage(e.target.value)}
                      >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                      </select>
                    </a>
                  </div>

                  {/* Search Bar */}

                  <form className="max-w-md mx-auto  ml-[81%] ">
                    <label
                      for="default-search"
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
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

                  {/* <div>
                    <form
                      action="/search"
                      className="max-w-[480px] w-auto px-4 ml-[81%]"
                    >
                      <div className="relative">
                        <input
                          type="text"
                          name="q"
                          className="w-full border h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
                          placeholder="search"
                        />
                      </div>
                    </form>
                  </div> */}

                  <div className="tabel table-striped table-container border border-solid border-2 mt-5 ">
                    <table className=" table-md">
                      <thead className="thead-light">
                        <tr>
                          <th>No</th>
                          {/* <th onClick={() => sorting("name")}>
                    {" "}
                    Name <FaSort />
                  </th> */}
                          <th>Name</th>
                          <th>Username</th>
                          <th>Email</th>
                          <th>Website</th>
                          {/* {headers.map((header) => {
                    return (
                      <th onClick={() => sorting("sub_material_name")}>
                        {header} <FaSort />{" "}
                      </th>
                    );
                  })} */}
                          <th style={{ textAlign: "center" }}>Show Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {records
                          .filter((item) => {
                            return search.toLowerCase() === ""
                              ? item
                              : item.name.toLowerCase().includes(search);
                          })
                          .map((names, index) => (
                            <tr key={index}>
                              <td>{names.id}</td>
                              <td>{names.name}</td>
                              <td>{names.username}</td>
                              <td>{names.email}</td>
                              <td>{names.website}</td>
                              <td
                                data-toggle="tooltip"
                                data-placement="right"
                                title="View Details"
                                style={{ textAlign: "center" }}
                              >
                                <button
                                  className="btn btn-primary hover:bg-blue-500"
                                  onClick={(e) => showDetail(names.id)}
                                >
                                  <FaEye />
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
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
                            currentPage == npages - 1
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
                            currentPage == npages
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

              <Modal isOpen={open}>
                <div className="modal bg-white p-3" id="myModal">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Row No : {modeldata.id}</h4>
                      </div>
                      <button
                        type="button"
                        onClick={handleClose}
                        className="  text-black   mb-5 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-5"
                        style={{ marginLeft: "95%" }}
                      >
                        <i className="fa fa-close"></i>
                      </button>

                      <div className="modal-body">
                        <table className="table table-striped table-sm border border-solid border-2">
                          <thead className="thead-light">
                            <tr>
                              <th>No</th>
                              <th>Name</th>
                              <th>Username</th>
                              <th>Email</th>
                              <th>Website</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{modeldata.id}</td>
                              <td>{modeldata.name}</td>
                              <td>{modeldata.username}</td>
                              <td>{modeldata.email}</td>
                              <td>{modeldata.website}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </Card.Body>
        </div>
      </div>
    </div>
  );
};

export default Table1;
