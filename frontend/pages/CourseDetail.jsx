import axios from 'axios';

export default function CourseDetail({ course, userId }) {
  const enroll = async () => {
    try {
      const res = await axios.post('/api/courses/enroll', { courseId: course.id, userId });
      alert(res.data.msg);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <button onClick={enroll}>Inscribirse</button>
    </div>
  );
}
