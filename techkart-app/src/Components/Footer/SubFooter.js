function SubFooter() {
  return (
    <div className="container mt-2">
      <div className="row">

        <div className="col-6 col-md-2">
          <h5>Policy Info</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Terms of Sale</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Terms of Use</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Report Abuse & Takedown Policy</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Certification</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Company</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Careers</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Blog</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Sitemap</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact Us</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Media Enquiries</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Help</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Payments</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Shipping</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Cancellation & Returns</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQ</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Report Infringement</a></li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SubFooter;