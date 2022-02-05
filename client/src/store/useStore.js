import create from "zustand";
import { devtools } from "zustand/middleware"
import createTaskSlice from "./createTaskSlice";
import createColorSlice from "./createColorSlice";
import createProjectSlice from "./createProjectSlice";
import createSectionSlice from "./createSectionSlice";
import createAuthenticationSlice from "./createAuthenticationSlice";

const store = (set, get) => ({
    ...createTaskSlice(set, get),
    ...createColorSlice(set, get),
    ...createProjectSlice(set, get),
    ...createSectionSlice(set, get),
    ...createAuthenticationSlice(set, get)
})

export default create(devtools(store));