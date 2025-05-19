export function Contact() {
    return (
        <section
            id="contact"
            style={{
                background: "#0A0118",
                padding: "80px 0",
                position: "relative",
                overflow: "hidden",
                height: "120vh",
                zIndex: 1,
            }}
        >
            <h2
            style={{
                textAlign: "center",
                color: "#7ee6ff",
                fontWeight: 700,
                fontSize: "2.5rem",
                marginBottom: "2.5rem",
                letterSpacing: "1px",
                zIndex: 2,
            }}
        >
            CONTACT US
        </h2>
        <div style={{
            position: "relative"
        }}>
        <img src="/hole.png" alt="" style={{
            position: "relative",
            width: "100%",
            height: "auto",
            textAlign: "center",
        
        }}/>
        <img src="/contact.png" alt="Contact Us" style={{
            maxWidth: "100%",
            height: "auto",
            position: "absolute",
            top: "90%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
        }}/>

        
            <form style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                background: "rgba(30,0,60,0.3)",
                padding: "2rem",
                borderRadius: "1rem",
                border: "1px solid rgba(160,132,232,0.3)",
                boxShadow: "0 8px 32px rgba(114,36,223,0.15)",
                position: "absolute",
                top: "90%",
                left: "65%",
                width: "100%",
                height: "auto",
                transform: "translate(-50%, -50%)",
                maxWidth: "500px",
                backdropFilter: "blur(10px)",
                zIndex: 2,
            }}>
                {/* Full Name Input */}
                <div>
                    <label style={{ 
                        color: "#fff",
                        display: "block",
                        marginBottom: "0.5rem",
                        fontSize: "1.125rem"
                    }}>
                        Full Name
                    </label>
                    <div style={{
                        position: "relative",
                        backgroundColor: "rgba(10,1,24,0.8)",
                        borderRadius: "0.5rem",
                        border: "1px solid rgba(160,132,232,0.2)"
                    }}>
                        <input
                            type="text"
                            placeholder="Enter your Full Name"
                            style={{
                                width: "100%",
                                padding: "1rem",
                                backgroundColor: "transparent",
                                color: "#fff",
                                outline: "none",
                                border: "none",
                                fontSize: "1rem"
                            }}
                        />
                    </div>
                </div>

                {/* Email Input */}
                <div>
                    <label style={{ 
                        color: "#fff",
                        display: "block",
                        marginBottom: "0.5rem",
                        fontSize: "1.125rem"
                    }}>
                        Email Address
                    </label>
                    <div style={{
                        position: "relative",
                        backgroundColor: "rgba(10,1,24,0.8)",
                        borderRadius: "0.5rem",
                        border: "1px solid rgba(160,132,232,0.2)"
                    }}>
                        <input
                            type="email"
                            placeholder="Enter your Full Name"
                            style={{
                                width: "100%",
                                padding: "1rem",
                                backgroundColor: "transparent",
                                color: "#fff",
                                outline: "none",
                                border: "none",
                                fontSize: "1rem"
                            }}
                        />
                    </div>
                </div>

                {/* Message Input */}
                <div>
                    <label style={{ 
                        color: "#fff",
                        display: "block",
                        marginBottom: "0.5rem",
                        fontSize: "1.125rem"
                    }}>
                        Message
                    </label>
                    <div style={{
                        position: "relative",
                        backgroundColor: "rgba(10,1,24,0.8)",
                        borderRadius: "0.5rem",
                        border: "1px solid rgba(160,132,232,0.2)"
                    }}>
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
                                minHeight: "150px",
                                resize: "none"
                            }}
                        />
                        <div style={{
                            position: "absolute",
                            bottom: "0.5rem",
                            right: "1rem",
                            color: "rgba(255,255,255,0.5)",
                            fontSize: "0.875rem"
                        }}>
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
                        alignSelf: "center"
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    </section>
    );
}