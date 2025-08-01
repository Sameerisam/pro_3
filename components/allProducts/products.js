import Link from "next/link";


export default function Products({ product }) {

    console.log(product)
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img alt="" className="rounded-t-lg object-contain h-48 w-full" src={product.image} />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        ${product.price}
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
     {product.title}
    </p>
    <Link
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      href={`/product/${product.id}`}>
      Read more
      <svg
        aria-hidden="true"
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        fill="none"
        viewBox="0 0 14 10"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 5h12m0 0L9 1m4 4L9 9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </Link>
  </div>
</div>
  );
}
