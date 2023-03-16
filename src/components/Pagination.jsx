import React from "react";


function Pagination({
  itemsPerPage,
  allItems,
  paginado,
  currentPage,
}) {
  return (
    <nav class="d-flex flex-row align-items-center m-5 mb-1 mt-1 bg-transparent">
      {currentPage > 1 ? (
        <button class="pagination" onClick={() => paginado(currentPage - 1)}>{"<<"}</button>
      ) : null}
      {Array.from(
        { length: Math.ceil(allItems / itemsPerPage) },
        (e, i) => i + 1
      ).map((i) => (
        <button class="page-item border rounded-2 btn btn-outline-primary" key={i} onClick={() => paginado(i)}>
          {i}
        </button>
      ))}

      {currentPage < allItems / itemsPerPage ? (
        <button class="page-item" onClick={() => paginado(currentPage + 1)}>{">>"}</button>
      ) : null}
    </nav>
  );
}
export default Pagination;