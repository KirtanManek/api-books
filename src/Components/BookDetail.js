import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BookDetail() {
    const param = useParams();

    const apiUrl = "https://631eb76058a1c0fe9f563037.mockapi.io/books";

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(apiUrl + "/" + param.id, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, [param.id]);

    return(<>
        <div className="row justify-content-center bg-warning me-0">
            <div className="col-auto mt-5">
                <table className="table table-responsive">
                    <div className="container-fluid">
                        <table className="table">
                            <thead>
                                <tr align="center">
                                    <th colSpan="2"><h2>Book details</h2></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan="5">
                                        <img width="675px"
                                            className="mt-2"
                                            src={data.BookImage}
                                            alt="" />
                                    </td>
                                    <td>
                                        <h5>Book Name : <span className="text-success">{data.BookTitle}</span></h5>
                                    </td>
                                </tr>
                                <tr height="10px">
                                    <td>
                                        <h5>Book Price : <span className="text-success">{data.BookPrice}</span></h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Book Pages : <span className="text-success">{data.BookNumberOfPages}</span></h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Book Author : <span className="text-success">{data.BookAuthor}</span></h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Book Description : </h5><br />
                                        <h5><span className="text-success">{data.BookDescription}</span></h5>
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