import quotes from '../quotes.json';

const Quote = () => {
  return (
    <div className="flex flex-col mt-20 items-center px-6 py-10 max-w-4xl mx-auto space-y-6 ">
      {quotes.map((item, index) => (
        <div
          key={index}
          className="bg-white text-gray-800 rounded-xl shadow-md p-6 border-l-4 border-blue-500 w-full flex flex-col justify-between transition-all duration-300 ease-in-out hover:shadow-lg"
        >
          <p className="text-base md:text-lg italic leading-relaxed">
            "{item.quote}"
          </p>
          <span className="text-right text-sm font-medium text-blue-600 mt-4">
            - {item.author}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Quote;
