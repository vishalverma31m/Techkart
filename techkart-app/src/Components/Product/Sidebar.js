import { useContext } from 'react';

import { myContext } from '../Context/Context';

import './Sidebar.css';

function Sidebar() {

  const { filteredData, setFilteredData } = useContext(myContext);

  const brandData = ["Lenovo", "HP", "Dell", "Acer", "Asus"];

  const typeData = ["Gaming Laptop", "Business Laptop", "2 in 1 Laptop", "Thin and Light Laptop"];

  const processorData = ["Core i9", "Core i7", "Core i5", "Core i3", "Ryzen 7 Octa Core", "Ryzen 7 Quad Core", "Ryzen 5 Quad Core"];

  const ramData = ["16 GB", "48 GB", "32 GB", "8 GB", "24 GB"];

  const storageData = ["512 GB", "256 GB", "1 TB", "2 TB", "3 TB"];

  const getFilterValue = (evnt) => {
    if (evnt.target.checked) {
      setFilteredData([
        ...filteredData,
        evnt.target.value
      ]);
    }
    else {
      setFilteredData(
        filteredData.filter((value) => value !== evnt.target.value)
      );
    }
  }

  return (
    <div className="flex-shrink-0 p-3" style={{ width: '280px' }}>
      <div className="d-flex align-items-center pb-3 mb-3 link-body-emphasis border-bottom">

        <span className="fs-5 fw-semibold">Filter</span>
      </div>
      <ul className="list-unstyled">
        <li className="mb-1">
          <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 p-0 fs-6 fw-semibold mb-2" data-bs-toggle="collapse" data-bs-target="#brand-collapse" aria-expanded="true">
            BRAND
          </button>
          <div className="collapse show" id="brand-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li className="mb-3">
                <input className="border border-bottom border-0 w-75" type="text" placeholder='Search Brand' />
              </li>
              {brandData.map((brand) => (
                <li className="mb-2">
                  <div className="form-check w-100">
                    <input className="form-check-input" type="checkbox" value={brand} id={brand} onChange={(e) => getFilterValue(e)} />
                    <label className="form-check-label" for={brand}>
                      {brand}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 p-0 fs-6 fw-semibold mb-2 collapsed" data-bs-toggle="collapse" data-bs-target="#type-collapse" aria-expanded="false">
            TYPE
          </button>
          <div className="collapse" id="type-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              {typeData.map((type) => (
                <li className="mb-2">
                  <div className="form-check w-100">
                    <input className="form-check-input" type="checkbox" value={type} id={type} onChange={(e) => getFilterValue(e)} />
                    <label className="form-check-label" for={type}>
                      {type}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 p-0 fs-6 fw-semibold mb-2" data-bs-toggle="collapse" data-bs-target="#processor-collapse" aria-expanded="false">
            PROCESSOR
          </button>
          <div className="collapse" id="processor-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              {processorData.map((processor) => (
                <li className="mb-2">
                  <div className="form-check w-100">
                    <input className="form-check-input" type="checkbox" value={processor} id={processor} onChange={(e) => getFilterValue(e)} />
                    <label className="form-check-label" for={processor}>
                      {processor}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 p-0 fs-6 fw-semibold mb-2" data-bs-toggle="collapse" data-bs-target="#ram-collapse" aria-expanded="false">
            RAM
          </button>
          <div className="collapse" id="ram-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              {ramData.map((ram) => (
                <li className="mb-2">
                  <div className="form-check w-100">
                    <input className="form-check-input" type="checkbox" value={ram} id={ram} onChange={(e) => getFilterValue(e)} />
                    <label className="form-check-label" for={ram}>
                      {ram}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 p-0 fs-6 fw-semibold mb-2" data-bs-toggle="collapse" data-bs-target="#storage-collapse" aria-expanded="false">
            STORAGE
          </button>
          <div className="collapse" id="storage-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              {storageData.map((storage) => (
                <li className="mb-2">
                  <div className="form-check w-100">
                    <input className="form-check-input" type="checkbox" value={storage} id={storage} onChange={(e) => getFilterValue(e)} />
                    <label className="form-check-label" for={storage}>
                      {storage}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}
export default Sidebar;