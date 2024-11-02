import React, { useEffect, useState } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../utility/AddToDb';

const ListedBooks = () => {
    const [ readList ,setReadList]= useState([]);

    const allBooks = useLoaderData();
    useEffect(() => {
        const storeReadList = getStoreReadList();
    
        // Now map over storeReadList (the result of the function call)
        // const storeReadListInt = storeReadList.map(id => parseInt(id));
        const storeReadListInt = storeReadList.map(id => parseInt(id)).filter(Number.isInteger);

        console.log(storeReadList, allBooks, storeReadListInt);

        const readBookList = allBooks.filter(book => storeReadListInt.includes(book.bookId))

 setReadList(readBookList)
    }, []);
    
    // ideally we will directly det 

    return (
        <div>
            <h3 className="text-3xl my-8">listed</h3>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read : {readList.length}</h2>
                </TabPanel>
                <TabPanel>
                    <h2>my wish list</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ListedBooks;