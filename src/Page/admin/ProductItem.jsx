import { formatPrice } from "../../helper/formatPrice";

const ProductItem = ({ product }) => {
  const { name, description, price } = product;
  return (
    <tr className="border-b dark:border-gray-700 ">
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="px-4 py-3 max-w-[12rem] truncate">{description}</td>
      <td className="px-4 py-3">{formatPrice(price)}</td>
      <td className="px-4 py-3 flex items-center justify-end"></td>
    </tr>
  );
};
export default ProductItem;
