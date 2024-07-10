import React from 'react';
import Testimonial from './testi-prop';
import Img1 from '../assets/Newsletter/BG.svg';

function Testi() {
  const data = [
    {
      id: 1,
      review:
        "The Sibling newsletter has been an outstanding addition to our school's resources. It offers valuable insights and practical advice that address the unique challenges our students face today. The focus on mental health, well-being, and personal growth aligns perfectly with our mission to support the holistic development of our students. The positive feedback from students and parents alike is a testament to its impact.",
      Name: "Principal",
      designation: "Green Valley High School",
      Img: Img1
    },
    {
      id: 2,
      review:
        "Our partnership with Sibling has greatly enriched our school's mental health support system. The newsletter provides timely and relevant content that helps our students manage stress, build resilience, and enhance their overall well-being. It’s a crucial resource in our efforts to foster a nurturing and supportive educational environment.",
      Name: "Principal",
      designation: "Sunrise International School",
      Img: Img1
    },
    {
      id: 3,
      review:
        "The Sibling newsletter is a remarkable initiative that addresses the often-overlooked aspect of student mental health. The expert advice and relatable stories empower our students to take charge of their well-being. It has significantly contributed to a more positive and open dialogue about mental health within our school community.",
      Name: "Principal",
      designation: "Harmony High School",
      Img: Img1
    },
    {
      id: 4,
      review:
        "As a teacher, I have seen firsthand the benefits of the Sibling newsletter for our students. The articles are well-written, engaging, and relevant to the issues they encounter daily. The expert advice and personal stories provide a sense of connection and support that is often lacking in traditional educational materials. It's a wonderful tool for fostering a supportive and informed school community.",
      Name: "English Teacher",
      designation: "Sunshine Public School",
      Img: Img1
    },
    {
      id: 5,
      review:
        "The Sibling newsletter has been an invaluable resource for my students. It covers a wide range of topics that are crucial for their mental and emotional development. The practical tips and strategies help them manage academic pressure and maintain a healthy balance between school and personal life. I highly recommend it to any school looking to enhance their mental health resources.",
      Name: "Mathematics Teacher",
      designation: "Blue Ridge Academy",
      Img: Img1
    },
    {
      id: 6,
      review:
        "The Sibling newsletter is a fantastic support tool for both students and teachers. The content is thoughtfully curated to address the real issues our students face. It has opened up important conversations in the classroom about mental health and well-being, making it easier for students to seek help and support when needed.",
      Name: "Science Teacher",
      designation: "Maple Leaf School",
      Img: Img1
    },
    {
      id: 8,
      review:
        "The Sibling newsletter is like a breath of fresh air. It addresses the struggles we face, from exam stress to social pressures, with empathy and practical advice. The stories and tips make me feel understood and supported. It's comforting to know that there are resources out there specifically designed to help us navigate our teenage years. I look forward to each new issue and always find something that resonates with me.",
      Name: "Aarushi",
      designation: "Grade 11",
      Img: Img1
    },
    {
      id: 9,
      review:
        "The Sibling newsletter has made a big difference in my life. The tips on time management and self-care have helped me balance my studies and personal life better. The expert advice is always spot-on and the interactive resources are fun and uplifting. It’s something I eagerly wait for every month.",
      Name: "Meera",
      designation: "Grade 10",
      Img: Img1
    },
  ];

  return (
    <div style={testimonialContainerStyle}>
      <div style={testimonialContainerSlideStyle}>
        {data.map(item => (
          <Testimonial
            key={item.id}
            review={item.review}
            Name={item.Name}
            designation={item.designation}
            Img={item.Img} // Assuming different images for each item
          />
        ))}
      </div>
    </div>
  );
}

// Inline styles for testimonial container and sliding animation
const testimonialContainerStyle = {
  padding: '60px 0',
  background: '#F3F8FC',
  overflow: 'hidden',
  textAlign: 'center'
};

const testimonialContainerSlideStyle = {
  display: 'flex',
  animation: 'slide 15s linear infinite',
  width: '330%' // Adjust as needed to accommodate all items
};

export default Testi;
