import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
const Parent = () => {
  // Tabel Data
  const [record, setRecord] = useState([]);
  // Fetch API

  useEffect(() => {
    // Fetch data when the component mounts
    myResponse();
  }, []);

  const myResponse = async () => {
    try {
      const accessToken =
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxLGR1cmdlc2giLCJpc3MiOiJXYXRlciBTb2Z0d2FyZXMiLCJyb2xlcyI6IltST0xFX1VTRVJdIiwiaWF0IjoxNzE2MTg0MTIxLCJleHAiOjE3MTYyNzA1MjF9.kuFUJQx9ExYcQLijpX9jr5YWYVIQ2wQHcZoVtsgW4CRgpJDQzkLQmKjA-FPmtDlp0pZ8Zz42AlfgwKqAOuh5bA";
      const response = axios.get(
        "http://localhost:2525/parent/4F5455324D54453D",

        {
          headers: { Authorization: "Bearer " + accessToken },
        }
      );
      setRecord((await response).data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="tabel table-striped table-container border border-solid border-2 mt-5 ">
        <table className=" table-md">
          <thead className="thead-light">
            <tr>
              <th>Parent Id</th>
              {/* <th onClick={() => sorting("name")}>
                    {" "}
                    Name <FaSort />
                    book_id, book_auther, book_description, book_name, book_publisher, quantity, status, institute_id
                  </th>
                  
                  parent_id, address, alternate_mobile, education_qualification, email, mobile, occupation, parent_name, status, institute_id*/}
              <th>parent_name</th>
              <th>address</th>
              <th>alternate_mobile</th>
              <th>education_qualification</th>
              <th>email</th>
              <th>mobile</th>
            </tr>
          </thead>
          <tbody>
            {record.map((names, index) => (
              <tr key={index}>
                <td>{names.parent_id}</td>
                <td>{names.parent_name}</td>
                <td>{names.address}</td>
                <td>{names.alternate_mobile}</td>
                <td>{names.education_qualification}</td>
                <td>{names.email}</td>
                <td>{names.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Parent;
