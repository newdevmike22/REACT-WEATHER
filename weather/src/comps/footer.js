const today = new Date();

const Footer = () => {
    return (
        <div>
            <div className="icons">
                <a className="social" href="https://github.com/newdevmike22">
                    <i className="fab fa-github"></i>
                </a>
                <a className="social" href="https://www.linkedin.com/in/michael-dodson-197231b9/">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
            <div className="footer">
                &copy; Mike Dodson
                <span> {today.getFullYear()}</span>.
            </div>
        </div>
    )
}

export default Footer;