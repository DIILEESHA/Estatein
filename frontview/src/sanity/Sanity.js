import { createClient } from "@sanity/client";

export default createClient({
  projectId: "z4mfwpbx",
  dataset: "production",
  apiVersion: "2021-10-21", 
  useCdn: true, 
  authProvider: { projectId: "z4mfwpbx" },
});