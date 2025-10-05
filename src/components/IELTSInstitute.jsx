import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Courses from "./Courses";
import Features from "./Features";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Footer from "./Footer";
import Modal from "./Modal";

export default function IELTSInstitute() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
    document.body.style.overflow = "unset";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        modalType={modalType}
      />
      <Navbar openModal={openModal} />
      <Hero openModal={openModal} />
      <Courses openModal={openModal} />
      <Features />
      <Testimonials />
      <CTA openModal={openModal} />
      <Footer openModal={openModal} />
    </div>
  );
}
