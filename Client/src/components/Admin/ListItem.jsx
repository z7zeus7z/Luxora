import React, { useState } from 'react';
import style from '../../styles/Admin/Admin.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown,faChevronUp } from "@fortawesome/free-solid-svg-icons";
const ListItem = () => {
    const [productData,setProductData] = useState({
        name:"",
        price:"",
        description:"",
        measurement:"",
        color:"",
        category:"",
    })
    const [isOpen,setIsOpen] = useState(false);
    const [images, setImages] = useState([]);
    const [mainImage, setMainImage] = useState(null);
    const fileInputRef = React.useRef();

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
        ...prev,
        [name]: value,
    }));
    };
    const handleCategorySelect = (category) => {
    setProductData((prev) => ({
        ...prev,
        category,
    }));
    setIsOpen(false);
    }

    const handleFiles = (files) => {
    const imgArr = [...images];

    Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
            imgArr.push(reader.result);
            if (!mainImage) setMainImage(reader.result);

            setImages([...imgArr]);
        };
        reader.readAsDataURL(file);
    });
    };

    const handleDrop = (e) => {
        e.preventDefault();
        handleFiles(e.dataTransfer.files);
    };
    const handleSubmit = async () =>{
        const payload = {
            ...productData,
            images,
            mainImage
        };
        try
        {
            const res = await fetch("http://localhost:5000/api/products",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(payload),
            });
            const data = await res.json();
            if(!res.ok){
                alert(data.message||"Error saving product")
                return
            }
            alert("Product saved");
            setProductData({
                name: "",
                price: "",
                description: "",
                measurement: "",
                color: "",
                category: ""
            });
            setImages([]);
            setMainImage(null);
        }
        catch(err)
        {
            alert("Something went wrong");
            console.error(err)
        }
    }
    const icon = isOpen?faChevronUp:faChevronDown;
  return (
    <>
        <div className={style.listItemContainer}>
            <form >
                <div className={style.formInputs}>
                    <label htmlFor="">
                        Product Name *
                        <input required name='name' value={productData.name} onChange={handleInputChange}  placeholder='ProductName' type="text" />
                    </label>
                </div>
                 <div className={style.formInputs}>
                    <label htmlFor="">
                        Product Price *
                        <input required name='price' value={productData.price} onChange={handleInputChange} placeholder='ProductPrice' type="text" />
                    </label>
                </div>
                 <div className={style.formInputs}>
                    <label htmlFor="">
                        Product Description *
                        <input required name='description' value={productData.description} onChange={handleInputChange} placeholder='ProductDescription' type="text" />
                    </label>
                </div>
                <div className={style.formInputs}>
                    <label htmlFor="">
                        Product Measurement *
                        <input required name='measurement' value={productData.measurement}  onChange={handleInputChange} placeholder='ProductMeasurement' type="text" />
                    </label>
                </div>
                <div className={style.formInputs}>
                    <label htmlFor="">
                        Product Color *
                        <input required name='color' value={productData.color} onChange={handleInputChange} placeholder='ProductColor' type="text" />
                    </label>
                </div>
                <div className={style.dropDown}>
                    <p onClick={()=>setIsOpen(prev=>!prev)}>{productData.category || "Category"} <FontAwesomeIcon icon={icon}/></p>
                    
                    {isOpen&&(
                        <div className={style.dropDownOptions}>
                            <p  onClick={() => handleCategorySelect("Living Room")}>Living Room</p>
                            <hr />
                            <p  onClick={()=>handleCategorySelect("Bed Room")}>Bed Room</p>
                            <hr />
                            <p onClick={()=>handleCategorySelect("Kitchen")}> Kitchen</p>
                            <hr />
                        </div>
                    )}
                </div>
                <div className={style.formInputs}>
                    <label>
                        Product Images *
                    </label>

                    <div 
                        className={style.dropZone}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => handleDrop(e)}
                        onClick={() => fileInputRef.current.click()}
                    >
                        <p>Drag & Drop images or Click to upload</p>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            ref={fileInputRef}
                            onChange={(e) => handleFiles(e.target.files)}
                            style={{ display: "none" }}
                        />
                    </div>

                    <div className={style.previewContainer}>
                        {images.map((img, index) => (
                            <div 
                                key={index} 
                                className={`${style.previewBox} ${mainImage === img ? style.mainSelected : ""}`}
                                onClick={() => setMainImage(img)}
                            >
                                <img src={img} alt="preview" />
                                {mainImage === img && <span className={style.mainBadge}>MAIN</span>}
                            </div>
                        ))}
                    </div>
                </div>
                <button type='button' onClick={handleSubmit} className={style.addButton}>Add Product</button>
            </form>
        </div>
    </>
  )
}

export default ListItem