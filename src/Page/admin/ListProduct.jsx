import React, { useState } from "react";
import { useAllProduct } from "../../hook/useAllProduct";
import { useUserInfo, useUserToken } from "../../hook/useUserInfo";
import http from "../../Api/Api";
import { formatPrice } from "../../helper/formatPrice";

export default function ListProduct() {
  const atk = useUserToken();
  const userInfo = useUserInfo();
  const data = useAllProduct();
  if (userInfo == null || userInfo?.role !== "admin") {
    window.location.href = "/login";
  }
  const products = data?.data?.data.products;
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [formDataUpdate, setFormData] = useState({
    name: "",
    price: "",
    categoryId: "",
  });
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [file, setFile] = useState();
  const handleAddfile = (files) => {
    setFile(files[0]);
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleAddProduct = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", event.target.name.value);
    formData.append("price", event.target.price.value);
    formData.append("categoryId", event.target.categoryId.value);
    formData.append("description", event.target.description.value);
    formData.append("imgUrl", file);
    const headers = {
      headers: {
        "Content-Type": `multipart/form-data`,
        Authorization: `Beaer ${atk}`,
      },
    };
    try {
      const response = await http.post(
        "/product/createProduct",
        formData,
        headers
      );
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;
    const headers = {
      headers: {
        "Content-Type": `application/json`,
        Authorization: `Beaer ${atk}`,
      },
    };
    try {
      await http.delete(`/product/deleteProduct/${id}`, headers);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  const renderModalAddProduct = () => {
    return (
      <>
        <button
          onClick={handleOpenModal}
          className="block mb-3 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          type="button"
        >
          Add Product
        </button>
        {showModal && (
          <div
            id="myModal"
            className="modal fixed inset-0 bg-gray-500 bg-opacity-75 text-black flex justify-center items-center"
            onClick={handleCloseModal}
          >
            <div
              className="modal-content bg-white rounded-lg shadow-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleAddProduct}>
                <h3 className="font-bold text-2xl text-center mb-2 uppercase">
                  Create Product
                </h3>
                <div>
                  <p className="font-bold text-mainColor-color_D9D9D9">Name</p>
                  <input
                    type="text"
                    name="name"
                    className="w-[700px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                  />
                  <p className="font-bold 9">Price</p>
                  <input
                    type="text"
                    name="price"
                    className="w-[700px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                  />
                  <p className="font-bold">Description</p>
                  <input
                    type="text"
                    name="description"
                    className="w-[700px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                  />
                  <p className="font-bold">CategoryId</p>
                  <input
                    type="text"
                    name="categoryId"
                    className="w-[700px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                  />
                  <p className="font-bold">Img</p>
                  <input
                    onChange={(e) => handleAddfile(e.target.files)}
                    type="file"
                    className="w-[700px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    class="font-bold rounded-md p-3 mt-3 text-gray-50 bg-orange-500 hover:bg-orange-600"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </>
    );
  };
  const handleUpdateProduct = async (event, id) => {
    event.preventDefault();
    try {
      const formDataUpdate = new FormData(event.currentTarget);
      const headers = {
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Beaer ${atk}`,
        },
      };
      const response = await http.put(
        `/product/updateProduct/${id}`,
        formDataUpdate,
        headers
      );
      window.location.reload();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOpenModalUpdate = (product) => {
    setShowModalUpdate(true);
    setFormData({
      name: product.name,
      price: String(product.price),
      categoryId: String(product.categoryId),
    });
    setSelectedProduct(product);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const renderModalUpdateUser = () => {
    const handleCloseModal = () => {
      setShowModalUpdate(false);
    };
    return (
      <>
        {showModalUpdate && (
          <div
            id="myModal"
            className="modal fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
            onClick={handleCloseModal}
          >
            <div
              className="modal-content bg-white rounded-lg shadow-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <form
                className="text-black"
                onSubmit={(event) =>
                  handleUpdateProduct(event, selectedProduct?.id ?? 0)
                }
                encType="multipart/form-data"
              >
                <h3 className="font-bold text-2xl text-center mb-2 uppercase">
                  Update User
                </h3>

                <div>
                  <p className="font-bold">Name</p>
                  <input
                    type="text"
                    name="name"
                    value={formDataUpdate.name}
                    onChange={handleChange}
                    className="w-[700px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                  />
                  <p className="font-bold">Price</p>
                  <input
                    type="text"
                    name="price"
                    value={Number(formDataUpdate.price)}
                    onChange={handleChange}
                    className="w-[700px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                  />
                  <p className="font-bold">CategoryId</p>
                  <input
                    type="text"
                    name="categoryId"
                    value={formDataUpdate.categoryId}
                    onChange={handleChange}
                    className="w-[700px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className="font-bold rounded-md p-3 mt-3 text-black  bg-orange-500 hover:bg-orange-600"
                  >
                    Update Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </>
    );
  };
  const renderTitleProducts = () => {
    return (
      <div className="font-bold text-2xl">
        <div className="flex bg-white text-black p-5 ">
          <p className="flex-1 text-center">Image</p>
          <p className="flex-1 text-center">Name</p>
          <p className="flex-1 text-center">Price</p>
          <p className="flex-1 text-center">categoryId</p>
          <p className="flex-1 text-center">Actions</p>
        </div>
        {products?.map((product) => (
          <div className="flex p-6 bg-mainColor-color_hover text-mainColor-color_hover_text">
            <div className="flex-1 text-center  ">
              <img
                src={product?.imgUrl}
                alt={product?.name}
                className="top-0 left-0 w-full h-full"
              />
            </div>
            <p className="flex-1 text-center my-auto">{product?.name}</p>
            <p className="flex-1 text-center my-auto">
              {formatPrice(Number(product?.price))}
            </p>
            <p className="flex-1 text-center my-auto">{product?.categoryId}</p>
            <div className="flex-1 text-center my-auto">
              <button
                className="flex-1 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 mr-3"
                onClick={() => handleOpenModalUpdate(product)}
              >
                Edit
              </button>
              <button
                className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <div className="mx-32 mt-[150px] my-10">
        {renderModalAddProduct()}
        {renderModalUpdateUser()}
        {renderTitleProducts()}
      </div>
    </div>
  );
}
