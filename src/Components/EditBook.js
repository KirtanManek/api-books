import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EditBook(){
    const param = useParams();
    const navigate = useNavigate();
    const apiUrl = "https://631eb76058a1c0fe9f563037.mockapi.io/books";

    useEffect(() => {
        fetch(apiUrl + "/" + param.id, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, [param.id]);

    const [data, setData] = useState({});

    return(<>
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
                                        <input style={{ width: "1000px" }} value={data.BookImage} type="text" className="form-control" placeholder="Book Image" onChange={(e) => {
                                            setData({ ...data, BookImage: e.target.value });
                                        }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Book Title : </h5><br />
                                        <input style={{ width: "1000px" }} value={data.BookTitle} type="text" className="form-control" placeholder="Book Title" onChange={(e) => {
                                            setData({ ...data, BookTitle: e.target.value });
                                        }} />
                                    </td>
                                </tr>
                                <tr height="10px">
                                    <td>
                                        <h5>Book Price : </h5><br />
                                        <input style={{ width: "1000px" }} value={data.BookPrice} type="text" className="form-control" placeholder="Book Price" onChange={(e) => {
                                            setData({ ...data, BookPrice: e.target.value });
                                        }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Book Pages : </h5><br />
                                        <input style={{ width: "1000px" }} value={data.BookNumberOfPages} type="text" className="form-control" placeholder="Book Pages" onChange={(e) => {
                                            setData({ ...data, BookNumberOfPages: e.target.value });
                                        }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Book Author : </h5><br />
                                        <input style={{ width: "1000px" }} value={data.BookAuthor} type="text" className="form-control" placeholder="Book Author" onChange={(e) => {
                                            setData({ ...data, BookAuthor: e.target.value });
                                        }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Book Description : </h5><br />
                                        <textarea value={data.BookDescription} rows="4" cols="133" placeholder="Book Description" onChange={(e) => {
                                            setData({ ...data, BookDescription: e.target.value });
                                        }}></textarea>
                                    </td>
                                </tr>
                                <tr align="center">
                                    <td>
                                        <form>
                                            <input value="Edit Book" className="btn btn-warning" onClick={() => {
                                                fetch(apiUrl + "/" + param.id, {
                                                    method: "PUT",
                                                    body: JSON.stringify(data),
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    }
                                                })
                                                    .then((res) => {
                                                        navigate('../books');
                                                    })
                                            }} />
                                        </form>
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