import job from "../models/job.js"


export const saveJobData = async (request, response) =>{
try {
    const newJob = new job(request.body);
    await newJob.save();
    response.status(200).json({message:"Job Saved Successfully"})
    
} catch (error) {
    console.log(error.message)
    response.status(500).json({error: error.message})
}
}