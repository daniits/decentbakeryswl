import React, { useState } from 'react'

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "John Doe",
      date: "2025-01-20",
      status: "Pending",
      total: "$120.00",
    },
    {
      id: 2,
      customer: "Jane Smith",
      date: "2025-01-22",
      status: "Completed",
      total: "$75.50",
    },
    {
      id: 3,
      customer: "Robert Johnson",
      date: "2025-01-23",
      status: "Processing",
      total: "$210.75",
    },
  ]);

  const [filterStatus, setFilterStatus] = useState("All");

  const handleStatusChange = (status) => setFilterStatus(status);

  const handleDelete = (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      setOrders(orders.filter((order) => order.id !== orderId));
    }
  };

  const filteredOrders =
    filterStatus === "All"
      ? orders
      : orders.filter((order) => order.status === filterStatus);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">Orders</h1>

    {/* Filters */}
    <div className="flex items-center justify-between mb-4">
        <div>
            <label htmlFor="filterStatus" className="mr-2 text-gray-600">
                Filter by Status:
            </label>
            <select
                id="filterStatus"
                value={filterStatus}
                onChange={(e) => handleStatusChange(e.target.value)}
                className="border border-gray-300 rounded-md p-2"
            >
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Processing">Processing</option>
            </select>
        </div>
        <button className="bg-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Add New Order
        </button>
    </div>

    {/* Orders Table */}
    <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
                <tr>
                    <th className="p-3 border border-gray-300 text-left">Order ID</th>
                    <th className="p-3 border border-gray-300 text-left">Customer</th>
                    <th className="p-3 border border-gray-300 text-left">Date</th>
                    <th className="p-3 border border-gray-300 text-left">Status</th>
                    <th className="p-3 border border-gray-300 text-left">Total</th>
                    <th className="p-3 border border-gray-300 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-100">
                            <td className="p-3 border border-gray-300">{order.id}</td>
                            <td className="p-3 border border-gray-300">{order.customer}</td>
                            <td className="p-3 border border-gray-300">{order.date}</td>
                            <td className="p-3 border border-gray-300">
                                <span
                                    className={`px-2 py-1 rounded-full text-sm ${
                                        order.status === "Pending"
                                            ? "bg-yellow-100 text-yellow-600"
                                            : order.status === "Completed"
                                            ? "bg-green-100 text-green-600"
                                            : "bg-blue-100 text-blue-600"
                                    }`}
                                >
                                    {order.status}
                                </span>
                            </td>
                            <td className="p-3 border border-gray-300">{order.total}</td>
                            <td className="p-3 border border-gray-300 text-center">
                                <button className="text-blue-500 hover:underline mr-3">
                                    View
                                </button>
                                <button className="text-green-500 hover:underline mr-3">
                                    Edit
                                </button>
                                <button
                                    className="text-red-500 hover:underline"
                                    onClick={() => handleDelete(order.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td
                            colSpan={6}
                            className="p-3 text-center text-gray-600 border border-gray-300"
                        >
                            No orders found.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
</div>
  )
}

export default Orders
