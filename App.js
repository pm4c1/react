import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import "./Test/css/LoginPage.css";
import MeetingRoomForm from "./Test/LoginPage/Form";

const App = () => {
  const [isDefaultMenu, setIsDefaultMenu] = useState(true);
  const [isFormPage, setIsFormPage] = useState(false); // 예약 폼 상태
  const [isRoomPage, setIsRoomPage] = useState(false); // 회의실 목록 페이지 상태
  const [user, setUser] = useState(null); // 로그인한 사용자 정보 저장
  const [isModalOpen, setIsModalOpen] = useState(false); // 회원가입 모달 상태

  const handleToggleMenu = () => {
    setIsDefaultMenu((prevState) => !prevState);
  };

  const handleLogin = (data) => {
    if (data.username === "rqpanxoqbxia" && data.password === "rlaalstjd") {
      setUser({ id: "rqpanxoqbxia" });
    } else if (data.username === "sigom" && data.password === "rlatjddn") {
      setUser({ id: "sigom" });
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // 회의실 목록 클릭 시 상태 변경
  const handleRoomListClick = () => {
    setIsRoomPage(true);
  };

  // 예약하기 버튼 클릭 시
  const handleBooking = () => {
    setIsFormPage(true); // 예약 폼을 띄우는 상태 변경
  };

  // 뒤로가기 버튼 클릭 시
  const handleBack = () => {
    setIsFormPage(false); // 회의실 목록 페이지로 돌아가기
  };

  return (
    <div style={styles.container}>
      <AnimatePresence>
        {!user ? (
          <LoginPage handleLogin={handleLogin} openModal={openModal} />
        ) : (
          <>
            <header style={styles.header}>
              <h1>회원 예약 페이지</h1>
              <motion.button
                onClick={handleLogout}
                style={styles.logoutButton}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                로그아웃
              </motion.button>
            </header>

            {/* 로고 버튼 (sigom 계정은 안 보이게 설정) */}
            {user.id !== "sigom" && (
              <button
                onClick={handleToggleMenu}
                style={styles.logoButton}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
              >
                로고
              </button>
            )}

            <motion.nav
              style={styles.navMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isDefaultMenu ? (
                <>
                  <motion.a
                    href="#"
                    style={styles.navLink}
                    onClick={handleRoomListClick}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    회의실 목록
                  </motion.a>
                  <motion.a
                    href="#"
                    style={styles.navLink}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    회의실 시간
                  </motion.a>
                  <motion.a
                    href="#"
                    style={styles.navLink}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    회의실 취소
                  </motion.a>
                  <motion.a
                    href="#"
                    style={styles.navLink}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    회의실 예약 현황
                  </motion.a>
                </>
              ) : (
                <>
                  <motion.a
                    href="#"
                    style={styles.navLink}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    회의실 등록
                  </motion.a>
                  <motion.a
                    href="#"
                    style={styles.navLink}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    회의실 수정/삭제
                  </motion.a>
                  <motion.a
                    href="#"
                    style={styles.navLink}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    회의실 예약 현황
                  </motion.a>
                </>
              )}
            </motion.nav>

            {/* 뒤로가기 버튼을 nav 아래에 배치 */}
            {isRoomPage && !isFormPage && (
              <motion.button
                onClick={handleBack}
                style={styles.backButton}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                뒤로가기
              </motion.button>
            )}

            <AnimatePresence mode="wait">
              {isRoomPage && !isFormPage ? (
                <motion.div
                  key="roomPage"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  style={styles.roomPage}
                >
                  <div style={styles.roomCard}>
                    <img src="#" alt="회의실 1" style={styles.roomImage} />
                    <h3>회의실 1</h3>
                    <motion.button
                      onClick={handleBooking}
                      style={styles.bookButton}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      예약하기
                    </motion.button>
                  </div>
                  <div style={styles.roomCard}>
                    <img src="#" alt="회의실 2" style={styles.roomImage} />
                    <h3>회의실 2</h3>
                    <motion.button
                      onClick={handleBooking}
                      style={styles.bookButton}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      예약하기
                    </motion.button>
                  </div>
                  <div style={styles.roomCard}>
                    <img src="#" alt="회의실 3" style={styles.roomImage} />
                    <h3>회의실 3</h3>
                    <motion.button
                      onClick={handleBooking}
                      style={styles.bookButton}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      예약하기
                    </motion.button>
                  </div>
                </motion.div>
              ) : isFormPage ? (
                <motion.div
                  key="formPage"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <button onClick={handleBack} style={styles.backButton}>뒤로가기</button>
                  <MeetingRoomForm setIsFormPage={setIsFormPage} />
                </motion.div>
              ) : (
                <motion.div
                  key="mainPage"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  style={styles.main}
                >
                  {!isDefaultMenu && "어드민 계정입니다"}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const LoginPage = ({ handleLogin, openModal }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>로그인</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <input type="text" placeholder="아이디" className="input-field" {...register("username")} />
          <input type="password" placeholder="비밀번호" className="input-field" {...register("password")} />
          <button type="submit" className="login-btn">로그인</button>
        </form>
        <div className="signup-container">
          <p>회원이 아니신가요?</p>
          <button className="signup-btn" onClick={openModal}>회원가입</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { margin: 0, padding: 0 },
  header: { textAlign: "center", padding: "5px", position: "relative" },
  logoutButton: {
    position: "absolute", top: "10px", right: "20px",
    padding: "10px 20px", backgroundColor: "#d9534f", color: "white",
    border: "none", cursor: "pointer", borderRadius: "5px", fontSize: "14px",
  },
  logoButton: {
    position: "absolute", top: "30px", left: "300px",
    padding: "10px 20px", backgroundColor: "#4CAF50",
    color: "white", border: "none", cursor: "pointer"
  },
  navMenu: { backgroundColor: "#2f75b5", overflow: "hidden", textAlign: "center", padding: "10px 0" },
  navLink: { color: "white", padding: "14px 20px", textDecoration: "none", display: "inline-block", cursor: "pointer" },
  main: { padding: "20px" },
  roomPage: { 
    display: "flex", 
    justifyContent: "center", // 수평 가운데 정렬
    alignItems: "center", // 수직 가운데 정렬
    flexDirection: "row", 
    gap: "20px", 
    padding: "20px" 
  },
  roomCard: {
    backgroundColor: "#f1f1f1", 
    padding: "20px", 
    borderRadius: "5px", 
    width: "500px", 
    height: "600px", 
    textAlign: "center", 
    boxSizing: "border-box", // 패딩을 포함한 크기로 설정
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "space-between" // 내용 간 간격 조정
  },
  roomImage: {
    width: "100%",  // 이미지가 카드 크기에 맞게 조정
    height: "auto", // 이미지의 비율 유지
    borderRadius: "5px", // 이미지 모서리 둥글게
  },
  bookButton: { 
    marginTop: "20px", 
    padding: "10px", 
    backgroundColor: "#007bff", 
    color: "white", 
    border: "none", 
    cursor: "pointer", 
    borderRadius: "5px" 
  },
  backButton: {
    margin: "10px", padding: "10px 20px", backgroundColor: "#007bff",
    color: "white", border: "none", cursor: "pointer", borderRadius: "5px",
    display: "block", 
    marginLeft: "auto", 
    marginRight: "auto" // 수평 가운데 정렬
  }
};

export default App;
