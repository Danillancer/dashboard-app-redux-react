import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearFilter, deleteFilter } from 'store/Filters/Filters-action';
import { selectFilter } from 'store/Filters/Filters-selector';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';


const FilterPanel = () => {
  const dispatch= useDispatch()
  const filters= useSelector(selectFilter)
  return (
    <>{filters.length >= 1?
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
        {filters? filters.map((item)=>(
          <Badge variant="clearable" key={item} onClick={()=>{
             dispatch(deleteFilter(item))
            }}>{item}</Badge>
        )
        ): <></>}

        </Stack>
        <button className='link' onClick={()=>dispatch(clearFilter())}>Clear</button>
      </div>
    </Card>
    :<></>}
    </>
  )
}

export {FilterPanel};