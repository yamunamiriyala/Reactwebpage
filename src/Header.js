import React from 'react'

const Header = () => {
    return (
        <>
            <header className="header">
          <section className="logo">REACTFLIGHTAPP</section>
          <section className="nav">
              <nav className="nav-ul">
                  <div className="first-li"> BOOK
                    <div className="dropdown-content">
                                    <div>Book Flight</div>
                                    <div>Offers</div>
                                    <div>Swiss Choice</div>
                                    <div>Partner Offers</div>
                                    <div>Corporate Customers</div>
                    </div>
                  </div>
                  <div className="second-li">PREPARE
                    <div className="dropdown-content">
                                    <div>Prepare my trip</div>
                                    <div>Baggage</div>
                                    <div>Check in Info</div>
                                    <div>Immigration</div>
                                    <div>Special Care</div>
                    </div>
                  </div>
                  <div className="third-li">FLY
                    <div className="dropdown-content">
                                    <div>My next flight</div>
                                    <div>At the airport</div>
                                    <div>On board</div>
                                    <div>Fleet</div>
                                    <div>Flight Information</div>
                    </div>
                  </div>
                  <div className="fourth-li">EXPLORE
                    <div className="dropdown-content">
                                    <div>Explore your destination</div>
                                    <div>Find your destination</div>
                                    <div>Travel Guide</div>
                                    <div>World of swiss</div>
                    </div>
                  </div>
              </nav>
          </section>
          <section className="actions">Login</section>
      </header>
        </>
    )
}

export default Header
