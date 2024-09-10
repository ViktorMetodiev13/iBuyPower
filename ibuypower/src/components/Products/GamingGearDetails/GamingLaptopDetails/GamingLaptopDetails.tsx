import '../productDetails.css'

import React from "react";

import img1 from '../../../../assets/gamingGearImages/gaming_laptops_image_details/img1.avif'
import img2 from '../../../../assets/gamingGearImages/gaming_laptops_image_details/img2.avif'
import img3 from '../../../../assets/gamingGearImages/gaming_laptops_image_details/img3.avif'
import img4 from '../../../../assets/gamingGearImages/gaming_laptops_image_details/img4.avif'
import img5 from '../../../../assets/gamingGearImages/gaming_laptops_image_details/img5.avif'
import img6 from '../../../../assets/gamingGearImages/gaming_laptops_image_details/img6.avif'
import windows11Img from '../../../../assets/gamingGearImages/Window_11_img.avif';

export const GamingLaptopDetail: React.FC = () => {
    return (
        <div className="gaming-gear-details">
            <div className="gaming-gear-details-images-and-briefInfo-section">
                <div className="gaming-gear-details-images-list">
                    <img src={img1} alt="Chimera NP9373V Gaming Laptop" className='gaming-gear-details-image-item' />
                    <img src={img2} alt="Chimera NP9373V Gaming Laptop" className='gaming-gear-details-image-item' />
                    <img src={img3} alt="Chimera NP9373V Gaming Laptop" className='gaming-gear-details-image-item' />
                    <img src={img4} alt="Chimera NP9373V Gaming Laptop" className='gaming-gear-details-image-item' />
                    <img src={img5} alt="Chimera NP9373V Gaming Laptop" className='gaming-gear-details-image-item' />
                    <img src={img6} alt="Chimera NP9373V Gaming Laptop" className='gaming-gear-details-image-item' />
                </div>

                <div className="gaming-gear-details-briefInfo">
                    <img src={windows11Img} alt="windows11" />

                    <span className='playtime-anytime'>Playtime. Anytime.</span>

                    <h2 className="gaming-gear-details-briefInfo-title">Chimera NP9373V Gaming Laptop</h2>

                    <div className="gaming-gear-details-briefInfo-price-section">
                        <span className="gaming-gear-details-briefInfo-price-section-save">Save $200</span>

                        <div className="gaming-gear-details-briefInfo-payments">
                            <div className="gaming-gear-details-briefInfo-price-old-new">
                                <span className="gaming-gear-details-briefInfo-price-new">$2,399</span>
                                <span className="gaming-gear-details-briefInfo-price-old">$2,599</span>
                            </div>

                            <span className="gaming-gear-details-briefInfo-monthly-payment">Starting at <span className='monthly-payment-amount'>$116/mo</span> with Affirm</span>
                        </div>

                        <div className="gaming-gear-details-briefInfo-status-shipment">
                            <span className="gaming-gear-details-briefInfo-status">In Stock</span>
                            <span className="gaming-gear-details-briefInfo-shipment">The estimated ship date is July 2024.</span>
                        </div>

                        <div className="gaming-gear-details-briefInfo-specifications">
                            <h4 className="gaming-gear-details-briefInfo-specifications-title">Specification</h4>

                            <div className="gaming-gear-details-briefInfo-specifications-table">
                                <div className="gaming-gear-details-briefInfo-specifications-table-entry">
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-key">Operating System</p>
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-value">Windows 11 Home <span className='gaming-gear-details-briefInfo-specifications-table-entry-value-special-text'>[(64-bit)]</span></p>
                                </div>
                                <div className="gaming-gear-details-briefInfo-specifications-table-entry">
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-key">Display</p>
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-value">Windows 11 Home <span className='gaming-gear-details-briefInfo-specifications-table-entry-value-special-text'>[(64-bit)]</span></p>
                                </div>
                                <div className="gaming-gear-details-briefInfo-specifications-table-entry">
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-key">Operating System</p>
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-value">Windows 11 Home <span className='gaming-gear-details-briefInfo-specifications-table-entry-value-special-text'>[(64-bit)]</span></p>
                                </div>
                                <div className="gaming-gear-details-briefInfo-specifications-table-entry">
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-key">Operating System</p>
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-value">Windows 11 Home <span className='gaming-gear-details-briefInfo-specifications-table-entry-value-special-text'>[(64-bit)]</span></p>
                                </div>
                                <div className="gaming-gear-details-briefInfo-specifications-table-entry">
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-key">Operating System</p>
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-value">Windows 11 Home <span className='gaming-gear-details-briefInfo-specifications-table-entry-value-special-text'>[(64-bit)]</span></p>
                                </div>
                                <div className="gaming-gear-details-briefInfo-specifications-table-entry">
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-key">Operating System</p>
                                    <p className="gaming-gear-details-briefInfo-specifications-table-entry-value">Windows 11 Home <span className='gaming-gear-details-briefInfo-specifications-table-entry-value-special-text'>[(64-bit)]</span></p>
                                </div>
                            </div>
                        </div>

                        <button className="gaming-gear-details-briefInfo-add-to-cart-btn">
                            <span className="gaming-gear-details-briefInfo-add-to-cart-btn-text">Add to Cart</span>
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}