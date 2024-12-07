import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("category"));
  // console.log(searchParams.get("query"));
  // console.log([...searchParams.entries()]);
  const handleFilter = (e) => {
    e.preventDefault();
    const form = Object.fromEntries([...new FormData(e.target)]);
    setSearchParams(form);
  };
  return (
    <div>
      <h1>Products</h1>
      <h2>Category: {searchParams.get("category")}</h2>
      <h2>Query: {searchParams.get("query")}</h2>
      <form action="" onSubmit={handleFilter}>
        <select name="category">
          <option value="">All</option>
          <option value="computer">Computer</option>
          <option value="phone">Phone</option>
        </select>
        <input type="search" name="query" placeholder="Query..." />
        <button>Filter</button>
      </form>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        dignissimos magni mollitia repudiandae fugiat, itaque suscipit
        laudantium dolore ratione exercitationem odio sed voluptates inventore
        rerum autem dolorum neque alias maiores.
      </p>
    </div>
  );
};

export default Products;
