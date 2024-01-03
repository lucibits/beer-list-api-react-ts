import React from "react";
// totalBeers 325

// Prev-Next Button component
interface PrevNextButton {
  name: string;
  onClick: () => void;
}
function PrevNextButton({ name, onClick }: PrevNextButton) {
  return <button onClick={onClick}>{name}</button>;
}

// When I click > I want to tell the currentpage has changed to the next one
//

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

  let fromPage = Math.max(1, currentPage - Math.floor(amountOfPages / 2));
  let toPage = Math.min(maxPages, currentPage + Math.floor(amountOfPages / 2));

  if (fromPage + toPage - 1 < amountOfPages) {
    toPage += amountOfPages - (fromPage + toPage) + 1;
  }
  for (let i = fromPage; i <= toPage; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <PrevNextButton name="Previous" onClick={() => console.log("Previous")} />
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
      <PrevNextButton name="Next" onClick={() => console.log("Next")} />
    </div>
  );
}
