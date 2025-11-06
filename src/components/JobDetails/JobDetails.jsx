import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import * as jobService from '../../services/jobService';


const JobDetails = () => {
    const { jobId } = useParams();
    console.log('jobId', jobId);

    const [job, setJob] = useState(null);

    useEffect(() => {
        const fetchJob = async () => {
            const jobData = await jobService.show(jobId);
            setJob(jobData);
        };
        fetchJob()
    }, [jobId]);
    console.log('job state:', job);

    return <main>Job Details</main>;
};

export default JobDetails;