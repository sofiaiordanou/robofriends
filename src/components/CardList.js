import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => { 
    return (
        <div>
            {
                robots.map((user, index) => {
                    return (
                        <Card 
                          key={index} 
                          id={robots[index].id} 
                          name={robots[index].name} 
                          email={robots[index].email}
                        />
                    );
                })
            }
        </div>
        
    );
}

export default CardList;

/*
In line 6
     return <Card key={index} id={r........
key prop should have something that doesn't change. E.g.
index could change if array items get moved. So a better 
key in this case would be something unique like id.
*/ 