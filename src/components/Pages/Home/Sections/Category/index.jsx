import React from 'react';

const Category = () => {
  const category = [
    {
      img: "https://via.placeholder.com/150", // Replace with actual image URL
      name: "PASTRY",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "https://via.placeholder.com/150",
      name: "BREAD",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "https://via.placeholder.com/150",
      name: "CAKE",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "https://via.placeholder.com/150",
      name: "COOKIES",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="container flex mx-auto p-4">
      {category.map((item, index) => (
        <div key={index} className="card py-4">
          {/* Card Content */}
          <div className="flex items-center gap-4 flex-col">
            <img src={item.img} alt={item.name} className="w-20 h-20 rounded-md" />
            <div>
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-600">{item.about}</p>
            </div>
          </div>
          {/* Divider Line */}
          {index < category.length - 1 && <hr className="my-4 border-gray-300" />}
        </div>
      ))}
    </div>
  );
};

export default Category;
