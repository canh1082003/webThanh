import { useQuery } from "@tanstack/react-query";
import { PRODUCT_DETAIL_QUERY } from "../../../util/constants";
import { ProductDetailApi } from "../../../Api/Api.product";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { formatPrice } from "../../../helper/formatPrice";
function ProductDetail() {
  const { addItem } = useCart();
  const { id } = useParams();

  const { data: DataDetail } = useQuery({
    queryKey: [PRODUCT_DETAIL_QUERY, id],
    queryFn: () => {
      return ProductDetailApi(id);
    },
  });
  const product = DataDetail?.data;

  return (
    <div className="pt-[60px] ">
      <div className="grid grid-cols-2 mx-20 gap-10" key={product?.id}>
        <div className="col-span-1">
          <h1 className="text-[30px] pb-3 font-bold  capitalize">
            {product?.name}
          </h1>
          <div className="flex justify-between">
            <p className="py-5 text-[24px] font-bold ">
              price : {formatPrice(product?.price)}
            </p>
          </div>
          <div className="w-full h-[1px] bg-white my-3"></div>
          <div className="py-5 text-[24px] font-bold ">Description</div>
          <p className="pb-2 text-[18px]  ">{product?.description}</p>
          <div className="w-full h-[1px] bg-white my-5"></div>
          <div className="grid grid-cols-4 gap-1 py-5">
            <button
              className=" col-span-2 border w-full px-5 py-4 hover:bg-mainColor-color_hover hover:text-mainColor-color_hover_text hover:border-mainColor-color_hover  "
              onClick={() => addItem(product)}
            >
              Add to cart
            </button>
            <Link
              to={"/pay"}
              onClick={() => addItem(product)}
              className="col-span-2 border w-full text-center px-5 py-4  hover:bg-mainColor-color_hover hover:text-mainColor-color_hover_text hover:border-mainColor-color_hover "
            >
              Buy now
            </Link>
          </div>
        </div>
        <div className="col-span-1 mb-10">
          <img src={product?.imgUrl} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
