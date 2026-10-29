const express = require("express");
const app = express();
app.use(express.json());
app.use((req, res, next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});
const projects = [
    {
        id: 1,
        title: "AI Study Assistant",
        description: "An AI based study platform"
    },
    {
        id: 2,
        title: "College ERP",
        description: "A student management system"
    }
];
app.get("/", (req, res)=>{
    res.send("Welcome to IdeaSphere Backend!");
});
app.get("/api/projects", (req, res)=>{
    res.json(projects);
});
app.get("/api/projects/:id", (req, res)=>{
    const id = Number(req.params.id);
    const project = projects.find(p => p.id===id);
    if(!project){
        return res.status(404).json({
            message: "Project Not Found"
        });
    }
    res.json(project);
});
app.post("/api/projects", (req, res)=>{
    if(!data.title||!data.description) {
        return res.status(400).json({
            message: "Title and description aree required"
        });
    }
    const data = req.body;
    if(typeof data.title !== "string"|| !data.title.trim()||typeof data.description !== "string"|| !data.description.trim()){
        return res.status(400).json({
            message: "Valid title and description are required"
        });
    }
    const newId = projects.length>0?Math.max(...projects.map(p => p.id))+1
    :1;
    const newProject = {
        id: newId,
        title: data.title,
        description: data.description
    };
    projects.push(newProject);
    res.status(201).json(newProject);
});
app.patch("/api/projects/:id", (req, res)=>{
    const id = Number(req.params.id);
    const project = projects.find(p => p.id===id);
    if(!project){
        return res.status(404).json({
            message: "Project Not Found"
        });
    }
    project.description= req.body.description;
    res.status(200).json(project);
})
app.delete("/api/projects/:id",(req, res)=>{
    const id = Number(req.params.id);
    const projectIndex = projects.findIndex(p => p.id === id);
    if(projectIndex===-1){
        return res.status(404).json({
            message: "Project Not Found"
        });
    }
    projects.splice(projectIndex, 1);
    res.status(200).json({
        message: "Project deleted sucessfully"
    });
})

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
});