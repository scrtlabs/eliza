import { Plugin } from "@ai16z/eliza";
import transferToken from "./actions/transfer";
import swapTokens from "./actions/swap";

export const secretPlugin: Plugin = {
    name: "secret",
    description: "Secret Plugin for Eliza",
    actions: [
        transferToken,
        swapTokens,
    ],
};

export default secretPlugin;
