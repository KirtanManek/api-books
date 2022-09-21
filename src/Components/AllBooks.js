import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AllBooks() {
    const navigate = useNavigate();
    const apiUrl = "https://631eb76058a1c0fe9f563037.mockapi.io/books";

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    const formatedData = data.map((book) => {
        return <>{
            <div className="col col-md-3">
                <div className="card ms-2 mt-4 mb-4 bg-info">
                    <img className="card-img-top w-50 h-50 mx-auto mt-2" src={book.BookImage} alt="Card cap" />
                    <div className="card-body text-center">
                        <h5 className="card-title link" onClick={() => { navigate('/books/' + book.id); }}>{book.BookTitle}</h5>
                        <h6>Author : {book.BookAuthor}</h6>
                        <h6>Price : {book.BookPrice}$</h6>
                        <div className="m-1">
                            <Link to="" className="btn btn-danger me-5" onClick={() => {
                                fetch(apiUrl + "/" + book.id, { method: "DELETE" })
                                    .then(res => {
                                        fetch(apiUrl)
                                            .then(res => res.json())
                                            .then(res => setData(res));
                                    });
                            }}>Delete</Link>
                            <Link to={"../books/edit/" + book.id} className="btn btn-warning m-auto">&nbsp;&nbsp;Edit&nbsp;&nbsp;</Link>
                        </div>
                    </div>
                </div>
            </div>
        }</>
    });


    return (<>
        <div className="row">
            {formatedData}
        </div>
    </>);

}