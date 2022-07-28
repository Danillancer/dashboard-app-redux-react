import { useSelector } from 'react-redux';
import { selectFilter } from 'store/Filters/Filters-selector';
import { selectJobs } from 'store/Jobs/Jobs-selector';

import { JobPosition } from './JobPosition';

const JobList = () => {

const data= useSelector(selectJobs)
const filter = useSelector(selectFilter)
  return (
    <div className='job-list'>
      {data?
        data.map(item => (
        <JobPosition key={item.id} {...item} />
      )).filter(i=>{
       const badges = [].concat(i.props.role, i.props.level, ...i.props.languages, ...i.props.tools)
        if(filter.length >= 1){
         return filter.every(filter=>badges.includes(filter))
        }
        return i 
      })
      :<></>
      
      }
    </div>
  )
}

export {JobList};