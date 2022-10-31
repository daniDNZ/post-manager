import Footer from "../components/Footer";
import Header from "../components/Header";

type Props = {
  children: JSX.Element;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
