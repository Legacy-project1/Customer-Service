


import { Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { GetInquiries } from "../../apicalls/inquiry";
import moment from "moment";
function Inquiries() {
  const [inquiries, setInquiries] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetInquiries();
        setInquiries(data);
      } catch (error) {
        message.error(error.message);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: "Inquiry",
      dataIndex: "inquiry",
    },
    
    {
      title: "Check-in",
      dataIndex: "checkIn",
      render: (text, record) =>
        moment(record.createdAt).format("DD-MM-YYYY hh:mm A"),
    },
  
    {
      title: "Check-out",
      dataIndex: "checkOut",
      render: (text, record) =>
        moment(record.createdAt).format("DD-MM-YYYY hh:mm A"),
    },
    {
      title: "Room",
      dataIndex: "room",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Comment",
      dataIndex: "comment",
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={inquiries} />
    </div>
  );
}

export default Inquiries;
