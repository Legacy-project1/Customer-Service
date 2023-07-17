// import { Form, Modal, Tabs, Input, Row, Col, message } from "antd";
// import TextArea from "antd/es/input/TextArea";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AddProduct, EditProduct } from "../../../apicalls/products";
// import { SetLoader } from "../../../redux/loadersSlice";
// import Images from "./images";

// const additionalThings = [
//   {
//     label: "Bill Available",
//     name: "billAvailable",
//   },
//   {
//     label: "Warranty Available",
//     name: "warrantyAvailable",
//   },
//   {
//     label: "Accessories Available",
//     name: "accessoriesAvailable",
//   },
//   {
//     label: "Box Available",
//     name: "boxAvailable",
//   },
// ];

// const rules = [
//   {
//     required: true,
//     message: "Required",
//   },
// ];

// function ProductsForm({
//   showProductForm,
//   setShowProductForm,
//   selectedProduct,
//   getData,
// }) {
//   const [selectedTab = "1", setSelectedTab] = React.useState("1");
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.users);
//   const onFinish = async (values) => {
//     try {
//       dispatch(SetLoader(true));
//       let response = null;
//       if (selectedProduct) {
//         response = await EditProduct(selectedProduct._id, values);
//       } else {
//         values.seller = user._id;
//         values.status = "pending";
//         response = await AddProduct(values);
//       }

//       dispatch(SetLoader(false));
//       if (response.success) {
//         message.success(response.message);
//         getData();
//         setShowProductForm(false);
//       } else {
//         message.error(response.message);
//       }
//     } catch (error) {
//       dispatch(SetLoader(false));
//       message.error(error.message);
//     }
//   };
//   const formRef = React.useRef(null);

//   useEffect(() => {
//     if (selectedProduct) {
//       formRef.current.setFieldsValue(selectedProduct);
//     }
//   }, [selectedProduct]);

//   return (
//     <Modal
//       title=""
//       open={showProductForm}
//       onCancel={() => setShowProductForm(false)}
//       centered
//       width={1000}
//       okText="Save"
//       onOk={() => {
//         formRef.current.submit();
//       }}
//      {...(selectedTab === "2" && {footer :false})}
//     >
//       <div>
//         <h1 className="text-primary text-2xl text-center font-semibold uppercase">
//           {selectedProduct ? "Edit Product" : "Add Product"}
//         </h1>
//         <Tabs
//           defaultActiveKey="1"
//           activeKey={selectedTab}
//           onChange={(key) => setSelectedTab(key)}
//         >
//           <Tabs.TabPane tab="General" key="1">
//             <Form layout="vertical" ref={formRef} onFinish={onFinish}>
//               <Form.Item label="Name" name="name" rules={rules}>
//                 <Input type="text" />
//               </Form.Item>
//               <Form.Item label="Description" name="description" rules={rules}>
//                 <TextArea type="text" />
//               </Form.Item>
//               <Row gutter={[16, 16]}>
//                 <Col span={8}>
//                   <Form.Item label="Price" name="price" rules={rules}>
//                     <Input type="number" />
//                   </Form.Item>
//                 </Col>
//                 <Col span={8}>
//                   <Form.Item label="Category" name="category" rules={rules}>
//                     <select>
//                       <option value="">Select</option>
//                       <option value="electronics">electronics</option>
//                       <option value="fashion">Fashion</option>
//                       <option value="home">Home</option>
//                       <option value="sports">Sports</option>
//                       <option value="toys">Toys</option>
//                     </select>
//                   </Form.Item>
//                 </Col>
//                 <Col span={8}>
//                   <Form.Item label="Age" name="age" rules={rules}>
//                     <Input type="number" />
//                   </Form.Item>
//                 </Col>
//               </Row>
//               <div className="flex gap-10">
//                 {additionalThings.map((item, i) => {
//                   return (
//                     <Form.Item
//                       label={item.label}
//                       name={item.name}
//                       key={i}
//                       valuePropName="checked"
//                     >
//                       <Input
//                         type="checkbox"
//                         value={item.name}
//                         onChange={(e) => {
//                           formRef.current.setFieldsValue({
//                             [item.name]: e.target.checked,
//                           });
//                         }}
//                         checked={formRef.current?.getFieldValue(item.name)}
//                       />
//                     </Form.Item>
//                   );
//                 })}
//               </div>
//             </Form>
//           </Tabs.TabPane>
//           <Tabs.TabPane tab="Images" key="2" disabled={!selectedProduct}>
//             <Images
//               selectedProduct={selectedProduct}
//               getData={getData}
//               setShowProductForm={setShowProductForm}
//             />
//           </Tabs.TabPane>
//         </Tabs>
//       </div>
//     </Modal>
//   );
// }

