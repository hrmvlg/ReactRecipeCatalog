export default function Footer() {
    return (
        <footer className="page-footer yellow darken-4">
            <div className="footer-copyright">
                <div className="container">
                    <a
                        className="grey-text text-lighten-4"
                        href="https://github.com/hrmvlg"
                    >
                        © {new Date().getFullYear()} Olya Khromova
                    </a>
                    <a
                        className="grey-text text-lighten-4 right"
                        href="https://github.com/hrmvlg/ReactRecipeCatalog"
                    >
                        GitHub Repository
                    </a>
                </div>
            </div>
        </footer>
    )
}