import Button from "./Button";

const InputForm = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 mb-5  w-full">
        <input
          className="border-2 border-secondary outline-none text-sm rounded bg-transparent px-2  pb-2 placeholder:font-karla w-full"
          placeholder="Full Name"
          type="text"
        />
        <input
          className="border-2 border-secondary outline-none text-sm rounded bg-transparent px-2  pb-2 placeholder:font-karla w-full"
          placeholder="Email"
          type="email"
        />
        <input
          className="border-2 border-secondary outline-none text-sm rounded bg-transparent px-2  pb-2 placeholder:font-karla w-full"
          placeholder="Phone Number"
          type="text"
        />
        <select className="bg-transparent border-2 focus:ring-secondary focus:border-secondary outline-none   border-secondary text-sm rounded px-2 pb-2 placeholder:font-karla w-full">
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>

        <textarea
          placeholder="Message"
          className="bg-transparent border-2 focus:ring-secondary focus:border-secondary resize-none outline-none  border-secondary text-sm rounded px-2 pt-2 placeholder:font-karla h-[150px] w-full col-span-2"
        ></textarea>
      </div>
      <div className="mt-4">
        <Button
          title="submit"
          className="bg-transparent text-secondary border border-secondary"
        />
      </div>
    </div>
  );
};

export default InputForm;
