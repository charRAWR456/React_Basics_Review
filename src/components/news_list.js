import React from 'react';

import NewsListItems from './news_list_item';


const NewsList = (props) =>{

    const items = props.news.map((item)=>{
        return(
            <NewsListItems key={item.id} item={item}/>
        
        )
    })
    
    return (
        <div>
            {props.children}
            {items}
        </div>
    )
}

export default NewsList;