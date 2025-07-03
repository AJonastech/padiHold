import React, { useState } from "react";

const EmailSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email signup:", email);
    // Handle email signup logic here
  };

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md">
      <div className="flex rounded-full border border-primary overflow-hidden bg-black/50 backdrop-blur-sm">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address..."
          className="flex-1 px-6 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-0 text-sm "
          required
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 text-black font-semibold px-6 py-3 rounded-r-full transition-colors"
        >
          Get started
        </button>
      </div>
    </form>
  );
};

export default EmailSignup;
