function Footer() {
  return (
    <footer className="d-flex footer pt-3">
      <div className="container">

        <div className="d-flex flex-column flex-sm-row justify-content-between pt-3 pb-1 border-top">
          <small>© 2024 Company, Inc. All rights reserved.</small>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><i className="bi bi-twitter"></i></li>
            <li className="ms-3"><i className="bi bi-instagram"></i></li>
            <li className="ms-3"><i className="bi bi-facebook"></i></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;