import React, { useState } from 'react';

const Information = ({ description }) => {
    const [view, setView] = useState('description');
    const [reviewText, setReviewText] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState(0); // State to hold the rating value
    const [reviews, setReviews] = useState([
        { name: 'Jane Doe', text: 'I absolutely love this product! It fits perfectly and the material is amazing. Highly recommend it!', rating: 5 },
        { name: 'John Smith', text: 'Good quality, but the size was a bit off. I recommend checking the size chart before ordering.', rating: 2 },
    ]);

    const submitReview = () => {
        if (reviewText && name && email && rating > 0) {
            setReviews([...reviews, { name, text: reviewText, rating }]);
            setReviewText('');
            setName('');
            setEmail('');
            setRating(0); // Clear the rating after submission
        }
    };

    return (
        <div className="py-20">
            <div className="flex flex-col items-center gap-10">
                <div className="flex sm:gap-2 lg:gap-4">
                    <button className="bg-blue hover:bg-pink text-white sm:py-1 lg:py-3 sm:px-3 lg:px-6 rounded-full font-semibold transition" onClick={() => setView('description')}>DESCRIPTION</button>
                    <button className="bg-blue hover:bg-pink text-white sm:py-1 lg:py-3 sm:px-3 lg:px-6 rounded-full font-semibold transition" onClick={() => setView('information')}>INFORMATION</button>
                    <button className="bg-blue hover:bg-pink text-white sm:py-1 lg:py-3 sm:px-3 lg:px-6 rounded-full font-semibold transition" onClick={() => setView('reviews')}>REVIEWS</button>
                </div>
                <div>
                    {view === 'description' ? (
                        <div>
                            <h2>{description}</h2>
                        </div>
                    ) : null}
                    {view === 'information' ? (
                        <div>
                            <table className="w-full border-collapse border border-gray-300">
                                <tbody>
                                    <tr className="border-b border-gray-300">
                                        <td className="p-2 font-semibold text-gray-700">Compositions</td>
                                        <td className="p-2 text-gray-600">Polyester</td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="p-2 font-semibold text-gray-700">Styles</td>
                                        <td className="p-2 text-gray-600">Girly</td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="p-2 font-semibold text-gray-700">Properties</td>
                                        <td className="p-2 text-gray-600">Short Dress</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="mt-4 text-gray-700">
                                Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts, and more!
                            </p>
                        </div>
                    ) : null}
                    {view === 'reviews' ? (
                        <div>
                            {/* Reviews Section */}
                            <div className="mb-6 flex gap-0">
                                <div className="w-[50%] flex flex-col gap-2">
                                    <h1 className="text-2xl font-playfair">Write Your Own Review</h1>
                                    <h3 className="text-xl font-playfair">Add A Review</h3>
                                    <h3 className="text-base mb-4">Your email address will not be published. Required fields are marked</h3>

                                    {/* Star Rating Section */}
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-base font-playfair">Your Rating</h3>
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill={i < rating ? 'gold' : 'gray'}
                                                    className="w-3 h-3 mr-1 cursor-pointer"
                                                    viewBox="0 0 20 20"
                                                    onClick={() => setRating(i + 1)}
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 15.27l5.45 3.23-1.45-6.27L19 7.45l-6.27-.55L10 1.5 7.27 6.9 1 7.45l4.82 4.78-1.45 6.27L10 15.27z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Displaying Existing Reviews */}
                                <div className="w-[50%]">
                                    <h3 className="text-xl font-playfair">Customer Reviews</h3>
                                    {reviews.map((review, index) => (
                                        <div key={index} className="border-b pb-4 mb-4">
                                            {/* Display Rating for each review */}
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill={i < review.rating ? 'gold' : 'gray'}
                                                        className="w-3 h-3 mr-1"
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 15.27l5.45 3.23-1.45-6.27L19 7.45l-6.27-.55L10 1.5 7.27 6.9 1 7.45l4.82 4.78-1.45 6.27L10 15.27z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                ))}
                                            </div>
                                            <p className="text-gray-600"><strong>{review.name}:</strong></p>
                                            <p className="text-gray-600"> {review.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Review Form Section */}
                            <div className="w-full">
                                <form className="flex flex-col gap-4">
                                    <textarea
                                        value={reviewText}
                                        onChange={(e) => setReviewText(e.target.value)}
                                        className="p-2 border border-gray-300 rounded-md h-24 resize-none"
                                        placeholder="Write your review here"
                                    />
                                    <div className="flex w-full items-center gap-4">
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="p-2 border border-gray-300 rounded-md w-full"
                                            placeholder="Your Name"
                                        />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="p-2 border border-gray-300 rounded-md w-full"
                                            placeholder="Your Email"
                                        />
                                    </div>
                                    <div className="flex gap-4">
                                        <button
                                            type="button"
                                            onClick={submitReview}
                                            className="bg-blue hover:bg-pink text-white px-10 py-3 rounded-md hover:bg-blue-600"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Information;
