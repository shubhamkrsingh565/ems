/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'

import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className="flex items-center justify-start gap-5 flex-nowrap w-full overflow-x-auto h-[55%] py-5 mt-10">
        {/* <AcceptTask />
        <NewTask />
        <CompleteTask />
        <FailedTask /> */}

        {
            data.tasks.map((e, idx) => {
                if(e.active) {
                    return <AcceptTask  key={idx}/>
                }
                if(e.newTask) {
                    return <NewTask key={idx}/>
                }
                if(e.completed) {
                    return <CompleteTask key={idx}/>
                }
                if(e.failed) {
                    return <FailedTask key={idx}/>
                }
                    
            })
        }
    </div>
  )
}

export default TaskList