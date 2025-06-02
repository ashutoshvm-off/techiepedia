"use client";
import React, { useEffect, useState } from "react";

export function Contact() {

  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
          const checkMobile = () => {
              setIsMobile(window.innerWidth <= 768);
          };
        checkMobile();

      }, []);
  return (
    <section
      id="contact"
      className="contacts-techiepedia-bg flex flex-col gap-5"
      style={{
        backgroundColor: "#0A0118",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        // marginTop: 20,
        zIndex: 0,
        width: "100%",
        height: "100%",
        
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#7ee6ff",
          fontWeight: 700,
          fontSize: isMobile ? "1.5rem" : "2.5rem",
          // marginBottom: "2.5rem",
          letterSpacing: "1px",
          zIndex: 2,
        }}
      >
        CONTACT US
      </h2>
        <div className="flex md:flex-row flex-col justify-evenly w-full mt-5 "
        // style={{
        //   position: "relative",
        //   width: "100%",
        //   backgroundImage: "url('/bg-contact.png')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        //   display: "flex",
        //   flexDirection: "row",
        //   alignItems: "center",
        //   justifyContent: "center",

        // }}
    >
      {/* Image */}
<div className="flex flex-col items-center justify-center"
  style={{
    fontSize: isMobile ? "6rem" : "8rem", lineHeight:  "1"   , fontFamily: 'Poppins' }}
    >
  <h3 className=" text-stroke text-fill-none text-center font-extrabold ">techie<br />pedia</h3>
  <h3 className="font-bold text-blue-500 p-2 rounded-lg">techie<br />pedia</h3>
</div>

      {/* Form */}
        <form
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    background: "rgba(30,0,60,0.3)",
    padding: "2rem",
    borderRadius: "1rem",
    border: "1px solid rgba(160,132,232,0.3)",
    boxShadow: "0 8px 32px rgba(114,36,223,0.15)",
    position: "relative",
    width: "100%",
    maxWidth: "450px",
    height: "auto",
    backdropFilter: "blur(10px)",
    alignSelf: "center",
    boxSizing: "border-box",
  }}
>
  {/* Full Name Input */}
  <div style={{ width: "100%" }}>
    <label
      style={{
        color: "#fff",
        display: "block",
        marginBottom: "0.5rem",
        fontSize: "1rem",
      }}
    >
      Full Name
    </label>
    <div
      style={{
        position: "relative",
        backgroundColor: "rgba(10,1,24,0.8)",
        borderRadius: "0.5rem",
        border: "1px solid rgba(160,132,232,0.2)",
      }}
    >
      <input
        type="text"
        placeholder="Enter your Full Name"
        style={{
          width: "100%",
          padding: ".5rem",
          backgroundColor: "transparent",
          color: "#fff",
          outline: "none",
          border: "none",
          fontSize: "1rem",
          boxSizing: "border-box",
        }}
      />
    </div>
  </div>

  {/* Email Input */}
  <div style={{ width: "100%" }}>
    <label
      style={{
        color: "#fff",
        display: "block",
        marginBottom: "0.5rem",
        fontSize: "1rem",
      }}
    >
      Email Address
    </label>
    <div
      style={{
        position: "relative",
        backgroundColor: "rgba(10,1,24,0.8)",
        borderRadius: "0.5rem",
        border: "1px solid rgba(160,132,232,0.2)",
      }}
    >
      <input
        type="email"
        placeholder="Enter your Email"
        style={{
          width: "100%",
          padding: ".5rem",
          backgroundColor: "transparent",
          color: "#fff",
          outline: "none",
          border: "none",
          fontSize: "1rem",
          boxSizing: "border-box",
        }}
      />
    </div>
  </div>

  {/* Message Input */}
  <div style={{ width: "100%" }}>
    <label
      style={{
        color: "#fff",
        display: "block",
        marginBottom: "0.5rem",
        fontSize: "1rem",
      }}
    >
      Message
    </label>
    <div
      style={{
        position: "relative",
        backgroundColor: "rgba(10,1,24,0.8)",
        borderRadius: "0.5rem",
        border: "1px solid rgba(160,132,232,0.2)",
      }}
    >
      <textarea
        placeholder="Enter your main Text here..."
        style={{
          width: "100%",
          padding: "1rem",
          backgroundColor: "transparent",
          color: "#fff",
          outline: "none",
          border: "none",
          fontSize: "1rem",
          minHeight: "100px",
          resize: "none",
          boxSizing: "border-box",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0.5rem",
          right: "1rem",
          color: "rgba(255,255,255,0.5)",
          fontSize: "0.875rem",
        }}
      >
        0/300
      </div>
    </div>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    style={{
      marginTop: "1rem",
      padding: "0.8rem 2rem",
      backgroundColor: "#7224DF",
      color: "#fff",
      border: "none",
      borderRadius: "2rem",
      fontSize: "1.1rem",
      fontWeight: "500",
      cursor: "pointer",
      transition: "background-color 0.2s",
      alignSelf: "center",
    }}
  >
    Submit
  </button>
</form>
    </div>
    </section>
  );
}