// export default ProductsForm;
// update for inquery collection 



// i remove
// import { Form, Modal, Tabs, Input, message } from "antd";
// import TextArea from "antd/es/input/TextArea";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   CreateInquiry,
//   UpdateInquiryStatus,
// } from "../../../apicalls/inquiry";
// import { SetLoader } from "../../../redux/loadersSlice";

// const rules = [
//   {
//     required: true,
//     message: "Required",
//   },
// ];

// function ProductsForm({
//   showProductForm,
//   setShowProductForm,
//   selectedProduct,
//   getData,
// }) {
//   const [selectedTab, setSelectedTab] = React.useState("1");
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.users);

//   const onFinish = async (values) => {
//     try {
//       dispatch(SetLoader(true));
//       let response = null;
//       if (selectedProduct) {
//         // Update inquiry
//         response = await UpdateInquiryStatus(selectedProduct._id, values.status);
//       } else {
//         // Create new inquiry
//         values.userId = user._id;
//         response = await CreateInquiry(values);
//       }

//       dispatch(SetLoader(false));
//       if (response.success) {
//         message.success(response.message);
//         getData();
//         setShowProductForm(false);
//       } else {
//         message.error(response.message);
//       }
//     } catch (error) {
//       dispatch(SetLoader(false));
//       message.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (selectedProduct) {
//       // Set form initial values if editing existing inquiry
//       formRef.current.setFieldsValue(selectedProduct);
//     }
//   }, [selectedProduct]);

//   const formRef = React.useRef(null);

//   return (
//     <Modal
//       title=""
//       visible={showProductForm}
//       onCancel={() => setShowProductForm(false)}
//       centered
//       width={1000}
//       okText="Save"
//       onOk={() => {
//         formRef.current.submit();
//       }}
//       {...(selectedTab === "2" && { footer: false })}
//     >
//       <div>
//         <h1 className="text-primary text-2xl text-center font-semibold uppercase">
//           {selectedProduct ? "Edit Inquiry" : "Add Inquiry"}
//         </h1>
//         <Tabs
//           defaultActiveKey="1"
//           activeKey={selectedTab}
//           onChange={(key) => setSelectedTab(key)}
//         >
//           <Tabs.TabPane tab="General" key="1">
//             <Form layout="vertical" ref={formRef} onFinish={onFinish}>
//               <Form.Item label="Inquiry" name="inquiry" rules={rules}>
//                 <Input type="text" />
//               </Form.Item>
//               <Form.Item label="Check-in" name="checkIn" rules={rules}>
//                 <Input type="text" />
//               </Form.Item>
//               <Form.Item label="Check-out" name="checkOut" rules={rules}>
//                 <Input type="text" />
//               </Form.Item>
//               <Form.Item label="User ID" name="userId" rules={rules}>
//                 <Input type="text" />
//               </Form.Item>
//               <Form.Item label="Comment" name="comment">
//                 <TextArea type="text" />
//               </Form.Item>
//               <Form.Item label="Status" name="status" rules={rules}>
//                 <Input type="text" />
//               </Form.Item>
//             </Form>
//           </Tabs.TabPane>
//         </Tabs>
//       </div>
//     </Modal>
//   );
// }

// export default ProductsForm;
