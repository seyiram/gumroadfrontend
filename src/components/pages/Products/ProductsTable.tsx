import React from "react";
import "./ProductsTable.css";
import IconCardImageFill from "./svgs/IconCardImageFill";
import { NavLink } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";

type Product = {
  id: number;
  name: string;
  sales_count: number;
  revenue: string;
  price: string;
  status: string;
  url: string;
  published: boolean;
  currency: string;
};

const ProductsTable: React.FC = () => {
  const { data: productsData } = useProducts();

  console.log("Products Data HERE:", productsData);

  const products =
    productsData?.map((productData: Product) => ({
      id: productData.id,
      name: productData.name || "No name",
      sales_count: productData.sales_count || 0,
      revenue:
        productData.sales_count && productData.price
          ? `$${productData.sales_count * parseFloat(productData.price)}`
          : "$0",
      price: productData.price || "No price",
      status: productData.published ? "Published" : "Unpublished",
      url: productData.url || "No URL",
      published: productData.published || false,
      currency: productData.currency,
    })) || [];

  const totalSales = products.reduce(
    (acc: number, product: Product) => acc + product.sales_count,
    0
  );
  const totalRevenue = products.reduce(
    (acc: number, product: Product) =>
      acc + parseFloat(product.revenue.substring(1))
  );

  console.log("Products here from the databse: ", products);
  return (
    <div className="table-container">
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Sales</th>
            <th>Revenue</th>
            <th>Price</th>
            <th>Status</th>
            {}
          </tr>
        </thead>
        <tbody>
          {products?.map((product: Product) => (
            <tr key={product.id}>
              <td className="icon-cell">
                <IconCardImageFill />
              </td>
              <td>
                <div className="product-name">
                  <div className="product-name-wrapper">
                    <span className="product-name-title">{product.name}</span>
                    <NavLink to={product.url} className="product-url">
                      {product.url}
                    </NavLink>
                  </div>
                </div>
              </td>
              <td data-title="Sales">{product.sales_count}</td>
              <td data-title="Revenue">{product.revenue}</td>
              <td data-title="Price">
                {product.currency}
                {product.price}
              </td>
              <td data-title="Status">{product.status}</td>
              <td>...</td>
            </tr>
          ))}
          {}
          <tr className="totals-row">
            <td>Totals</td>
            <td></td>
            <td>{totalSales.toString()}</td>
            <td>{products[0]?.currency}{typeof totalRevenue === 'number' || 0}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
