
function getBrightness(x, y) {
  const cx = 150, cy = 190; // center coordinates
  const r = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2); // distance from center
  
  let brightness;
  if (r <= 0) {
    brightness = 0;
  } else if (r >= 120) {
    brightness = 100;
  } else {
    // Linear interpolation between known points
    brightness = (r / 120) * 100;
  }
  
  //console.log(`📍 Position: x=${x}, y=${y}, distance=${r.toFixed(2)}, brightness=${brightness.toFixed(2)}%`);
  return brightness;
}

// Initialize Rive
const riveInstance = new rive.Rive({
  src: "ios_flashlight.riv",
  canvas: document.getElementById("riveCanvas"),
  artboard: "iOS flashlight",
  stateMachines: "flashlight",
  autoplay: true,
  autoBind: false,
  fit: rive.Fit.Contain,
  alignment: rive.Alignment.Center,
  onLoad: () => {
    console.log("✅ Rive loaded successfully");

    // Access view model
    const vm = riveInstance.viewModelByName("iOS flashlight");
    if (!vm) {
      console.error("❌ ViewModel 'iOS flashlight' not found");
      console.log("Available view models:", riveInstance.viewModelNames);
      return;
    }

    // Access instance
    const vmi = vm.instanceByName("my instance");
    if (!vmi) {
      console.error("❌ Instance 'my instance' not found");
      console.log("Available instances:", vm.instanceNames);
      return;
    }

    // Bind to the runtime
    riveInstance.bindViewModelInstance(vmi);

    // Get number properties
    const propX = vmi.number("x-coordinate");
    const propY = vmi.number("y-coordinate");
    const propBrightness = vmi.number("brightness");
    
    // Get boolean property for flashlight switch
    const propSwitch = vmi.boolean("switch");

    if (!propX || !propY || !propBrightness) {
      console.error("❌ Could not access number properties (x-coordinate, y-coordinate, brightness)");
      //console.log("Available number properties:", vmi.numberNames);
      return;
    }
    
    if (!propSwitch) {
      console.error("❌ Could not access boolean property 'switch'");
      //console.log("Available boolean properties:", vmi.booleanNames);
      return;
    }

    // Function to recompute brightness based on position
    const recompute = () => {
      const x = propX.value;
      const y = propY.value;
      const brightnessVal = getBrightness(x, y);
      propBrightness.value = brightnessVal;
    };
    
    // Function to log switch state changes
    const logSwitchState = () => {
      const isOn = propSwitch.value;
      console.log(`💡 Flashlight: ${isOn ? 'ON' : 'OFF'}`);
    };

    // Subscribe to position changes
    propX.on(() => recompute());
    propY.on(() => recompute());
    
    // Subscribe to switch changes
    propSwitch.on(() => logSwitchState());

    // Initial sync
    recompute();
    logSwitchState();

    console.log("✅ iOS Flashlight data binding active");
  },
  onError: (err) => {
    console.error("❌ Rive loading error:", err);
    console.log("Troubleshooting steps:");
    console.log("1. Check if 'ios_flashlight.riv' file exists in the same directory");
    console.log("2. Verify the artboard name is 'iOS flashlight'");
    console.log("3. Verify the state machine name is 'flashlight'");
    console.log("4. Check that the view model name is 'iOS flashlight'");
    console.log("5. Ensure the instance name is 'my instance'");
  },
});