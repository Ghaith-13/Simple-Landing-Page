import React from 'react';

function Contact() {
  return (
    <div className="max-w-[1240] m-auto p-4 h-screen">
      <h1 className="text-2xl font-bold p-4 text-center">
        {' '}
        Go to work togather{' '}
      </h1>
      <form className="max-w-[640px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Email"
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-2"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="border shadow-lg p-3 w-full"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="border shadow-lg p-3 w-full mt-2">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
