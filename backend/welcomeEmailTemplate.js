const welcomeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to AcemEvents</title>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f8f8f8;
            margin: 0;
            padding: 0;
            color: #333333;
        }

        .container {
            max-width: 900px;
            margin: 40px auto;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }

        h1, h2 {
            font-weight: bold;
            color: #3498db;
        }

        p {
            color: #555555;
            line-height: 1.6;
            margin-bottom: 15px;
        }

        .cta-button {
            display: inline-block;
            padding: 12px 25px;
            background-color: #1da1f2; /* Twitter Blue */
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        .cta-button:hover {
            background-color: #1676b1; /* Darker shade of Twitter Blue */
        }

        .footer {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #dddddd;
            color: #888888;
        }

        .header-image {
            width: 100%;
            height: 90vh; /* 40% of the viewport height */
            object-fit: cover;
        }
    </style>
</head>
<body>

    <img src="https://images.unsplash.com/photo-1613289720033-c79deb7d3fca?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Header Image" class="header-image">

    <div class="container">
        <h1>Welcome to <span style="font-weight: bold; color: #3498db;">AcemEvents</span>!</h1>
        <p>
            Dear ${username},
        </p>
        <p>
            We are delighted to welcome you to AcemEvents, where exciting events and enriching experiences await you. Your journey with us is about to begin, and we can't wait to be part of your college adventure.
        </p>
        <p>
            Explore a world of possibilities with our diverse range of events, from academic programs to cultural extravaganzas. Stay connected, stay informed, and make the most of your college experience.
        </p>
        <h2>Get Started</h2>
        <p>
            To start exploring events and staying up-to-date, click the button below:
        </p>
        <p>
            <a href="[Link to Your Website]" class="cta-button">Explore Events</a>
        </p>
        <div class="footer">
            <p>Best regards,<br> The AcemEvents Team</p>
        </div>
    </div>

</body>
</html>
`

module.exports={
    welcomeHtml
}