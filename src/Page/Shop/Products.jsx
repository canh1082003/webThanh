import { useQuery } from "@tanstack/react-query";
import { Category, productApi } from "../../Api/Api.product";
import useQueryParams from "../../util/useQueryParams";
import { useState } from "react";
import { Link, createSearchParams } from "react-router-dom";
import { formatPrice } from "../../helper/formatPrice";

import { useAllProduct } from "../../hook/useAllProduct";

function Products() {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const queryParams = useQueryParams();
  const { data } = useAllProduct(queryParams);
  const { data: DataCategory } = useQuery({
    queryKey: ["Category"],
    queryFn: () => {
      return Category();
    },
  });
  const change = (e) => {
    setSearch(e.target.value);
  };
  const handleShowAllProducts = () => {
    setShowAll(true);
  };
  const handleCategoryClick = (categoryId) => {
    setActiveCategoryId(categoryId);
  };

  return (
    <div className=" top-[100px]   left-0 right-0 py-5  w-full cursor-pointer font-bold text-xl">
      <div className=" flex mx-10 justify-between  ">
        <div className="">
          <input
            type="search"
            onChange={change}
            placeholder="search products here"
            className="rounded-full text-black px-3 py-2 font-medium text-[14px] outline-none"
          />
        </div>
        <Link to={"/danhsach"} className="text-3xl uppercase">
          Product
        </Link>
        <div
          className="relative flex gap-3 text-lg "
          onClick={() => setShowPopover(!showPopover)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </div>
        {showPopover && (
          <div className="absolute top-[160px] right-10  bg-white text-mainColor-color_hover_text z-20 ">
            {DataCategory &&
              DataCategory.data.map((Category) => {
                const isActive = Category.id === activeCategoryId;
                return (
                  <Link
                    to={{
                      pathname: "/danhsach",
                      search: createSearchParams({
                        ...queryParams,
                        category: Category.id,
                      }).toString(),
                    }}
                    className={` block py-4 font-medium px-2   font-text capitalize border-b ${isActive ? "bg-mainColor-color_hover" : ""}  `}
                    onClick={() => handleCategoryClick(Category.id)}
                    key={Category.id}
                  >
                    {Category.name}
                  </Link>
                );
              })}
          </div>
        )}
      </div>
      <div className="grid grid-cols-4 mx-32">
        <div className=" col-span-4 bg-white mt-10 bg-opacity-50">
          <div className="my-10">
            <div className="grid grid-cols-3 gap-6 mx-10 pt-5">
              {data &&
                data.data.products
                  .slice(0, showAll ? data.data.products.length : 6)
                  .filter((product) => {
                    return search.toLowerCase() === ""
                      ? product
                      : product.name.toLowerCase().includes(search);
                  })
                  .map((product) => (
                    <div
                      key={product.id}
                      className="col-span-1 hover:scale-95 "
                    >
                      <Link to={`/${product.id}`}>
                        <div className=" z-0">
                          <div className="w-full  pt-[100%] relative  ">
                            <img
                              src={product.imgUrl}
                              alt=""
                              className="absolute  top-0 left-0 w-full h-full object-cover"
                            />
                          </div>
                          <div className=" p-2">
                            <div className="min-h-[2rem] text-lg font-bold line-clamp-2">
                              {product.name}
                            </div>
                            <div className="mt-3 flex justify-between">
                              <div className="ml-1 truncate text-orange">
                                <span className="text-sm">
                                  {formatPrice(product.price * 1)}
                                </span>
                              </div>
                              <div className="text-mainColor-color_2D0000 font-medium text-[13px]">
                                chi tiết sản phẩm
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
            </div>
            <div className="mt-20">
              <div className="text-center font-bold">
                <button
                  className="border border-white text-white px-5 py-3 rounded-full hover:bg-mainColor-color_hover hover:text-mainColor-color_hover_text hover:border-none"
                  onClick={handleShowAllProducts}
                >
                  Show all
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
