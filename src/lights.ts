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

export interface LightColorPreset {
  displayName: string;
  color: string;
  url: string;
}

export const houseLights: HouseLight[] = [
  {
    displayName: "Enter Home",
    onUrl:
      "https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=eece3b4d-3ec8-43f1-8ef0-aa5d28970d83&token=5b06dd86-9ace-4aad-beaa-6f6a1ef5854f&response=html",
    offUrl:
      "https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=c836e338-504a-4246-b625-8498994405df&token=87cf7c9c-0fcd-479d-996d-a092b9c25306&response=html",
  },
  {
    displayName: "Kitchen",
    onUrl:
      "https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=e9342906-9f8d-4b9c-96ad-b5d2b1d8e8f5&token=a15e68d2-f1c5-4bb1-ab07-6d0c9da2fe86&response=html",
    offUrl:
      "https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=a759c039-ca7f-43d8-85dc-41c8e8a310c3&token=02f38e30-b4f1-4457-a78d-d38ae311271b&response=html",
  },
  {
    displayName: "Stairs",
    onUrl:
      "https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=434f20f2-53f9-4ae6-b2d3-539f40d99997&token=4482d911-a7e4-4bd4-a47b-31f6a4ec2082&response=html",
    offUrl:
      "https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=995c111d-a9fb-4c50-90c4-7630f1fca982&token=cd2bf8c1-9c76-458a-b288-b17d82e427a7&response=html",
  },
  {
    displayName: "Dining room",
    onUrl:
      "https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=ea139265-7547-4dbb-9c67-454320062545&token=3603227f-2d6f-43eb-998e-55be06de653b&response=html",
    offUrl:
      "https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=b7551cb2-803f-4ec3-bdc2-6eebbefe0116&token=305b5b8c-ce2a-4566-9516-9a47ab3d32df&response=html",
  },
  {
    displayName: "Turn all the lights off",
    toggleUrl:
      "https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=71b385cb-bb5f-4328-9192-5df7f1ea0227&token=c58b2e0c-c941-4b39-92b4-096aea741762&response=html",
  },
];

export const lightColorPresets: LightColorPreset[] = [
  {
    displayName: "White",
    color: "#fffdf5",
    url: "https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=09399c7b-8e37-4059-a40d-cbf7e244d08b&token=1a49fd25-e046-4945-a99a-b2615a32fcd9&response=html",
  },
  {
    displayName: "Christmas time",
    color: "linear-gradient(135deg, #d84c5c 0 42%, #fff8e9 42% 56%, #35996b 56%)",
    url: "https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=12a32d11-dfd1-4fb4-8f1b-a71297a1b2e0&token=a97476c0-7c3b-45b8-a62c-9b4964a7c5e4&response=html",
  },
  {
    displayName: "Purple",
    color: "linear-gradient(135deg, #bd8cff, #6836c9)",
    url: "https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=fbaa65f4-5120-49a0-913d-7c9d79dd4b5a&token=d31f2835-119b-476b-84c2-2b154bdac397&response=html",
  },
];
