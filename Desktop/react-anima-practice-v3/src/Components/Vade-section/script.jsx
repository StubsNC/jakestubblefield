import React from "react";
import "./styles.css";
import "./styleguide.css";


function VadeSection() {
  return (
    <VadeComponent
      moreAboutOurTechnology="More about our technology"
      vadeReplacesLegacy={
        <React.Fragment>
          Vade replaces legacy parking infrastructure with wireless cameras,
          <br />
          computer vision, and granular analytics. We make it easy for cities
          <br />
          to monitor and manage curb space in real-time.
        </React.Fragment>
      }
      getToKnowThecurbBetter={
        <React.Fragment>
          Get to know
          <br />
          the curb better
        </React.Fragment>
      }
      vadeCameraImage="vade-camera-image.png"
      vadeInformation11Props={vadeComponentData.vadeInformation11Props}
      vadeInformation12Props={vadeComponentData.vadeInformation12Props}
      vadeInformation13Props={vadeComponentData.vadeInformation13Props}
    />
  );
}

export default VadeSection;

function VadeComponent(props) {
  const {
    moreAboutOurTechnology,
    vadeReplacesLegacy,
    getToKnowThecurbBetter,
    vadeCameraImage,
    vadeInformation11Props,
    vadeInformation12Props,
    vadeInformation13Props,
  } = props;

  return (
    <div className="vade-componentscreen">
      <div className="vade-container-main">
        <div className="vade-content-container">
          <div className="vade-container">
            <div className="vade-section-1animate-enter">
              <div className="aborder-button">
                <div className="more-about-our-technologyvalign-text-middle">
                  {moreAboutOurTechnology}
                </div>
              </div>
              <p className="vade-replaces-legacyvalign-text-middlesans-serif-regular-normal-storm-gray-15px">
                {vadeReplacesLegacy}
              </p>
              <h1 className="get-to-knowthecurb-bettervalign-text-middle">
                {getToKnowThecurbBetter}
              </h1>
            </div>
            <img className="vade-camera-imageanimate-enter2" src={vadeCameraImage} alt="vade-camera-image" />
          </div>
          <div className="vade-section-2animate-enter1">
            <VadeInformation1
              svg={vadeInformation11Props.svg}
              fullyWirelessHardware={vadeInformation11Props.fullyWirelessHardware}
              weProvideSolarAnd={vadeInformation11Props.weProvideSolarAnd}
            />
            <VadeInformation1
              svg={vadeInformation12Props.svg}
              fullyWirelessHardware={vadeInformation12Props.fullyWirelessHardware}
              weProvideSolarAnd={vadeInformation12Props.weProvideSolarAnd}
              className={vadeInformation12Props.className}
            />
            <VadeInformation1
              svg={vadeInformation13Props.svg}
              fullyWirelessHardware={vadeInformation13Props.fullyWirelessHardware}
              weProvideSolarAnd={vadeInformation13Props.weProvideSolarAnd}
              className={vadeInformation13Props.className}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function VadeInformation1(props) {
  const { svg, fullyWirelessHardware, weProvideSolarAnd, className } = props;

  return (
    <div className={`vade-information-1 ${className || ""}`}>
      <img className="svg" src={svg} alt="SVG" />
      <div className="fully-wireless-hardwarevalign-text-middlesans-serif-medium-onyx-18px">
        {fullyWirelessHardware}
      </div>
      <div className="div">
        <p className="we-provide-solar-andvalign-text-middlesans-serif-regular-normal-storm-gray-15px">
          {weProvideSolarAnd}
        </p>
      </div>
    </div>
  );
}

const vadeInformation11Data = {
  svg: "svg-1@2x.png",
  fullyWirelessHardware: "Fully wireless hardware",
  weProvideSolarAnd: (
    <React.Fragment>
      We provide solar and cellular cameras
      <br />
      that work anywhere, operate 24/7, and
      <br />
      take under 10 minutes to install.
    </React.Fragment>
  ),
};

const vadeInformation12Data = {
  svg: "svg-1@2x.png",
  fullyWirelessHardware: "Real-time data",
  weProvideSolarAnd: (
    <React.Fragment>
      Measure availability and compliance in
      <br />
      real-time with our powerful and
      <br />
      accurate computer vision pipeline.
    </React.Fragment>
  ),
  className: "vade-information-2",
};

const vadeInformation13Data = {
  svg: "svg-1@2x.png",
  fullyWirelessHardware: "Full service subscription",
  weProvideSolarAnd: (
    <React.Fragment>
      One subscription for the cameras,
      <br />
      installation, maintenance,
      <br />
      implementation, software, and support.
    </React.Fragment>
  ),
  className: "vade-infortmation-3",
};

const vadeComponentData = {
  moreAboutOurTechnology: "More about our technology",
  vadeReplacesLegacy: (
    <React.Fragment>
      Vade replaces legacy parking infrastructure with wireless cameras,
      <br />
      computer vision, and granular analytics. We make it easy for cities
      <br />
      to monitor and manage curb space in real-time.
    </React.Fragment>
  ),
  getToKnowThecurbBetter: (
    <React.Fragment>
      Get to know
      <br />
      the curb better
    </React.Fragment>
  ),
  vadeCameraImage: "vade-camera-image.png",
  vadeInformation11Props: vadeInformation11Data,
  vadeInformation12Props: vadeInformation12Data,
  vadeInformation13Props: vadeInformation13Data,
};