import { useQuery } from "@tanstack/react-query";
import { Category, productApi } from "../../Api/Api.product";
import useQueryParams from "../../util/useQueryParams";
import { useState } from "react";
import { Link, createSearchParams } from "react-router-dom";
import { formatPrice } from "../../helper/formatPrice";

import { useAllProduct } from "../../hook/useAllProduct";
import { Bars4Icon } from "@heroicons/react/20/solid";

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
    <div className=" bg-white mt-[90px] top-[100px]   left-0 right-0 py-5  w-full cursor-pointer font-bold text-xl">
      <div className="flex  mx-10 justify-between  ">
        <div className="">
          <input
            type="search"
            onChange={change}
            placeholder="Tìm Kiếm Sản Phẩm"
            className=" text-white rounded-xl px-9 py-2 font-medium text-[14px] outline-none ml-[80px] border border-1 bg-black"
          />
        </div>

        <div
          className="relative flex gap-3 text-lg "
          onClick={() => setShowPopover(!showPopover)}
        >
          <Bars4Icon className="stroke-black w-8 h-8 mr-6" />
        </div>
        {showPopover && (
          <div className="absolute top-[160px] right-10  bg-black text-white text-mainColor-color_hover_text z-20 ">
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
                    className={` block py-4 font-medium px-10   font-text capitalize border-b ${isActive ? "bg-mainColor-color_hover" : ""}  `}
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
        <div className=" col-span-4 bg-black mt-10 rounded-xl">
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
                        <div className=" z-0 text-white">
                          <div className="w-full  pt-[100%] relative  ">
                            <img
                              src={product.imgUrl}
                              alt=""
                              className="absolute  top-0 left-0 w-full h-full object-cover"
                            />
                          </div>
                          <div className=" p-2 flex mt-4">
                            <div className="min-h-[2rem] text-lg font-bold line-clamp-2 flex-1">
                              {product.name}
                            </div>
                            <span className="text-xl">
                              {formatPrice(product.price * 1)}
                            </span>
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
