import React from "react";
import styles from "./Paginator.module.css";

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    let pageNumber = props.currentPage;
    for (let i = (pageNumber - 1) > 0 ? (pageNumber - 1) : pageNumber; i <= (pagesCount > 10 ? (10 + pageNumber) : pagesCount); i++) {
        pages.push(i);
    }
    return <div>
        {pageNumber > 10 ?
            <span onClick={() => props.onPageChanged(1)}>1 </span> : null}
        {pages.map(p => {
            return <span key={p.id} onClick={() => {
                props.onPageChanged(p);
            }} className={pageNumber === p && styles.selectedPage}>{p} </span>
        })}
        {pagesCount > 0 ? <span
            onClick={() => props.onPageChanged(pagesCount)}>{pagesCount} </span> : null}
    </div>
}
export default Paginator;