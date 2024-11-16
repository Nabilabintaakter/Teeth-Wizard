const Feedback = ({ feedbackData }) => {
    console.log(feedbackData);
    const { name, review, userImage } = feedbackData;
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-[80%] max-w-[1200px] mx-auto mt-7">
            {
                feedbackData?.map((feedback, idx) => <div className="card shadow-xl">
                    <div className="p-4">
                        <div className="flex items-center gap-3 mb-4">
                            <img className="w-12 h-12 rounded-full object-cover" src={feedback.userImg} alt="" />
                            <h2 className="card-title">{feedback.name}</h2>
                            <p className="text-right">{new Date().toLocaleDateString()}</p>
                        </div>
                        <p className="text-center">{feedback.review}</p>
                        <div className="card-actions justify-end mt-4 flex items-center">
                            <div className="rating mr-6">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Feedback;