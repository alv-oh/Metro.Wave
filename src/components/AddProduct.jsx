import axios from "axios";
import { useState, useCallback } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AddProducts = () => {
    const [product_name, setProductName] = useState("");
    const [product_desc, setProductDesc] = useState("");
    const [product_cost, setProductCost] = useState("");
    const [product_photo, setProductPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const validateForm = () => {
        if (!product_name || !product_desc || !product_cost || !product_photo) {
            setError("All fields are required.");
            return false;
        }
        if (parseFloat(product_cost) <= 0) {
            setError("Please enter a valid product cost.");
            return false;
        }
        if (!["image/jpeg", "image/png"].includes(product_photo.type)) {
            setError("Only JPEG and PNG images are allowed.");
            return false;
        }
        if (product_photo.size > 2 * 1024 * 1024) { // 2MB limit
            setError("Product photo size must be less than 2MB.");
            return false;
        }
        return true;
    };

    const clearForm = () => {
        setProductName("");
        setProductDesc("");
        setProductCost("");
        setProductPhoto(null);
    };

    const submit = useCallback(async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!validateForm()) return;

        try {
            setLoading(true);

            const data = new FormData();
            data.append("product_name", product_name);
            data.append("product_desc", product_desc);
            data.append("product_cost", product_cost);
            data.append("product_photo", product_photo);

            const response = await axios.post("https://otanganyati.pythonanywhere.com/api/addproduct", data);

            setLoading(false);
            setSuccess(response.data.success);
            clearForm();

            // Clear success message after 3 seconds
            setTimeout(() => setSuccess(""), 3000);
        } catch (error) {
            setLoading(false);
            setError(error.response?.data?.message || "Something went wrong. Please try again.");
        }
    }, [product_name, product_desc, product_cost, product_photo]);

    return (
        <div className="row justify-content-center">
            <Navbar />
            <div className="text-dark">
                <h1 className="text-dark text-center mb-2">MetroWave</h1>
            </div>
            <div className="col-md-6 card shadow p-4" style={{ marginTop: "30px", marginBottom: "100px" }}>
                <h2><b>Add Product</b></h2>
                {loading && <b className="text-warning">Please wait as we process your request...</b>}
                {success && <div className="alert alert-success">{success}</div>}
                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={submit}>
                    <div className="mb-3">
                        <input 
                            type="text" 
                            value={product_name} 
                            placeholder="Enter Product Name" 
                            required 
                            className="form-control" 
                            aria-label="Product Name"
                            onChange={(e) => setProductName(e.target.value)} 
                        />
                    </div>

                    <div className="mb-3">
                        <textarea 
                            value={product_desc} 
                            placeholder="Enter Product Description" 
                            required 
                            className="form-control" 
                            aria-label="Product Description"
                            onChange={(e) => setProductDesc(e.target.value)} 
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <input 
                            type="number" 
                            value={product_cost} 
                            required 
                            placeholder="Enter Product Cost" 
                            className="form-control" 
                            aria-label="Product Cost"
                            onChange={(e) => setProductCost(e.target.value)} 
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="productPhoto" className="form-label"><b>Product Photo</b></label>
                        <input 
                            type="file" 
                            required  
                            className="form-control" 
                            id="productPhoto"
                            aria-label="Product Photo"
                            onChange={(e) => setProductPhoto(e.target.files[0])} 
                        />
                    </div>

                    <button className="btn btn-primary w-100" type="submit" disabled={loading}>
                        {loading ? "Submitting..." : "Add Product"}
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AddProducts;