function Wave() {
  return (
    <>
        <div className="body">
        <div className="containers">
            <svg 
            viewBox="0 0 500 500"
            preserveAspectRatio="xMinYMin meet"
            style={{zIndex: -2}}
            >
            <path
                d="M0, 100 C150, 200 350,
                    0 500, 100 L500, 00 L0, 0 Z"
                style={{stroke: "none", fill: "rgba(7, 79, 117, 1)"}}
            ></path>
            </svg>
        </div>

        <div className="containers">
            <svg

            viewBox="0 0 500 500"
            preserveAspectRatio="xMinYMin meet"
            style={{zIndex: "-1"}}
            >
            <path
                d="M0, 80 C300, 0 400,
                    300 500, 50 L500, 00 L0, 0 Z"
                style={{stroke: "none", fill: "rgba(227, 123, 38, 1)"}}
            ></path>
            </svg>
        </div>

        </div>
    </>
  );
}

export default Wave;
