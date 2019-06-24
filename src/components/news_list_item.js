import React from 'react';
import styles from '../css/styles.css';
import classes from '*.module.css';


const NewsListItems = ({item}) => {

    return(
        <div className={classes.new_item}>
        <h3>{item.title}</h3>
        <div>
            {item.feed}
        </div>
    </div>
    )
}

export default NewsListItems;