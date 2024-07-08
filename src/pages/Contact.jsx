import React, { useState } from "react";

export default function Contact() {
    const [inputs, setInputs] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const handleInputChange = (name) => (event) => {
        setInputs((prevState) => ({
            ...prevState,
            [name]: event.target.value,
        }));
    };

    const handleFormSubmit = (evt) => {
        evt.preventDefault();

        console.log({ inputs });

        fetch("http://localhost:8000/api/products", {
            method: "POST",
            body: JSON.stringify(inputs),
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((response) => {
                console.log({ response });
            });
    };

    return (
        <div className="min-h-screen block mx-auto max-w-md">
            <form
                onSubmit={handleFormSubmit}
                className="mb-6 border rounded p-4 mt-10"
            >
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="name@company.com"
                        required
                        value={inputs.email}
                        onChange={handleInputChange("email")}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="subject"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="Let us know how we can help you"
                        required
                        value={inputs.subject}
                        onChange={handleInputChange("subject")}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Your message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        onChange={handleInputChange("message")}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="Your message..."
                    >
                        {inputs.message}
                    </textarea>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                >
                    Send message
                </button>
            </form>
        </div>
    );
}
