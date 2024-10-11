import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const HomeBdy = () => {
    return (

        <div className="home-body">
            <style src="/src/components/typing.css"></style>
            <main className="home-content">
                <div className="photo-section">
                  
                
                {/* <!-- our services section --> */}
                <section className="py-10" id="services">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Welcome to my online Gallery and submission portal</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src="https://res.cloudinary.com/dvvin6oes/image/upload/t_nnn/v1727365292/work/IMG_5742_v6mo2y.jpg" alt="" className="w-full h-64 object-cover" />
                               
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Paintings</h3> 
                                    <p className="text-gray-700 text-base">**Welcome to the Sanctuary**: Step into a haven where tranquility and inspiration intertwine.</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src="https://res.cloudinary.com/dvvin6oes/image/upload/v1728498081/IMG_1451_zmmkqt_m4auxd.jpg" alt="Gram Flour Grinding" className="w-full h-64 object-cover" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Photography</h3>
                                    <p className="text-gray-700 text-base"> Discover the Story: Unveil the tapestry of a journey, woven with passion and captured with a lens.</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src="https://res.cloudinary.com/dvvin6oes/image/upload/v1727365246/work/IMG_1127_cogqim.jpg" alt="Jowar Flour Grinding" className="w-full h-64 object-cover" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Digital Media</h3>
                                    <h3 className="text-gray-700 text-base">Explore the Services: Dive into a realm of elevated Materials, and meaningful artistry crafted just for you.</h3>
                                        
                                        </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default HomeBdy;