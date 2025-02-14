import '../Partials/_gradientText.scss'

export default function GradientText({
  children,
  className = "",
  colors = ["#1b721b", "#3d9d3d", "#2BB32A", "#1b211d"], 
  animationSpeed = 8, 
  showBorder = false, 
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>{children}</div>
    </div>
  );
}

//! First decor usage
                    // <GradientText
                    //     colors={["#1b721b", "#3d9d3d", "#2BB32A", "#1b211d", "#1b721b", "#3d9d3d", "#2BB32A", "#FF0000", "#1b211d", "#1b721b", "#3d9d3d", "#2BB32A", "#1b211d", "#1b721b", "#3d9d3d", "#2BB32A", "#1b211d", "#1b721b", "#3d9d3d", "#2BB32A", "#1b211d", "#1b721b", "#3d9d3d", "#2BB32A", "#1b211d", "#1b721b", "#3d9d3d", "#2BB32A", "#1b211d", "#1b721b", "#3d9d3d", "#2BB32A", "#1b211d", "#1b721b", "#3d9d3d", "#2BB32A", "#1b211d", "#1b721b", "#3d9d3d", "#2BB32A", "#1b211d"]}
                    //     animationSpeed={7}
                    //     showBorder={false}
                    //     >
                    //     Discover the Perfect Credit Card for You
                    // </GradientText>