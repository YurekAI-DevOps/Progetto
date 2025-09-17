import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const projectId = "cE9Hkbszh1R786VgHtD7pW";
export const projectApiToken = "glyUgj9j41HycBuak4EKae63kgddfVken5xdfmTebbcYTiEITtzJD8qxFWqNSmqEIxXUAEVPC23UH6zPWkF9w";
export const host = "https://builder.yurekai.com";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectApiToken,
    },
  ],
  host,
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
