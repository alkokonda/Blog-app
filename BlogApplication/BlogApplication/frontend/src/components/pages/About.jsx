import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
        

Welcome to our blog platform developed using the MERN Stack—a modern and robust technology stack comprising MongoDB, Express.js, React, and Node.js. Our platform is designed to provide an enriching experience for both readers and authors alike.

As you explore our blog, you'll discover a diverse collection of articles and posts covering a wide range of topics—from technology and science to lifestyle and travel. Whether you're seeking informative guides, thought-provoking insights, or entertaining stories, our platform has something for everyone.

To make the most of our platform, we encourage users to register and become part of our growing community. Registration is simple and involves entering essential information to create a personalized account. Once registered, users can access additional features and tailor their experience to suit their interests.

Our application is built to cater to two primary user roles: authors and readers.

For **Authors**:
Become a registered author and unleash your creativity by sharing your thoughts and expertise with our audience. As an author, you gain exclusive privileges to post new blogs, articles, or stories. Our intuitive dashboard allows you to manage your content effortlessly. You can create, edit, and delete your posts, ensuring complete control over your published work. Join us as an author to connect with readers and fellow writers, and contribute to our thriving community of content creators.

For **Readers**:
Join as a reader and dive into a world of captivating content curated by our talented authors. Browse through a variety of topics and discover engaging articles that cater to your interests. Our user-friendly interface makes it easy to navigate through posts, bookmark favorites, and engage with authors through comments and feedback. Whether you're looking for educational resources, lifestyle tips, or inspiring narratives, our platform provides a seamless reading experience tailored to your preferences.

At our core, we strive to foster a supportive and collaborative environment where creators and consumers of content can interact, share ideas, and inspire one another. Join us on this journey of exploration and knowledge-sharing.

Start your adventure with us today—register as an author to contribute or as a reader to indulge in a world of captivating stories and insightful perspectives. Together, let's build a vibrant community fueled by the passion for writing and discovery.


        </p>
      </div>
    </article>
  );
};

export default About;
