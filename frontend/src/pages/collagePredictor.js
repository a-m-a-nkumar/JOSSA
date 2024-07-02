import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import DataList from '../components/Datalist';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';




const Collagepredictor = () => {
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);
    const [formData, setFormData] = useState({
        exam: 'Jee Advance',
        rank: {},
        collage: '',
        programname: 'ALL',
        seat: 'OBC-NCL',
        gender: 'Male'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const response = await axios.get('http://localhost:4000/api/graph_data_roundwise', {
                params: formData
            });
            setData(response.data);
            setFlag(true);
        } catch (error) {
            console.error('Error fetching data:', error);
            setFlag(false);
        }
    };
    

    const programNames = [
        'ALL',
        'Civil Engineering',
        'Civil Engineering and M. Tech. in Structural Engineering',
        'Civil Engineering and M.Tech in Transportation Engineering',
        'Computer Science and Engineering',
        'Electrical Engineering',
        'Electronics and Communication Engineering',
        'Mechanical Engineering',
        'Mechanical Engineering and M. Tech. in Mechanical System Design',
        'Mechanical Engineering and M. Tech. in Thermal Science & Engineering',
        'Metallurgical and Materials Engineering',
        'Aerospace Engineering',
        'Chemical Engineering',
        'Chemistry',
        'Electrical Engineering with M.Tech. in Communications and Signal Processing',
        'Electrical Engineering with M.Tech. in Microelectronics',
        'Energy Engineering with M.Tech. in Energy Systems Engineering',
        'Engineering Physics',
        'Engineering Physics and M.Tech. with specialization in Nano Science',
        'Mechanical Engineering and M.Tech. in Computer Integrated Manufacturing',
        'Metallurgical Engineering and Materials Science',
        'Metallurgical Engineering and Materials Science with M.Tech. in Ceramics and Composites',
        'Metallurgical Engineering and Materials Science with M.Tech. in Metallurgical Process Engineering',
        'Biochemical Engineering and Biotechnology',
        'Biotechnology and Biochemical Engineering',
        'Mathematics and Computing',
        'Production and Industrial Engineering',
        'Textile Technology',
        'Agricultural and Food Engineering',
        'Agricultural and Food Engineering with M.Tech. in any of the listed specializations',
        'Applied Geology',
        'Architecture',
        'Civil Engineering with any of the listed specialization',
        'Economics',
        'Electrical Engineering with M.Tech. in any of the listed specializations',
        'Electronics and Electrical Communication Engineering',
        'Electronics and Electrical Communication Engineering with M.Tech. in any of the listed specializations',
        'Exploration Geophysics',
        'Industrial and Systems Engineering',
        'Industrial and Systems Engineering with M.Tech. in Industrial and Systems Engineering and Management',
        'Instrumentation Engineering',
        'Manufacturing Science and Engineering',
        'Manufacturing Science and Engineering with M.Tech. in Industrial and Systems Engineering and Management',
        'Mechanical Engineering with M.Tech. in any of the listed specializations',
        'Mining Engineering',
        'Mining Safety Engineering',
        'Ocean Engineering and Naval Architecture',
        'Physics',
        'Quality Engineering Design and Manufacturing',
        'Engineering Science',
        'Materials Science and Metallurgical Engineering',
        'Biological Sciences and Bioengineering',
        'Earth Sciences',
        'Materials Science and Engineering',
        'Mathematics and Scientific Computing',
        'Biological Engineering',
        'Biological Sciences',
        'Engineering Design',
        'Naval Architecture and Ocean Engineering',
        'Applied Mathematics',
        'Bio Technology',
        'Geological Technology',
        'Geophysical Technology',
        'Polymer Science and Engineering',
        'Applied Geophysics',
        'Electronics and Instrumentation Engineering',
        'Environmental Engineering',
        'Mineral Engineering',
        'Mining Machinery Engineering',
        'Petroleum Engineering',
        'Biochemical Engineering with M.Tech. in Biochemical Engineering and Biotechnology',
        'Bioengineering with M.Tech in Biomedical Technology',
        'Ceramic Engineering',
        'Civil Engineering with M.Tech. in Structural Engineering',
        'Electrical Engineering with M.Tech. in Power Electronics',
        'Electronics Engineering',
        'Industrial Chemistry',
        'Materials Science and Technology',
        'Metallurgical Engineering',
        'Pharmaceutics',
        'Chemical Science and Technology',
        'Electronics and Electrical Engineering',
        'Industrial and Production Engineering',
        'Instrumentation and Control Engineering',
        'Planning',
        'Information Technology',
        'Bio Engineering',
        'Mathematics',
        'Production Engineering',
        'Electrical and Electronics Engineering',
        'Computer Engineering',
        'Material Science',
        'Bio Medical Engineering',
        'Electronics and Telecommunication Engineering',
        'Ceramic Engineering and M.Tech Industrial Ceramic',
        'Civil Engineering and M.Tech in Water Resources',
        'Computer Science and Engineering and M.Tech Computer Science',
        'Computer Science and Engineering and M.Tech in Information Security',
        'Electrical Engineering and M.Tech Control and Automation',
        'Electrical Engineering and M.Tech Electronic Systems and Communications',
        'Electrical Engineering and M.Tech Power Electronics and Drives',
        'Electronics and Communication Engineering and M.Tech Communication and Network',
        'Electronics and Instrumentation Engineering and M.Tech VLSI Design and Embedded',
        'Food Process Engineering',
        'Industrial Design',
        'Life Science',
        'Mechanical Engineering and M.Tech Mechatronics and Automation',
        'Architecture, Town and Regional Planning',
        'Computer Science and Technology',
        'Metallurgy and Materials Engineering',
        'Electronics and Communication Engineering and M.Tech. Bio-Medical Engineering',
        'Electronics and Communication Engineering - Design and Manufacturing',
        'Electronics and Communication Engineering - Design and Manufacturing + M. Tech VLSI & Electronic System Design',
        'Electronics and Communication Engineering - Design and Manufacturing + M.Tech Signal Processing & Communication System Design',
        'Mechanical - Smart Manufacturing',
        'Mechanical Engineering- Design and Manufacturing',
        'Agricultural Engineering',
        'Carpet and Textile Technology',
        'Electronics System Engineering',
        'Manufacturing Engineering',
        'Food Technology',
        'Food Engineering and Technology',
        'Civil Engineering and M.Tech. in Environmental Engineering',
        'Mechanical Engineering with M.Tech. in Manufacturing Engineering',
        'Metallurgical and Materials Engineering and M.Tech. in Materials Science and Engineering',
        'Pharmaceutical Engineering & Technology',
        'Biotechnology',
        'Electronics and Communication Engineering with specialization in Design and Manufacturing',
        'Electronics and Communication Engineering with specialization in Design and Manufacturing + M. Tech - Signal Processing and Communication Systems Design',
        'Electronics and Communication Engineering with specialization in Design and Manufacturing + M. Tech - VLSI and Electronic Systems Design',
        'Mechanical Engineering with specialization in Design and Manufacturing',
        'Mechanical Engineering with specialization in Design and Manufacturing + M. Tech - Advanced Manufacturing',
        'Mechanical Engineering with specialization in Design and Manufacturing + M. Tech - Product Design',
        'Smart Manufacturing',
        'Computer Science',
        'BS in Mathematics',
        'Environmental Science and Engineering',
        'B. Tech. Computer Science and Engineering and M. Tech. Computer Science and Engineering with specialization in Systems Design',
        'B. Tech. Electronics and Communication Engineering and M. Tech. Electronics and Communication Engineering with specialization in Communication Systems Design',
        'B. Tech. Electronics and Communication Engineering and M. Tech. Electronics and Communication Engineering with specialization in VLSI Design',
        'B. Tech. Mechanical Engineering and M. Tech. in Mechanical Engineering with specialization in Product Design',
        'B. Tech. Mechanical Engineering and M. Tech. Mechanical Engineering with specialization in Advanced Manufacturing',
        'Mechanical Engineering with specialization in Smart Manufacturing',
        'Mechatronics Engineering',
        'Electrical and Instrumentation Engineering',
        'Materials and Metallurgical Engineering',
        'Metallurgical Engineering & Materials Science',
        'Data Science and Engineering',
        'Artificial Intelligence',
        'Information Technology-Business Informatics',
        'Data Science and Artificial Intelligence',
        'Food Technology and Management',
        'Engineering and Computational Mechanics',
        'Materials Engineering',
        'Biomedical Engineering',
        'Artificial Intelligence and Data Science',
        'Civil and Infrastructure Engineering',
        'Mineral and Metallurgical Engineering',
        'Biosciences and Bioengineering',
        'Mathematics & Computing',
        'Computer Science and Artificial Intelligence',
        'Computer Science & Engineering',
        'Electronics & Communication Engineering',
        'Energy Engineering',
        'Biotechnology and Bioinformatics',
        'Computational Engineering',
        'Statistics and Data Science',
        'Chemical Sciences',
        'Mathematics and Data Science',
        'Computational Mathematics',
        'Computer Science and Engineering with Major in Artificial Intelligence',
        'Computer Science and Business',
        'Computer Science and Engineering with specialization in Cyber Security',
        'Quantitative Economics & Data Science',
        'Handloom and Textile Technology',
        'Chemistry with Specialization',
        'Physics with Specialization',
        'Chemical and Biochemical Engineering',
        'Interdisciplinary Sciences',
        'Computational and Data Science',
        'Civil Engineering with Specialization in Construction Technology and Management',
        'Computer Science and Engineering with Specialization in Cyber Security',
        'Computer Science and Engineering with Specialization in Data Science',
        'Electrical Engineering with Specialization In Power System Engineering',
        'Electronics and Communication Engineering with Specialization in Microelectronics and VLSI System Design',
        'Material Science and Engineering',
        'Mathematics and Computing Technology',
        'Mechanical Engineering with Specialization in Manufacturing and Industrial Engineering',
        'Computer Science and Engineering with specialization in Artificial Intelligence and Data Science',
        'Electronics and Communication Engineering with specialization in VLSI and Embedded Systems',
        'Artificial Intelligence and Machine Learning',
        'B.Tech in General Engineering',
        'B.Tech in Materials Science and Engineering',
        'B.Tech in Mathematics and Computing',
        'B.Tech in Microelectronics & VLSI',
        'BS in Chemical Sciences',
        'Space Sciences and Engineering',
        'Biological Science',
        'B. Tech in CE. - M. Tech. in Geotechnical Engineering',
        'B. Tech in CE. - M. Tech. in Structural Engineering',
        'B.Tech. in Electronics and Communication Engineering and M.Tech. in Communication Systems',
        'Artificial Intelligence and Data Engineering',
        'Electronics and VLSI Engineering',
        'Chemical Technology',
        'Industrial Internet of Things',
        'B.Tech. in Electronics and Communication Engineering and M.Tech. in VLSI Design',
        'Mechatronics and Automation Engineering',
        'Civil and Environmental Engineering',
        'Aeronautical Engineering',
        'Dairy Engineering',
        'Fashion and Apparel Engineering',
        'Printing and Packaging Technology'
    ];


    return (
      <div style={{ background: 'linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)' }}>
        <Navbar/>
        <div className='flex flex-col m-10 gap-10 justify-center items-center'>
            <div className='flex flex-col gap-5 justify-center items-center'>
            <h1 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r to-emerald-600 from-sky-400'>College Predictor</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-1 justify-center items-center'>
                

    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
      >
        
        <FormControlLabel
        name="exam"
          value="Jee Mains"
          control={<Radio />}
          label="Jee Mains"
          checked={formData.exam === "Jee Mains"}
        onChange={handleChange}
          labelPlacement="end"
        />
        <FormControlLabel
        name="exam"
          value="Jee Advance"
          checked={formData.exam === "Jee Advance"}
          onChange={handleChange}
          control={<Radio />}
          label="Jee Advance"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Category Rank"
          id="outlined-size-small"
          type="number"
          name="rank"
          value={formData.rank}
          onChange={handleChange}
          size="small"
          required
        />
      </div>
    </Box>
           
                
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
        <MenuItem value='GFIT'>Government Funded Technical Institutes</MenuItem>
      </Select>
    </FormControl>

                {/* <div>
                    <label>
                        Program Name:
                        <select name="programname" value={formData.programname} onChange={handleChange}>
                            <option value="ALL">ALL</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                            <option value="Electrical Engineering">Electrical Engineering</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Aerospace Engineering">Aerospace Engineering</option>
                        </select>
                    </label>
                </div> */}

    <div>
    <FormControl sx={{ m: 1, minWidth: 280 }} size="small">
      <InputLabel id="demo-select-small-label">Program</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        name="programname" 
        label="Program"
        value={formData.programname} 
        onChange={handleChange}
      >
        {programNames.map((program) => (
                        <MenuItem key={program} value={program}>
                            {program}
                        </MenuItem>
                    ))}
      </Select>
    </FormControl>
    </div>

                {/* <div>
                    <label>
                        Seat:
                        <select name="seat" value={formData.seat} onChange={handleChange}>
                            <option value="OBC-NCL">OBC-NCL</option>
                            <option value="General">General</option>
                            <option value="SC">SC</option>
                            <option value="ST">ST</option>
                        </select>
                    </label>
                </div> */}

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


                {/* <div>
                    <label>
                        Gender:
                        <select name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>
                </div> */}

                <div>
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
      </div>

                {/* <button type="submit">Submit</button> */}
                <button
    class="align-middle mt-5 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full"
    type="submit">
    Submit
  </button>
</form>
</div>


       {flag ? <DataList data={data} /> : <div></div>}
        </div>
        <Footer/>
        </div>
    );
};



export default Collagepredictor;
