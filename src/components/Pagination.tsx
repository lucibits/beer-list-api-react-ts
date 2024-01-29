import React, { useEffect, useState } from "react";
// totalBeers 325

// Prev-Next Button component
interface PrevNextButton {
  name: string;
  onClick: () => void;
}
function PrevNextButton({ name, onClick }: PrevNextButton) {
  return <button onClick={onClick}>{name}</button>;
}

// Pagination component
interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (event: number) => void;
}

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  let pages: number[] = [];
  let maxPages = Math.ceil(totalItems / itemsPerPage);
  let amountOfPages = 5;

  const [fromPage, setFromPage] = useState<number>(1);
  let toPage = fromPage + amountOfPages;

  if (fromPage + toPage - 1 < amountOfPages) {
    toPage += amountOfPages - (fromPage + toPage) + 1;
  }
  for (let i = fromPage; i <= toPage; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <PrevNextButton
        name="Past"
        onClick={() => {
          if (fromPage - amountOfPages < 1) {
            setFromPage(1);
          } else {
            setFromPage(fromPage - amountOfPages);
          }
        }}
      />
      {pages.map((page: number, index: number) => {
        return (
          <button
            key={index}
            className={page == currentPage ? "active" : ""}
            onClick={() => {
              setCurrentPage(page);
            }}
          >
            {page}
          </button>
        );
      })}
      <PrevNextButton
        name="Next"
        onClick={() => {
          if (fromPage + amountOfPages < maxPages) {
            setFromPage(fromPage + amountOfPages);
          } else {
            setFromPage(maxPages - amountOfPages);
          }
        }}
      />
    </div>
  );
}
