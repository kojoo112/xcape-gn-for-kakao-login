import { Outlet } from "react-router-dom";
import styles from "@/styles/layouts/layout.module.scss";
import Header from "../modules/components/common/Header.tsx";
import { useState } from "react";
import NotionModal from "../modules/components/notion/NotionModal.tsx";

const Layout = () => {
  const [isPrivacyPolicyModalOpen, setIsPrivacyPolicyModalOpen] = useState(false);

  return (
    <section className={styles.section}>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div>ⓒ 2025. XCAPE ALL RIGHTS RESERVED</div>
          <div>대표자: 조민후 | 주소: 서울 광진구 동일로 112, 금아빌딩, 엑스케이프 건대점</div>
          <div>사업자등록번호: 851-70-00056 | E-mail: xcaperoom@naver.com</div>
          <div>전화번호: 02-463-9366</div>
          <div className={styles.link} onClick={() => setIsPrivacyPolicyModalOpen(true)}>
            개인정보처리방침
          </div>
        </div>
      </footer>
      {isPrivacyPolicyModalOpen && (
        <NotionModal notionPageId={"fdfef31fe69e4349b35af0c617e42b03"} setIsOpen={setIsPrivacyPolicyModalOpen} />
      )}
    </section>
  );
};

export default Layout;
