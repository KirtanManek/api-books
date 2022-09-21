import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";


export default function AddBook() {
    const navigate = useNavigate();
    const apiUrl = "https://631eb76058a1c0fe9f563037.mockapi.io/books";

    const [data, setData] = useState({});
    return (<>
        <div class="row justify-content-center bg-warning">
            <div class="col-auto">
                <table class="table table-responsive">
                    <div class="container-fluid">
                        <table class="table">
                            <thead>
                                <tr align="center">
                                    <th colspan="2"><h2>Book details</h2></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <h5>Book Image : </h5><br />
                                        <input style={{ width: "1000px" }} type="text" className="form-control" placeholder="Book Image" value={data.BookImage} onChange={(e) => {
                                            setData({ ...data, BookImage: e.target.value });
                                        }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Book Title : </h5><br />
                                        <input style={{ width: "1000px" }} type="text" className="form-control" placeholder="Book Title" value={data.BookTitle} onChange={(e) => {
                                            setData({ ...data, BookTitle: e.target.value });
                                        }} />
                                    </td>
                                </tr>
                                <tr height="10px">
                                    <td>
                                        <h5>Book Price : </h5><br />
                                        <input style={{ width: "1000px" }} type="text" className="form-control" placeholder="Book Price" value={data.BookPrice} onChange={(e) => {
                                            setData({ ...data, BookPrice: e.target.value });
                                        }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Book Pages : </h5><br />
                                        <input style={{ width: "1000px" }} type="text" className="form-control" placeholder="Book Pages" value={data.BookNumberOfPages} onChange={(e) => {
                                            setData({ ...data, BookNumberOfPages: e.target.value });
                                        }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Book Author : </h5><br />
                                        <input style={{ width: "1000px" }} type="text" className="form-control" placeholder="Book Author" value={data.BookAuthor} onChange={(e) => {
                                            setData({ ...data, BookAuthor: e.target.value });
                                        }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Book Description : </h5><br />
                                        <textarea rows="4" cols="133" placeholder="Book Description" onChange={(e) => {
                                            setData({ ...data, BookDescription: e.target.value });
                                        }}></textarea>
                                    </td>
                                </tr>
                                <tr align="center">
                                    <td>
                                        <button className="btn btn-warning" onClick={() => {
                                            fetch(apiUrl, {
                                                method: "POST",
                                                body: JSON.stringify(data),
                                                headers: {
                                                    "Content-Type": "application/json"
                                                }
                                            })
                                                .then((res) => {
                                                    navigate('../books');
                                                })
                                        }}>Add Book</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </table>
            </div>
        </div>
    </>);
}