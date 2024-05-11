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
      <h1 className="mx-20 text-4xl mb-10">Chi Tiết Sản Phẩm</h1>
      <div className="flex  mx-[200px] gap-10" key={product?.id}>
        <div className="col-span-1 mb-10">
          <img src={product?.imgUrl} alt="" className="h-[500px] w-[2000px]" />
        </div>
        <div className="col-span-1">
          <h3>Trà Sữa Bông</h3>
          <h1 className="text-[30px] pb-3 font-bold  capitalize">
            {product?.name}
          </h1>
          <div className="flex justify-between">
            <p className="py-5 text-[24px] font-bold ">
              price : {formatPrice(Number(product?.price))}
            </p>
          </div>
          <div className="py-5 text-[24px] font-bold ">Description</div>
          <p className="pb-2 text-[18px]  ">{product?.description}</p>

          <div className="">
            <button
              className=" col-span-2 border w-full px-5 py-4 hover:bg-mainColor-color_hover hover:text-mainColor-color_hover_text hover:border-mainColor-color_hover  "
              onClick={() => addItem(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
