import React,{useState} from 'react'
import {Box} from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';


const Home = () => {
  const [exercises, setExercises] = useState([]); //It is used to store the searched exercises for future use
  const [bodyPart, setBodyPart] = useState('all');  //bodyPart is the selected body part the one on which we clicked which is defined in home and imported as props
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>

    </Box>
  )
}

export default Home