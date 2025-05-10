import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";
import "./GetProducts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const ProductCard = ({ product, img_url, navigate }) => (
    <div className="product-card">
        <div className="product-card-inner">
            <img 
                src={img_url + product.product_photo} 
                alt={product.product_name || "Product Image"} 
                className="product-img" 
            />
            <div className="product-info">
                <h5 className="product-name">{product.product_name}</h5>
                <p className="product-desc">{product.product_desc.slice(0, 90)}...</p>
                <b className="product-price">{product.product_cost}/=</b>
                <button 
                    className="btn btn-dark mt-2 w-100"
                    onClick={() => navigate("/singleproduct", { state: { product } })}
                >
                    View Details
                </button>
            </div>
        </div>
    </div>
);

const GetProducts = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const img_url = "https://otanganyati.pythonanywhere.com/static/images/";
    const navigate = useNavigate();

    const getProducts = async () => {
        setError("");
        setLoading(true);

        try {
            const response = await axios.get("https://otanganyati.pythonanywhere.com/api/getproduct");
            setProducts(response.data);
            setFilteredProducts(response.data); // Initialize filtered products
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        // Filter products based on the search term
        const filtered = products.filter((product) =>
            product.product_name.toLowerCase().includes(value) ||
            product.product_desc.toLowerCase().includes(value)
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="container-fluid">
            <Navbar />
            <Carousel />
            <h3 className="mt-5 text-center"><b>Available Products</b></h3>
            <br />

            {/* Search Bar */}
            <div className="d-flex justify-content-center mb-4">
                <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Search for products..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            {loading && (
                <div className="d-flex justify-content-center my-3">
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {error && <b className="text-danger d-block text-center">{error}</b>}

            <div className="product-grid">
                {filteredProducts.map((product) => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        img_url={img_url} 
                        navigate={navigate} 
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default GetProducts;