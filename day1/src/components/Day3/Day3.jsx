import "./style.css"

export const HighlightedText = ({ text }) => (
  <p className="highlightedText">{text}</p>
)

const AdminPanel = ({itHasProfile, profiles}) => {

  /** 
  * Write a card component that renders the name
  * of each profiles, with a background-color of gray, 
  * border-radius of 16px;
  * font color of red;
  * every profile will use 1 card component, no sharing
  * 
  */
  
  return (
    <div>
      <h1>This is Admin Panel</h1>
      {
        itHasProfile ? (
          <>
            <p>This Admin has profile</p>
            <p>Your profile was created last week.</p>
          </>
      ) : (
        <p>This Admin has no profile. Create one?</p>
      )
      }

      { profiles.map(profile => 
          (<Card 
            key={profile} 
            name={profile}
          />)
      )}
    </div>
  )
}

export const Dashboard = () => {
  const isAdmin = true;
  const hasProfile = true;
  const profiles = [
    "Angela",
    "Cheryl",
    "Carlos",
    "Marlon"
  ]

  return (
    <div>{ 
      isAdmin && 
      <AdminPanel itHasProfile={hasProfile} profiles={profiles} />}
    </div>
  )
}

const Card = ({name}) => {
  const cardStyle = {
    backgroundColor: "gray",
    borderRadius: "16px",
    color: "red",
    padding: "10px",
    margin: "5px"
  }
  return (
    <div style={cardStyle}>{name}</div>
  )
}

const CourseTag = ({ tag }) => {
  const tagStyle = {
    border: "1px solid #ccc",
    borderRadius: "16px",
    padding: "16px",
    backgroundColor: "orange",
    color: "white",
    fontWeight: "600",
    fontSize: "10px",
    width: "120px",
    textAlign: "center",
  }
  return <p style={tagStyle}>{tag}</p>
}

const CourseCard = ({ courseTitle, instructor, duration, tags, price }) => {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    backgroundColor: "#f9f9f9",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    width: "300px",
  }

  return (
    <div className={price > 250 ? "highlight-card" : null} style={cardStyle}>
      <h3>{courseTitle}</h3>
      <p>Instructor: 
        <span>{instructor}</span>
      </p>
      <p>Duration: 
        <span>{duration}</span>
      </p>
      {tags.map(tag => <CourseTag key={tag} tag={tag} />)}
      <p>Price: 
        <span> ${price}</span>
      </p>
      <button className="enroll-button">Enroll</button>
    </div>
  )
}

export const CourseCatalog = () => {

  const courses = [
    {
    courseId: 1,
    courseTitle: "React for Beginners",
    instructor: "Jane Doe",
    duration: "6 weeks",
    tags: ["React", "Beginner", "Frontend"],
    price: 199,
    },
    {
    courseId: 2,
    courseTitle: "Advanced JavaScript",
    instructor: "John Smith",
    duration: "8 weeks",
    tags: ["JavaScript", "Advanced", "Programming"],
    price: 249,
    },
    {
    courseId: 3,
    courseTitle: "Intro to Web Development",
    instructor: "Emily Johnson",
    duration: "5 weeks",
    tags: ["Web Development", "Beginner", "Frontend"],
    price: 149,
    },
    {
    courseId: 4,
    courseTitle: "UI/UX Design Basics",
    instructor: "Michael Brown",
    duration: "4 weeks",
    tags: ["UI/UX", "Design", "Beginner"],
    price: 179,
    },
    {
    courseId: 5,
    courseTitle: "Backend Development with Node.js",
    instructor: "Sarah Williams",
    duration: "10 weeks",
    tags: ["Node.js", "Backend", "Development"],
    price: 299,
    },
    {
    courseId: 6,
    courseTitle: "Data Structures and Algorithms",
    instructor: "Daniel Martinez",
    duration: "12 weeks",
    tags: ["Algorithms", "Data Structures", "Advanced"],
    price: 349,
    },
  ];

  return (
    <div className="course-catalog">
      {courses.map(course => (
        <CourseCard 
          key={course.courseId} 
          {...course} 
        />
      ))}
    </div>
  )
}




