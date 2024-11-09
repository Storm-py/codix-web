import Header from "@/components/Common/Header";
import Portfolio from "@/components/Portfolio/Portfolio";

const page = () => {
  return (
    <div>
      <Header title="Portfolio" bookmark="Portfolio" />
      <Portfolio />
    </div>
  );
};

export default page;
