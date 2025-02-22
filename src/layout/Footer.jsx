export default function Footer() {
    return (
        <footer className="page-footer yellow darken-4">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Olya Khromova
                    <a className="grey-text text-lighten-4 right" href="">GitHub Repository</a>
                </div>
            </div>
        </footer>
    )
}