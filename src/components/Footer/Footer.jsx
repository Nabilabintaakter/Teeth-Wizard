import React from 'react';

const Footer = () => {
    return (
        <div className='mt-12 md:mt-24 bg-blue-950'>
            <footer className="footer container mx-auto justify-between text-white p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Dental Implants</a>
                    <a className="link link-hover">Teeth Whitening</a>
                    <a className="link link-hover">Braces & Aligner</a>
                    <a className="link link-hover">Teeth Cleaning</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title">Teeth Wizard</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn bg-red-600 join-item border-none text-white">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;