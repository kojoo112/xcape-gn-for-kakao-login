import CautionLine from "../modules/components/common/CautionLine.tsx";
import styles from "@/styles/pages/index.module.scss";

const Index = () => {
  return (
    <div>
      <CautionLine />
      <img
        src="https://xcape-business-sdk-uploads.s3.ap-northeast-2.amazonaws.com/banner/2/12f59774-61a9-469a-9f27-8c4eced34a67_f42f1606-52cf-4945-b96d-6a41fab22d11_banner.jpg"
        style={{ width: "100%", height: "100%" }}
        alt="banner"
      />
      <CautionLine />

      <iframe
        className={styles.youtube}
        src="https://www.youtube.com/embed/lTRs8EiuONE?autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Index;
