import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const DataList = ({ data }) => {

    const fieldsToShow = ['Institute','Program Name', 'Opening Rank', 'Closing Rank', 'Program Duration', 'Program Type'];
    const sortedData = [...data].sort((a, b) => a['Closing Rank'] - b['Closing Rank']);
    const colorClasses = ['bg-yellow-200', 'bg-green-200', 'bg-blue-200', 'bg-pink-200', 'bg-purple-200'];

  return (
    <div className='flex flex-col mt-10 gap-10 justify-center items-center'>
      <h2 className='text-2xl font-bold mt-5'>Here is List of Collage You may get : </h2>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 , justifyContent: 'center', alignItems:'center'}}>
        {sortedData.map((item, index) => {
        
        const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];
        
        return (
          <Card key={index} sx={{ minWidth: 275, maxWidth: 300 }}>
            <CardContent className={`${randomColorClass} rounded-lg border-pink-900 border-2 border-double padding: 2 borderRadius: 2 boxShadow: 3`} >
              {fieldsToShow.map((field) => (
                item[field] && (
                  <Typography key={field} variant="body2" component="p">
                    <strong>{field.replace(/_/g, ' ')}: </strong>{item[field].toString()}
                  </Typography>
                )
              ))}
            </CardContent>
          </Card>
        )})}
      </Box>
    </div>
  );
};

export default DataList;
