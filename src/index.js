import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Components/Layout';
import EditBook from './Components/EditBook';
import AddBook from './Components/AddBook';
import AllBooks from './Components/AllBooks';
import BookDetail from './Components/BookDetail';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/books" element={<AllBooks />} />
                <Route path="/books/:id" element={<BookDetail />} />
                <Route path="/books/add" element={<AddBook />} />
                <Route path="/books/edit/:id" element={<EditBook />} />
            </Route>
        </Routes>
    </BrowserRouter>
);