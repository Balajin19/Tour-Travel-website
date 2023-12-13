import axios from "axios";

export const sendEmail = async (from, to, subject, name, msg) => {
  try {
    const apiKey =
      "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";

    const response = await axios({
      method: "post",
      url: "https://api.sendinblue.com/v3/smtp/email",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      data: {
        sender: {
          name: "Tour Travel",
          email: from,
        },
        to: [{ email: to }],
        subject: subject,
        htmlContent: `
        <html>
          <head>
            <style>
              img{
                width:auto;
                heigth:350px;
              }
            </style>
          </head>
          <body>
            <h1>Hello, Dear ${name.toUpperCase()}</h1>
            <img className="img" src='https://images.unsplash.com/photo-1610023926499-571d3b203226?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <p>${msg}</p>
            <p>This Is Your Query And Our Team Will Contact You Shortly...!</p> 
            <p>Thank You for Visiting & Intresting </p>
            <p>Regards,</p>
            <p>Tour Travel</p>
          </body>
        </html>`,
      },
    } );
    console.log("Email sent successfully",response.data);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
