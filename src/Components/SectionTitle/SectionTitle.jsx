
const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="md:w-3/12 text-center my-5 mx-auto">
            <p className="text-yellow-600 mb-4">---{subheading}---</p>
            <h2 className="text-4xl uppercase border-y-4 py-5">{heading}</h2>
        </div>
    );
};

export default SectionTitle;