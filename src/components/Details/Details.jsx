import { useLoaderData } from "react-router-dom";


const Details = () => {
    const singleData = useLoaderData();
    const { cost, description, treatment, image } = singleData;
    return (
        <div className="w-[80%] max-w-[1200px] mx-auto mt-6 md:mt-12">
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${image})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
                        <p className="mb-5">
                            {description}
                        </p>
                        <button className="btn btn-primary">Book Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;