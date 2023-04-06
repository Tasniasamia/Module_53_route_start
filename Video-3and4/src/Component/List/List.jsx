import React from 'react';

const List = (props) => {
    let propsitem=props.sendindex;
    return (
        <>
      <li className='md:mr-4'><a href={propsitem.path}>{propsitem.name}</a></li>

            
        </>
    );
};

export default List;