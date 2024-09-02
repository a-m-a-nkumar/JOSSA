import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import YearWiseAnalysisData from '../components/YearWiseAnalysisData';
import RoundWiseAnalysisData from '../components/RoundWiseData';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const DataAnalysis = () => {

    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);
    const [institute, setInstitute] = useState([]);
    const [programNames, setProgramNames] = useState([]);
    const [formData, setFormData] = useState({
        exam: 'Round Wise',
        year: '',
        collage: '',
        institute: '',
        program: '',
        seat: 'OBC-NCL',
        gender: 'Male',
        stateQuota:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => {
            let updatedFormData = { ...prevFormData, [name]: value };
            if (name === 'collage' && (value !== 'NIT' && value !== 'GFTI')) {
                updatedFormData = { ...updatedFormData, stateQuota: '' };
            }
            if (name === 'exam' && value === 'Year Wise') {
                updatedFormData = { ...updatedFormData, year: '' };
            }
            return updatedFormData;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);  // Log formData before making the request
            const response = await axios.get('https://jossa-data-analysis.onrender.com/api/dataAnalysis', {
                params: formData
            });
            console.log(response.data);  // Log response data
            setData(response.data);
            setFlag(true);
        } catch (error) {
            console.error('Error fetching data:', error);
            setFlag(false);
        }
    };

    const fetchInstitute = async (selectedYear, instituteTypes) => {
        try {
            const response = await axios.get('https://jossa-data-analysis.onrender.com/api/distinct', {
                params: {
                    year: selectedYear,
                    institute_types: instituteTypes,
                    find: 'Institute',
                }
            });
            const transformedData = response.data.map(item => ({
                value: item.Institute, // Assuming 'Institute' is the property holding the institute name
                label: item.Institute // Display the same as the label
            }));
            console.log(transformedData);
            setInstitute(transformedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    useEffect(() => {
        if (formData.year && formData.exam === 'Round Wise') {
            fetchInstitute(formData.year, formData.collage);
        }
    }, [formData.year, formData.collage]);

    useEffect(() => {
        if (formData.exam === 'Year Wise') {
            fetchInstitute(formData.year, formData.collage);
        }
    }, [formData.exam, formData.collage]);

    useEffect(() => {
        if (formData.institute && formData.collage) {
            fetchPrograms(formData.year, formData.collage, formData.institute);
        }
    }, [formData.institute, formData.year, formData.collage]);



    const fetchPrograms = async (selectedYear, instituteTypes,institute) => {
        try {
            const response = await axios.get('https://jossa-data-analysis.onrender.com/api/distinct', {
                params: {
                    year: selectedYear,
                    institute_types: instituteTypes,
                    institute: institute,
                    find: 'Program Name',
                }
            });

            const transformedProgram = response.data.map(item => ({
                value: item['Program Name'], // Accessing 'Program Name' property correctly
                label: item['Program Name']
            }));
    
            console.log(transformedProgram);
            setProgramNames(transformedProgram);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div style={{ background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)' }}>
            <Navbar/>
        <div className='flex flex-col gap-10 justify-center items-center w-full'>
            <div className='flex flex-col m-10 gap-5 justify-center items-center w-9/12'>
                <h1 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r to-emerald-600 from-sky-400'>Jossa Data Analysis</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-1 justify-center items-center w-full'>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-form-control-label-placement"
                            name="position"
                            defaultValue="top"
                        >
                            <FormControlLabel
                                name="exam"
                                value="Year Wise"
                                control={<Radio />}
                                label="Year Wise"
                                checked={formData.exam === "Year Wise"}
                                onChange={handleChange}
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                name="exam"
                                value="Round Wise"
                                checked={formData.exam === "Round Wise"}
                                onChange={handleChange}
                                control={<Radio />}
                                label="Round Wise"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </FormControl>

                    {formData.exam === 'Round Wise' && (
                        <FormControl sx={{ m: 1, minWidth: 280 }} size="small">
                            <InputLabel id="year-label">Year</InputLabel>
                            <Select
                                labelId="year-label"
                                id="year"
                                name="year"
                                value={formData.year}
                                label="Year"
                                onChange={handleChange}
                            >
                                <MenuItem value='2016'>2016</MenuItem>
                                <MenuItem value='2017'>2017</MenuItem>
                                <MenuItem value='2018'>2018</MenuItem>
                                <MenuItem value='2019'>2019</MenuItem>
                                <MenuItem value='2020'>2020</MenuItem>
                                <MenuItem value='2021'>2021</MenuItem>
                                <MenuItem value='2022'>2022</MenuItem>
                                <MenuItem value='2023'>2023</MenuItem>
                            </Select>
                        </FormControl>
                    )}

                    <FormControl sx={{ m: 1, minWidth: 280 }} size="small">
                        <InputLabel id="demo-select-small-label">Institute Type</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            name="collage"
                            value={formData.collage}
                            label="Institute Type"
                            onChange={handleChange}
                        >
                            <MenuItem value='IIT'>Indian Institute of Technology</MenuItem>
                            <MenuItem value='NIT'>National Institute of Technology</MenuItem>
                            <MenuItem value='IIIT'>Indian Institute of Information Technology</MenuItem>
                            <MenuItem value='GFTI'>Government Funded Technical Institutes</MenuItem>
                        </Select>
                    </FormControl>


                
                        <FormControl sx={{ m: 1, minWidth: 280 }} size="small">
                            <InputLabel id="demo-select-small-label">Institute</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                name="institute"
                                value={formData.institute}
                                label="Institute"
                                onChange={handleChange}
                            >
                                {institute.map((inst) => (
                                    <MenuItem key={inst.value} value={inst.value}>
                                        {inst.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>


                        <FormControl sx={{ m: 1, minWidth: 280 }} size="small">
    <InputLabel id="program-label">Program</InputLabel>
    <Select
        labelId="program-label"
        id="program"
        name="program"
        value={formData.program}
        label="Program"
        onChange={handleChange}
    >
        {programNames.map((program) => (
            <MenuItem key={program.value} value={program.value}>
                {program.label}
            </MenuItem>
        ))}
    </Select>
</FormControl>

{(formData.collage === 'NIT' || formData.collage === 'GFTI') && (
                        <FormControl sx={{ m: 1, minWidth: 280 }} size="small">
                            <InputLabel id="state-quota-label">State Quota</InputLabel>
                            <Select
                                labelId="state-quota-label"
                                id="state-quota"
                                name="stateQuota"
                                value={formData.stateQuota}
                                label="State Quota"
                                onChange={handleChange}
                            >
                                <MenuItem value='HS'>Home State</MenuItem>
                                <MenuItem value='OS'>Other State</MenuItem>
                                <MenuItem value='AI'>All India</MenuItem>
                            </Select>
                        </FormControl>
                    )}



                    <FormControl sx={{ m: 1, minWidth: 280 }} size="small">
                        <InputLabel id="demo-select-small-label">Seat Quota</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            name="seat"
                            value={formData.seat}
                            label="Seat Quota"
                            onChange={handleChange}
                        >
                            <MenuItem value='OPEN'>OPEN</MenuItem>
                            <MenuItem value='EWS'>EWS</MenuItem>
                            <MenuItem value='OBC-NCL'>OBC-NCL</MenuItem>
                            <MenuItem value='SC'>SC</MenuItem>
                            <MenuItem value='ST'>ST</MenuItem>
                            <MenuItem value='OPEN (PwD)'>OPEN (PwD)</MenuItem>
                            <MenuItem value='OBC-NCL (PwD)'>OBC-NCL (PwD)</MenuItem>
                            <MenuItem value='SC (PwD)'>SC (PwD)</MenuItem>
                            <MenuItem value='ST (PwD)'>ST (PwD)</MenuItem>
                            <MenuItem value='EWS (PwD)'>EWS (PwD)</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 280 }} size="small">
                        <InputLabel id="demo-select-small-label">Gender</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            name="gender"
                            value={formData.gender}
                            label="Gender"
                            onChange={handleChange}
                        >
                            <MenuItem value='Male'>Male</MenuItem>
                            <MenuItem value='Female'>Female</MenuItem>
                        </Select>
                    </FormControl>

                    <button
                        className="align-middle mt-5 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
                {flag ? formData.exam=='Year Wise'?<YearWiseAnalysisData data={data} />: <RoundWiseAnalysisData data={data} />: <div></div>}
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default DataAnalysis;
