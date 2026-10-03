import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h1 className="mb-3">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-3">
            <img src="media/images/smallcaseLogo.png" />
            <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
            <img src="media/images/streakLogo.png" style={{width:"150px"}}/>
            <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
            <img src="media/images/sensibullLogo.svg" style={{width:"150px"}}/>
            <p className="text-small text-muted">option trading platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
            <img src="media/images/zerodhaFundhouse.png" style={{width:"180px"}}/>
            <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-3">
            <img src="media/images/goldenpiLogo.png" style={{width:"150px"}}/>
            <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
            <img src="media/images/dittoLogo.png" style={{width:"150px"}}/>
            <p className="text-small text-muted">Insurence</p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5 mt-3' style={{width:"20%", margin:"0 auto"}}>Sign up Now</button>
      </div>
    </div>
  );
}

export default Universe;
