import React from "react";
import styles from "./Paginator.module.css";

const SpanBlock = ({spanText, onClick = null, boldClass = false}) =>
    <span onClick={onClick}
          className={styles.paginator + ' ' + (boldClass && styles.selectedPage)}>{spanText}</span>

const Paginator = ({currentPage, onPageChanged, ...props}) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    const firstPageCallback = page => currentPage > 1 ? () => {
        onPageChanged(page)
    } : null;
    let pNumber;
    if (currentPage < 6) {
        pNumber = 2
    } else if (currentPage > (pagesCount - 5)) {
        pNumber = pagesCount - 7;
    } else {
        pNumber = currentPage - 3
    }

    for (let i = pNumber; i < pNumber + 7; i++) {
        pages.push(i);
    }


    return <div style={{margin: '10px'}}>
        <SpanBlock onClick={firstPageCallback(currentPage - 1)}
                   spanText='&laquo;'/>

        <SpanBlock boldClass={currentPage === 1} onClick={firstPageCallback(1)}
                   spanText='1'/>

        {currentPage > 5 && <SpanBlock spanText={"..."}/>}

        {pages.map(p => {
            return <SpanBlock onClick={currentPage !== p ? () => {
                onPageChanged(p)
            } : null} boldClass={currentPage === p} key={p}
                              spanText={p}/>
        })}

        {currentPage < pagesCount - 4 && <SpanBlock spanText={"..."}/>}

        <SpanBlock boldClass={currentPage === pagesCount}
                   onClick={(currentPage !== pagesCount) ? () => {
                       onPageChanged(pagesCount)
                   } : null} spanText={pagesCount}/>

        <SpanBlock onClick={(currentPage < pagesCount) ? () => {
            onPageChanged(currentPage + 1)
        } : null} spanText='&raquo;'/>
        
    </div>
}
export default Paginator;