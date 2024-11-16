import bannerImg from '../../assets/banner.png';

const Banner = () => {
    return (
        <div className="hero bg-base-200 w-[80%] max-w-[1200px] mx-auto mt-8 md:px-10 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <img
                    src={bannerImg} />
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold">Exceptional Dental Care at Your Fingertips</h1>
                    <p className="py-6 text-sm md:text-base">
                        Book expert dental treatments effortlessly. Experience top-notch care, personalized services, and a healthier smile—all with just a click!
                    </p>
                    <button className="bg-blue-950 rounded-md border-none md:px-5 text-white font-semibold btn md:text-lg  ">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;