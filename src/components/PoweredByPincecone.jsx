import React from "react";
import footer from "@/styles/Footer.module.css";
export const PoweredByPincecone = () => {
  return (
    <div className={footer.footer}>
      <span className={footer.firstFOnt}>Powered by</span>
      <span className={footer.secondFont}>Pinecone academy</span>
    </div>
  );
};
