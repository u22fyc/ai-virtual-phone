// @ts-check
import { appRoot } from "@prisma/composer";
import aiVirtualPhoneService from "./service.mjs";

export default appRoot("ai-virtual-phone", ({ provision }) => {
  provision(aiVirtualPhoneService, { id: "aivirtualphone" });
});
