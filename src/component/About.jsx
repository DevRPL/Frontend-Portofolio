import React from "react";
import { MDBContainer } from "mdbreact";
import Title from "./Title.jsx";

const About = () => {
  return (
    <MDBContainer className="mt-5 d-flex vh-100">
        <div className="d-flex w-100 justify-content-center align-self-center">
            <section className="text-center">
              <Title title="About Me" />
              <p className="text-center mx-auto w-responsive mb-5">
              </p>
                {/* Hallo nama saya Jamil, Saya telah bekerja sebagai web developer selama satu tahun dan telah mengerjakan aplikasi berbasis web. 
                Sebagian besar aplikasi yang dibuat menggunakan Framework Laravel.
                Saya suka menulis code clean dan mudah dimaintainable. */}
                Hallo nama saya Jamil, Saya telah bekerja sebagai software developer lebih dari satu tahun.<br></br>
                Saya terbiasa menggunakan framework laravel, dan saya suka menulis code clean dan mudah dimaintainable.<br></br>
                Saat ini saya tertarik dan mempelajari salah satu library javascript untuk frontend development. 
            </section>
        </div>
    </MDBContainer>
  );
};

export default About;