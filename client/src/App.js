import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Modal from "react-modal";
import LandingPage from "./pages/LandingPage";
import { Scrollbars } from "react-custom-scrollbars";
import Login from "./components/Login"
import Signup from './components/Signup';
import { RiCloseCircleFill } from "react-icons/ri"


Modal.setAppElement("#root");

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenLogin, setIsOpenLogin] = useState(false);
  const [modalIsOpenExpense, setIsOpenExpense] = useState(false);
  const [modalIsOpenBudget, setIsOpenBudget] = useState(false);
  const [modalisOpenConfirm, setIsOpenConfirm] = useState(false);
  const [modalIsOpenContact, setIsOpenContact] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();

  const [deleteId, setDeleteId] = useState();
  function openModalContact() {
    setIsOpenContact(true);
  }

  function closeModalContact() {
    setIsOpenContact(false);
  }

  function openModalConfirm() {
    setIsOpenConfirm(true);
  }

  function closeModalConfirm() {
    setIsOpenConfirm(false);
  }
  function openModalExpense() {
    setIsOpenExpense(true);
  }

  function closeModalExpense() {
    setIsOpenExpense(false);
  }
  function openModalBudget() {
    setIsOpenBudget(true);
  }

  function closeModalBudget() {
    setIsOpenBudget(false);
  }

  function openModalSignup() {
    setIsOpen(true);
  }

  function closeModalSignup() {
    setIsOpen(false);
  }
  function openModalLogin() {
    setIsOpenLogin(true);
  }

  function closeModalLogin() {
    setIsOpenLogin(false);
  }

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(58, 63, 69, 0.71)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1E2329",
      border: "2px solid #FFFFFF",
      color: "#FFFFFF",
      width: `${window.innerWidth > 420 ? "40%" : "95vw"} `,
      // width: "40%",
    },
  };

  const customStylesContact = {
    overlay: {
      backgroundColor: "rgba(58, 63, 69, 0.71)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1E2329",
      border: "2px solid #FFFFFF",
      color: "#FFFFFF",
      width: "70%",
      height: "82%",
    },
  };

  return (
    <Scrollbars style={{ width: "100vw", height: "100vh" }}>
      <div className="App">
        <Routes>
          <Route path='/' element={
            <LandingPage
              openModalContact={openModalContact}
              openModalSignup={openModalSignup}
              openModalLogin={openModalLogin}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModalSignup}
          style={customStyles}
        >
          <button onClick={closeModalSignup}>
            <RiCloseCircleFill />
          </button>
          <Signup
            closeModalSignup={closeModalSignup}
            openModalLogin={openModalLogin}
          />
        </Modal>
        <Modal
          isOpen={modalIsOpenLogin}
          onRequestClose={closeModalLogin}
          style={customStyles}
        >
          <button onClick={closeModalLogin}>
            <RiCloseCircleFill />
          </button>
          <Login
            closeModalLogin={closeModalLogin}
            openModalSignup={openModalSignup}
          />
        </Modal>

        <Modal
          isOpen={modalIsOpenExpense}
          onRequestClose={closeModalExpense}
          style={customStyles}
        >
          <button onClick={closeModalExpense}>
            <RiCloseCircleFill />
          </button>
          {/* <AddExpense closeModalExpense={closeModalExpense} /> */}
        </Modal>
      </div>
    </Scrollbars >

  );
}

export default App;
