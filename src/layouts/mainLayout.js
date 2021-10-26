import Header from "../components/shared/header/header";
import Footer from "../components/shared/footer/footer";

export default function ManinLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
