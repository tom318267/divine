import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="About">
      <h3>About Us</h3>
      <p>
        <span style={{ fontWeight: "700" }}>Welcome to Divine!</span> Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolores eius officia
        vero alias magni praesentium et quos. Animi nobis rem tenetur temporibus
        quas laboriosam reiciendis doloribus recusandae quia eius. Esse!
      </p>
      <p>
        Duis metus erat, sollicitudin quis aliquam non, auctor id dolor. Sed
        sodales volutpat leo, a aliquam nulla euismod eget. Nulla porttitor ut
        quam in venenatis. Cras imperdiet diam at mi rhoncus ullamcorper.
        Suspendisse accumsan nec sapien in maximus. Proin purus tellus,
        sollicitudin ut facilisis eu, vestibulum fermentum diam. Fusce pharetra,
        tellus nec dictum tempor, mi tellus aliquet urna, id molestie eros mi
        nec nulla. Sed hendrerit libero et eleifend pharetra. Nulla quis dui
        felis. Proin non faucibus diam, eu semper mauris. Etiam rhoncus odio
        consequat lectus rhoncus tincidunt. Ut quis leo at mauris fermentum
        pellentesque. Etiam fermentum nec neque eget tincidunt.
      </p>
      <p>Thank you, we appreciate your business!</p>
      <p id="signature">John Smith</p> <p id="owner">Owner</p>
    </div>
  );
};

export default About;
