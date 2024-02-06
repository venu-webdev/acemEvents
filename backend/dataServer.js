require('dotenv').config()

const express = require("express")
const cors = require("cors")
const jwt = require('jsonwebtoken');
const app = express()

const port = 6000

app.use(express.json())
app.use(cors())

const data = [
    {
        importantUpdates: [
          {
            title: "College Schedule Update",
            description: "Changes to the academic calendar for the upcoming semester.",
            dateTime: "2024-02-15 10:00 AM",
            location: "Online",
            countdown: "1 day left",
            imageUrl: "image_url_important_update.jpg",
          },
          {
            title: "New Library Hours",
            description: "Updated library operating hours starting next week.",
            dateTime: "2024-02-18 08:30 AM",
            location: "Library",
            countdown: "4 days left",
            imageUrl: "image_url_library_update.jpg",
          },
          {
            title: "Student Council Elections",
            description: "Information about the upcoming student council elections.",
            dateTime: "2024-02-25 12:00 PM",
            location: "Various Locations",
            countdown: "11 days left",
            imageUrl: "image_url_elections_update.jpg",
          },
          {
            title: "Campus Maintenance Notice",
            description: "Scheduled maintenance affecting specific buildings next weekend.",
            dateTime: "2024-03-01 09:00 AM",
            location: "Campus-wide",
            countdown: "15 days left",
            imageUrl: "image_url_maintenance_update.jpg",
          },
        ],
      
        "Academic Events": [
          {
            title: "International Conference on Technology",
            description: "Explore the latest trends in technology and research.",
            dateTime: "2024-03-10 09:30 AM",
            location: "Conference Hall",
            countdown: "25 days left",
            imageUrl: "image_url_academic_event.jpg",
          },
          {
            title: "Guest Lecture Series: Physics in Everyday Life",
            description: "Join us for an insightful lecture by Dr. Jane Doe.",
            dateTime: "2024-03-15 02:00 PM",
            location: "Lecture Hall A",
            countdown: "30 days left",
            imageUrl: "image_url_physics_lecture.jpg",
          },
          {
            title: "Workshop on Data Science",
            description: "Hands-on workshop covering the basics of data science.",
            dateTime: "2024-03-20 10:00 AM",
            location: "Computer Lab",
            countdown: "35 days left",
            imageUrl: "image_url_data_science_workshop.jpg",
          },
          {
            title: "Mathematics Olympiad",
            description: "Compete in the annual mathematics Olympiad for a chance to win prizes.",
            dateTime: "2024-03-25 01:30 PM",
            location: "Mathematics Department",
            countdown: "40 days left",
            imageUrl: "image_url_math_olympiad.jpg",
          },
        ],
      
        "Cultural Events": [
          {
            title: "Cultural Night Extravaganza",
            description: "An evening of dance, music, and cultural performances.",
            dateTime: "2024-04-05 07:00 PM",
            location: "Auditorium",
            countdown: "50 days left",
            imageUrl: "image_url_cultural_event.jpg",
            coordinators: [
              { name: "John Doe", contact: "john@example.com" },
              { name: "Jane Smith", contact: "jane@example.com" },
            ],
            prerequisites: "Open to all students",
            amount: "Free",
            teamSize: "Individual or Group",
            rules: "Participants must register by the deadline.",
            prizes: "Trophies and Certificates",
          },
          {
            title: "Art Exhibition: Colors of Expression",
            description: "Showcasing the artistic talents of our students.",
            dateTime: "2024-04-10 03:00 PM",
            location: "Art Gallery",
            countdown: "55 days left",
            imageUrl: "image_url_art_exhibition.jpg",
            coordinators: [
              { name: "Emily Johnson", contact: "emily@example.com" },
            ],
            prerequisites: "Open to all art enthusiasts",
            amount: "Free",
            rules: "Artwork submissions must be received by the specified date.",
            certificates: "Participation certificates for all contributors.",
          },
          {
            title: "Dance Competition: Rhythmic Beats",
            description: "Show off your dance moves and compete for the title.",
            dateTime: "2024-04-15 06:30 PM",
            location: "Dance Studio",
            countdown: "60 days left",
            imageUrl: "image_url_dance_competition.jpg",
            coordinators: [
              { name: "Michael Brown", contact: "michael@example.com" },
            ],
            prerequisites: "Open to all dance enthusiasts",
            amount: "Free",
            rules: "Participants must prepare a 5-minute dance routine.",
            prizes: "Medals and Cash Prize for the winners.",
          },
          {
            title: "Music Concert: Harmony in Melodies",
            description: "An evening of soulful music performances by talented musicians.",
            dateTime: "2024-04-20 08:00 PM",
            location: "Music Hall",
            countdown: "65 days left",
            imageUrl: "image_url_music_concert.jpg",
            coordinators: [
              { name: "Sophia Taylor", contact: "sophia@example.com" },
            ],
            prerequisites: "Open to all music enthusiasts",
            amount: "Free",
            rules: "Musical acts should not exceed 10 minutes.",
            certificates: "Certificates for all performers.",
          },
        ],
      
        "Sports Events": [
          {
            title: "Inter-College Basketball Tournament",
            description: "Compete against other colleges in the annual basketball tournament.",
            dateTime: "2024-05-01 10:00 AM",
            location: "Sports Complex",
            countdown: "70 days left",
            imageUrl: "image_url_basketball_tournament.jpg",
            coordinators: [
              { name: "David Miller", contact: "david@example.com" },
            ],
            prerequisites: "Open to all college sports teams",
            amount: "Entry Fee",
            teamSize: "Teams of 5",
            rules: "Teams must register before the deadline.",
            prizes: "Trophies and Sports Equipment for the winning team.",
          },
          {
            title: "Annual Sports Meet",
            description: "Participate in various sports activities and showcase your athletic skills.",
            dateTime: "2024-05-10 02:00 PM",
            location: "Sports Ground",
            countdown: "79 days left",
            imageUrl: "image_url_sports_meet.jpg",
            coordinators: [
              { name: "Olivia Green", contact: "olivia@example.com" },
            ],
            prerequisites: "Open to all students",
            amount: "Free",
            rules: "Participants must choose at least two sports to compete in.",
            certificates: "Certificates for all participants.",
          },
          {
            title: "Intramural Chess Competition",
            description: "Battle it out in the annual chess competition among college students.",
            dateTime: "2024-05-15 05:30 PM",
            location: "Chess Club Room",
            countdown: "84 days left",
            imageUrl: "image_url_chess_competition.jpg",
            coordinators: [
              { name: "Robert Turner", contact: "robert@example.com" },
            ],
            prerequisites: "Open to all chess enthusiasts",
            amount: "Free",
            rules: "Standard chess rules apply.",
            prizes: "Medals for the top 3 participants.",
          },
          {
            title: "Sports Clinics: Fitness Workshops",
            description: "Attend workshops on fitness and sports-related topics.",
            dateTime: "2024-05-20 09:00 AM",
            location: "Fitness Center",
            countdown: "89 days left",
            imageUrl: "image_url_fitness_workshops.jpg",
            coordinators: [
              { name: "Emma Davis", contact: "emma@example.com" },
            ],
            prerequisites: "Open to all fitness enthusiasts",
            amount: "Free",
            rules: "Limited spots available. Register in advance.",
            certificates: "Certificates for all attendees.",
          },
        ],
      
        "Technical Events": [
          {
            title: "Hackathon: CodeFury",
            description: "24-hour coding challenge to solve real-world problems.",
            dateTime: "2024-06-01 12:00 PM",
            location: "Computer Lab",
            countdown: "95 days left",
            imageUrl: "image_url_hackathon_codefury.jpg",
            coordinators: [
              { name: "Alex Turner", contact: "alex@example.com" },
              { name: "Sophie White", contact: "sophie@example.com" },
            ],
            prerequisites: "Open to all coding enthusiasts",
            amount: "Free",
            teamSize: "Teams of 3-5",
            rules: "Teams must bring their own laptops.",
            prizes: "Cash Prize and Internship Opportunities for the winning team.",
          },
          {
            title: "Coding Competition: CodeMaster",
            description: "Test your coding skills in a competitive coding environment.",
            dateTime: "2024-06-10 02:30 PM",
            location: "Computer Lab",
            countdown: "104 days left",
            imageUrl: "image_url_coding_competition.jpg",
            coordinators: [
              { name: "Ryan Johnson", contact: "ryan@example.com" },
            ],
            prerequisites: "Open to all programming enthusiasts",
            amount: "Free",
            rules: "Participants must bring their own laptops.",
            prizes: "Certificates and Recognition for top performers.",
          },
          {
            title: "Robotics Competition: RoboWar",
            description: "Build and battle robots in this thrilling robotics competition.",
            dateTime: "2024-06-15 05:00 PM",
            location: "Robotics Lab",
            countdown: "109 days left",
            imageUrl: "image_url_robotics_competition.jpg",
            coordinators: [
              { name: "Ethan Harris", contact: "ethan@example.com" },
            ],
            prerequisites: "Open to all robotics enthusiasts",
            amount: "Free",
            teamSize: "Teams of 2-4",
            rules: "Robots must adhere to size and weight restrictions.",
            prizes: "Trophies and Robotics Kits for the winning team.",
          },
          {
            title: "Tech Fest 2024",
            description: "A showcase of innovative projects and technological advancements.",
            dateTime: "2024-06-20 10:00 AM",
            location: "Tech Exhibition Hall",
            countdown: "114 days left",
            imageUrl: "image_url_tech_fest.jpg",
            coordinators: [
              { name: "Isabella Turner", contact: "isabella@example.com" },
            ],
            prerequisites: "Open to all tech enthusiasts",
            amount: "Free",
            rules: "Participants must submit project proposals in advance.",
            certificates: "Certificates for all participants.",
          },
        ],
      
        "Social and Community Events": [
          {
            title: "Blood Donation Camp",
            description: "Contribute to the noble cause of saving lives through blood donation.",
            dateTime: "2024-07-01 08:00 AM",
            location: "Community Hall",
            countdown: "120 days left",
            imageUrl: "image_url_blood_donation_camp.jpg",
            coordinators: [
              { name: "Emma Watson", contact: "emma@example.com" },
            ],
            prerequisites: "Open to all students and staff",
            amount: "Free",
            rules: "Participants must meet health requirements for blood donation.",
            certificates: "Certificates for all donors.",
          },
          {
            title: "Environmental Cleanup Drive",
            description: "Join the initiative to clean and beautify the college campus.",
            dateTime: "2024-07-10 10:30 AM",
            location: "Various Locations",
            countdown: "129 days left",
            imageUrl: "image_url_environmental_cleanup.jpg",
            coordinators: [
              { name: "David Williams", contact: "david@example.com" },
            ],
            prerequisites: "Open to all eco-conscious students",
            amount: "Free",
            rules: "Participants must bring their own cleaning supplies.",
            certificates: "Certificates for all participants.",
          },
          {
            title: "Awareness Campaign: Mental Health Matters",
            description: "Promote mental health awareness through informative sessions and activities.",
            dateTime: "2024-07-15 02:00 PM",
            location: "Seminar Hall",
            countdown: "134 days left",
            imageUrl: "image_url_mental_health_awareness.jpg",
            coordinators: [
              { name: "Sophia Turner", contact: "sophia@example.com" },
            ],
            prerequisites: "Open to all students",
            amount: "Free",
            rules: "Limited seats. Register in advance.",
            certificates: "Certificates for all attendees.",
          },
          {
            title: "Health Checkup Camp",
            description: "Comprehensive health checkup camp for students and staff.",
            dateTime: "2024-07-20 09:00 AM",
            location: "Health Center",
            countdown: "139 days left",
            imageUrl: "image_url_health_checkup_camp.jpg",
            coordinators: [
              { name: "Michael Turner", contact: "michael@example.com" },
            ],
            prerequisites: "Open to all students and staff",
            amount: "Free",
            rules: "Participants must fast for 8 hours before the checkup.",
            certificates: "Health Reports for all participants.",
          },
        ],
      
        "Career and Placement Events": [
          {
            title: "Job Fair 2024",
            description: "Connect with leading companies and explore job opportunities.",
            dateTime: "2024-08-01 10:00 AM",
            location: "Career Fair Grounds",
            countdown: "145 days left",
            imageUrl: "image_url_job_fair.jpg",
            coordinators: [
              { name: "Ryan Miller", contact: "ryan@example.com" },
            ],
            prerequisites: "Open to all graduating students",
            amount: "Free",
            rules: "Bring multiple copies of your resume.",
            certificates: "Participation certificates for all attendees.",
          },
          {
            title: "Mock Interviews Workshop",
            description: "Prepare for job interviews through mock interview sessions with industry professionals.",
            dateTime: "2024-08-10 02:30 PM",
            location: "Interview Preparation Room",
            countdown: "154 days left",
            imageUrl: "image_url_mock_interviews.jpg",
            coordinators: [
              { name: "Olivia Turner", contact: "olivia@example.com" },
            ],
            prerequisites: "Open to all students seeking job placement",
            amount: "Free",
            rules: "Participants must bring their resumes.",
            certificates: "Certificates for all participants.",
          },
          {
            title: "Career Counseling Sessions",
            description: "One-on-one sessions with career counselors to explore career paths.",
            dateTime: "2024-08-15 05:00 PM",
            location: "Career Counseling Center",
            countdown: "159 days left",
            imageUrl: "image_url_career_counseling.jpg",
            coordinators: [
              { name: "David Turner", contact: "david@example.com" },
            ],
            prerequisites: "Open to all students",
            amount: "Free",
            rules: "Limited slots available. Book in advance.",
            certificates: "Certificates for all attendees.",
          },
          {
            title: "Resume Writing Workshop",
            description: "Learn the art of crafting effective resumes for job applications.",
            dateTime: "2024-08-20 09:00 AM",
            location: "Resume Workshop Room",
            countdown: "164 days left",
            imageUrl: "image_url_resume_writing_workshop.jpg",
            coordinators: [
              { name: "Emma Turner", contact: "emma@example.com" },
            ],
            prerequisites: "Open to all students",
            amount: "Free",
            rules: "Bring a draft of your resume for hands-on editing.",
            certificates: "Certificates for all participants.",
          },
        ],
      
        "Festivals and Celebrations": [
          {
            title: "College Foundation Day Celebration",
            description: "Commemorate the founding of the college with various cultural and festive activities.",
            dateTime: "2024-09-01 12:00 PM",
            location: "Campus-wide",
            countdown: "170 days left",
            imageUrl: "image_url_foundation_day.jpg",
            coordinators: [
              { name: "Ethan Turner", contact: "ethan@example.com" },
            ],
            prerequisites: "Open to all students and staff",
            amount: "Free",
            rules: "Wear college colors for a group photo.",
            certificates: "Certificates for all attendees.",
          },
          {
            title: "Cultural Festival 2024",
            description: "A grand celebration of cultural diversity through performances, exhibitions, and more.",
            dateTime: "2024-09-10 06:00 PM",
            location: "Cultural Festival Grounds",
            countdown: "179 days left",
            imageUrl: "image_url_cultural_festival.jpg",
            coordinators: [
              { name: "Sophie Turner", contact: "sophie@example.com" },
            ],
            prerequisites: "Open to all students and visitors",
            amount: "Free",
            rules: "Participate in the parade to showcase your culture.",
            certificates: "Certificates for all performers.",
          },
          {
            title: "Traditional and Religious Celebrations",
            description: "Participate in traditional and religious celebrations to foster cultural understanding.",
            dateTime: "2024-09-15 03:30 PM",
            location: "Cultural Hall",
            countdown: "184 days left",
            imageUrl: "image_url_traditional_celebrations.jpg",
            coordinators: [
              { name: "Michael Turner", contact: "michael@example.com" },
            ],
            prerequisites: "Open to all students",
            amount: "Free",
            rules: "Dress in traditional attire to participate.",
            certificates: "Certificates for all participants.",
          },
          {
            title: "Independence Day and Republic Day Celebrations",
            description: "Celebrate the national holidays with patriotic activities and events.",
            dateTime: "2024-09-20 10:00 AM",
            location: "National Flag Square",
            countdown: "189 days left",
            imageUrl: "image_url_independence_day_celebrations.jpg",
            coordinators: [
              { name: "Olivia Turner", contact: "olivia@example.com" },
            ],
            prerequisites: "Open to all students and staff",
            amount: "Free",
            rules: "Wear patriotic colors for the flag-raising ceremony.",
            certificates: "Certificates for all participants.",
          },
        ],
      
        "Alumni Interaction Events": [
          {
            title: "Alumni Talk Series: Career Insights",
            description: "Gain valuable insights into career development from successful alumni.",
            dateTime: "2024-02-20 06:00 PM",
            location: "Alumni Hall",
            countdown: "6 days left",
            imageUrl: "image_url_alumni_event.jpg",
            coordinators: [
              { name: "Emily Johnson", contact: "emily@example.com" },
            ],
            prerequisites: "Open to all students and alumni",
            amount: "Free",
            rules: "Participants can submit questions in advance.",
            certificates: "Participation certificates will be provided.",
          },
          {
            title: "Networking Event with Alumni",
            description: "Connect with alumni from various industries for networking opportunities.",
            dateTime: "2024-02-25 07:30 PM",
            location: "Networking Lounge",
            countdown: "11 days left",
            imageUrl: "image_url_alumni_networking.jpg",
            coordinators: [
              { name: "David Johnson", contact: "david@example.com" },
            ],
            prerequisites: "Open to all students and alumni",
            amount: "Free",
            rules: "Bring your business cards for networking.",
            certificates: "Certificates for all attendees.",
          },
          {
            title: "Alumni Reunion: Class of 2010",
            description: "Celebrate the reunion of the Class of 2010 with nostalgic activities and reminiscences.",
            dateTime: "2024-03-01 08:00 PM",
            location: "Reunion Hall",
            countdown: "15 days left",
            imageUrl: "image_url_alumni_reunion.jpg",
            coordinators: [
              { name: "Sophia Johnson", contact: "sophia@example.com" },
            ],
            prerequisites: "Open to Class of 2010 alumni",
            amount: "Free",
            rules: "RSVP required for attendance.",
            certificates: "Certificates for all attendees.",
          },
          {
            title: "Mentorship Program Launch",
            description: "Launch of the mentorship program connecting current students with alumni mentors.",
            dateTime: "2024-03-10 12:00 PM",
            location: "Mentorship Center",
            countdown: "25 days left",
            imageUrl: "image_url_mentorship_program.jpg",
            coordinators: [
              { name: "Michael Johnson", contact: "michael@example.com" },
            ],
            prerequisites: "Open to all students and alumni",
            amount: "Free",
            rules: "Apply for mentorship through the online portal.",
            certificates: "Certificates for mentors and mentees.",
          },
        ],
      }
      ]

//function to check userExists
async function  userExists(email){
    const existingUser = await User.findOne({email: email})
    console.log("existingUser:", existingUser)
    return existingUser
}

app.get("/important",authenticationToken, (req,res)=>{
    
    return res.json({
        // data: data[0].importantUpdates[0]
        message: 'data from the get important'
    })

})


function authenticationToken(req,res,next){
    console.log("it's getting inside")
    const authHeader = req.headers['Authorization']
    const token = authHeader && authHeader.split(" ")[1]
    if(token == null) return res.json({message:"401"}) //no token is sent
    console.log("token: ", token)
    jwt.verify(token, process.env.ACCESS_TOKEN, (err,email)=>{
        if(err) return res.json({message:"403"}) //not valid token so don't have access
        console.log("user in fun: ", email)
        req.email = email
        next()
    })
}

app.listen(port, ()=>console.log("Server running on port", port))