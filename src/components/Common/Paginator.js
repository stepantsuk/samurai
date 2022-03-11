import React, { useState } from "react";
import styles from './Paginator.module.css';

export const Paginator = ({ onPageChanged, currentPage, totalUsersCount, pageSize, portionSize = 10 }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);

  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  //currentPage === p && styles.selectedPage

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }} >PREV</button>}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
          return <span onClick={(e) => { onPageChanged(p) }} className={currentPage === p ? styles.pageNumber + " " + styles.selectedPage : styles.pageNumber}>{p}</span>
        })}
      {portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
    </div>
  )
}


