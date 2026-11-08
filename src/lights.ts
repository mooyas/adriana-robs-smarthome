/**
 * Add one object per control. Use `toggleUrl` for a single routine, or
 * `onUrl` and `offUrl` for separate light controls. Keep URLs absolute and
 * use http:// or https://. Missing or invalid action URLs are disabled.
 */
export interface HouseLight {
  displayName: string;
  toggleUrl?: string;
  onUrl?: string;
  offUrl?: string;
}

export const houseLights: HouseLight[] = [
  {
    displayName: "Kitchen",
    onUrl:
      "https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=e9342906-9f8d-4b9c-96ad-b5d2b1d8e8f5&token=a15e68d2-f1c5-4bb1-ab07-6d0c9da2fe86&response=html",
  },
  {
    displayName: "Enter Home",
    toggleUrl:
      "https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=eece3b4d-3ec8-43f1-8ef0-aa5d28970d83&token=5b06dd86-9ace-4aad-beaa-6f6a1ef5854f&response=html",
  },
  {
    displayName: "Stairs",
    onUrl:
      "https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=434f20f2-53f9-4ae6-b2d3-539f40d99997&token=4482d911-a7e4-4bd4-a47b-31f6a4ec2082&response=html",
  },
  {
    displayName: "Dining room",
    toggleUrl:
      "https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=ea139265-7547-4dbb-9c67-454320062545&token=3603227f-2d6f-43eb-998e-55be06de653b&response=html",
  },
  { displayName: "Wax melter" },
  {
    displayName: "Turn all the lights off",
    toggleUrl:
      "https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=71b385cb-bb5f-4328-9192-5df7f1ea0227&token=c58b2e0c-c941-4b39-92b4-096aea741762&response=html",
  },
];
