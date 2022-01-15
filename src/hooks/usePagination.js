import { useState } from 'react';

const usePagination = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const changePage = (newPage) => setPage(newPage);

  const changePerPage = (newPerPage) => {
    setPerPage(newPerPage);
    setPage(1);
  };

  return {
    page,
    perPage,
    changePage,
    changePerPage,
  };
};

export default usePagination;
