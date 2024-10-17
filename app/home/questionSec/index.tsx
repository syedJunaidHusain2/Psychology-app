import AccordionDropdown from "../accordionDropdown/AccordionDropdown";

const QuestionSec = () => {
  return (
    <>
    <div className="bg-white max-w-[1400px] mx-auto px-6 py-10 sm:px-12 sm:py-16 lg:px-36 lg:py-20">
      <div className="flex flex-col justify-center items-center">
        {/* Updated background to use rgba for transparency */}
        <div
          className="text-center text-sm sm:text-base lg:text-btnSize font-bold px-4 py-2 rounded-full"
          style={{ background: "rgba(0, 255, 10, 0.49)" }} 
        >
          Do you have
        </div>
        <div className="text-center text-2xl sm:text-3xl lg:text-h2 font-semibold mt-4">
          Any{" "}
          {/* Removed !important, added a specific CSS class if needed */}
          <span className="text-bg_color_primary text-3xl sm:text-4xl cursive_font lg:text-h1 font-light allison_regular">
            Questions
          </span>
        </div>
      </div>
      <div className="mt-8">
        <AccordionDropdown/>
      </div>
    </div>
    </>
  );
};

export default QuestionSec;
