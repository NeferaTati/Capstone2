import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import './home.css';

const HomeBdy = () => {
    return (

        <div className="home-body">
            <style src="/src/components/typing.css"></style>
            <main className="home-content">
                <div className="photo-section">
                    <div className="photo">
                        <img src="https://res.cloudinary.com/dvvin6oes/image/upload/t_nnn/v1727365292/work/IMG_5742_v6mo2y.jpg" alt="Description 1" />
                        <Link to="/Work">Work</Link>
                        <h2 className="typing-effect">Paintings</h2>
                        <p className="typing-effect">
                            **Welcome to the Sanctuary**: Step into a haven where tranquility and inspiration intertwine.
                        </p>
                    </div>
                    <div className="photo-item">
                        <img src="https://res.cloudinary.com/dvvin6oes/image/upload/t_nnn/v1727365261/work/IMG_1451_zmmkqt.heic" alt="Description 2" />
                        <Link to="/Work">Work</Link>
                        <h2 className="typing-effect">Photography</h2>
                        <p className="typing-effect"> Discover the Story: Unveil the tapestry of a journey, woven with passion and captured with a lens.</p>
                    </div>
                    <div className="photo-item">
                        <video 
                            src="https://res.cloudinary.com/dvvin6oes/video/upload/v1727365110/work/8B9D1B96-5F0B-4F61-B851-E11B78C65B18_dk3r3r.mp4"
                            controls
                            onError={(e) => console.error("Video error:", e.target.error)}
                        >
                            Your browser does not support the video tag.
                        </video>
                        <Link to="/AboutUs">/About</Link>
                        <h2 className="typing-effect">Videos</h2>
                        <p className="typing-effect"> Enjoy some video content, a part of a vibrant mosaic</p>
                    </div>
                    <div className="photo-item font-game">
                        <img src="https://res.cloudinary.com/dvvin6oes/image/upload/v1727447550/IMG_1127_xlryjw.jpg" alt="Description 3" />
                        <Link to="/Work">Work</Link>
                        <h2 className="typing-effect">Digital Media</h2>
                        <p className="typing-effect">Explore the Services: Dive into a realm of elevated Materials, and meaningful artistry crafted just for you.</p>
                    </div>
                </div>
                {/* <!-- our services section --> */}
                <section className="py-10" id="services">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src="https://image3.jdomni.in/banner/13062021/42/5C/B1/45AC18B7F8EE562BC3DDB95D34_1623559815667.png?output-format=webp" alt="Wheat Flour Grinding" className="w-full h-64 object-cover" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">Wheat Flour Grinding</h3>
                                    <p className="text-gray-700 text-base">Our wheat flour grinding service provides fresh, high-quality flour to businesses and individuals in the area. We use state-of-the-art equipment to grind wheat into flour, and we offer a variety of flours to meet the needs of our customers.</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1606854428728-5fe3eea23475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhbSUyMGZsb3VyfGVufDB8fDB8fHww" alt="Gram Flour Grinding" className="w-full h-64 object-cover" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">Gram Flour Grinding</h3>
                                    <p className="text-gray-700 text-base">Our gram flour is perfect for a variety of uses, including baking, cooking, and making snacks. It is also a good source of protein and fiber. Our gram flour grinding service is a convenient and affordable way to get the freshest gram flour possible.</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src="https://image2.jdomni.in/banner/13062021/D2/99/0D/48D7F4AFC48C041DC8D80432E9_1623562146900.png?output-format=webp" alt="Jowar Flour Grinding" className="w-full h-64 object-cover" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">Jowar Flour Grinding</h3>
                                    <h3 className="text-gray-700 text-base">Our jowar grinding service is a convenient and affordable way to get fresh, high-quality jowar flour. We use state-of-the-art equipment to grind jowar into a fine powder, which is perfect for making roti, bread, and other dishes.
                                        <details>
                                            <p>Our jowar flour is also a good source of protein and fiber, making it a healthy choice for your family.</p>
                                        </details>
                                    </h3>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1607672632458-9eb56696346b?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Chilli Pounding" className="w-full h-64 object-cover" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">Chilli Pounding</h3>
                                    <h3 className="text-gray-700 text-base">We specialize in the production of high-quality chili powder. Our chili powder is made from the finest, freshest chilies, and we use traditional pounding methods to ensure that our chili powder retains its full flavor and aroma.
                                        <details>
                                            <p>We offer a variety of chili powder products, including mild, medium, and hot. We also offer custom blends to meet the specific needs of our customers.</p>
                                        </details>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomeBdy;