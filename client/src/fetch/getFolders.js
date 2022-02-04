import useProjectsStore from "../stores/useProjectsStore";

// const setSections = useSectionsStore.getState().setSections;
const setProjects = useProjectsStore.getState().setProjects;

const getFolders = async () => {
    try {
        const response = await fetch("/folders");
        const data = await response.json();
        // setProjects(data);
        console.log("---> getFolders")
        return data; // ex: [{id: 3, name: "Work", color_id: 1}, ...]
    } catch (error) {
        console.error(error.message);
    }
}

export default getFolders;