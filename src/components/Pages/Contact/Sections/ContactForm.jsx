import React, { useState } from 'react'
import SvgIcon from '../../../../../public/images/Svgicon'
import { Link } from 'react-router-dom'

const ContactForm = () => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const stores = [
        {
            city: 'New York',
            name: 'Store in New York',
            address: '123 Broadway, New York, NY',
            email: 'nystore@example.com',
            mapLink: 'https://maps.example.com/newyork',
        },
        {
            city: 'Los Angeles',
            name: 'Store in Los Angeles',
            address: '456 Sunset Blvd, Los Angeles, CA',
            email: 'lastore@example.com',
            mapLink: 'https://maps.example.com/losangeles',
        },
        {
            city: 'Chicago',
            name: 'Store in Chicago',
            address: '789 Lakeshore Dr, Chicago, IL',
            email: 'chicagostore@example.com',
            mapLink: 'https://maps.example.com/chicago',
        },
        {
            city: 'Houston',
            name: 'Store in Houston',
            address: '101 Main St, Houston, TX',
            email: 'houstonstore@example.com',
            mapLink: 'https://maps.example.com/houston',
        },
        {
            city: 'San Francisco',
            name: 'Store in San Francisco',
            address: '202 Market St, San Francisco, CA',
            email: 'sfstore@example.com',
            mapLink: 'https://maps.example.com/sanfrancisco',
        },
    ];

    const handleSearch = () => {
        const filteredResults = stores.filter((store) =>
            store.city.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Reset the form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <div className="flex sm:flex-col lg:flex-row sm:items-center sm:gap-10 lg:gap-0 lg:items-start justify-between sm:px-1 lg:px-32 sm:py-5 md:py-10 lg:py-20">
            <div className="flex flex-col gap-4 ">
                <div>
                    <h1 className="font-playfair sm:text-xl lg:text-5xl font-[600]">We Are Here To Help You!</h1>
                    <h1 className="font-playfair sm:text-xl lg:text-5xl font-[600]">Please Contact Us.</h1>
                </div>
                <div>
                    <div className="flex py-2">
                        <input
                            type="text"
                            name="location"
                            placeholder="Enter your city"
                            className="sm:w-full md:w-[60%] h-10 border-2 rounded-l-xl bg-gray-100 border-gray-300 text-gray-700 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <div
                            className="bg-pink px-5 py-3 h-10 rounded-r-xl cursor-pointer flex "
                            onClick={handleSearch}
                        >
                            <SvgIcon iconName="searchWhite" className="w-5 h-auto" />
                        </div>
                    </div>
                    <div >
                        {results.length > 0 ? (
                            results.map((store, index) => (
                                <div key={index} className="mt-4 flex flex-col gap-2 font-playfair">
                                    <h1 className="font-medium text-2xl">{store.name}</h1>
                                    <h3 className="text-gray-700">{store.address}</h3>
                                    <p className="text-gray-500">{store.email}</p>
                                    <Link to={store.mapLink} target="_blank" className="text-pink underline">
                                        <span className="font-bold font-roboto">VIEW ON THE MAP</span>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="mt-4 text-gray-500">No stores found. Please try another city.</p>
                        )}
                    </div>
                </div>
            </div>
            <div className=" bg-[url('/images/image/contactformBg.webp')] bg-cover bg-center sm:p-6 md:p-12 sm:w-[300px] md:w-[450px] flex flex-col gap-5">
                <h3 className="sm:text-2xl md:text-4xl font-[500] font-playfair">Send A Quest</h3>
                <div className="">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:gap-5 md:gap-10 mx-auto bg-gray-50 rounded-lg"
                    >
                        {/* Name Field */}
                        <div> 
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink focus:border-pink"
                            />
                        </div>

                        {/* Email Field */}
                        <div> 
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink focus:border-pink"
                            />
                        </div>

                        {/* Subject Field */}
                        <div> 
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Enter the subject"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink focus:border-pink"
                            />
                        </div>

                        {/* Message Field */}
                        <div> 
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter your message"
                                rows="5"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink focus:border-pink"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-pink text-white py-2 px-4 rounded hover:bg-pink-dark transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm