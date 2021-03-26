import React from 'react';
import './App.css';
import { GanttComponent, TaskFieldsModel, ColumnsDirective, ColumnDirective, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-gantt';
import { resourceData, resourceDetails } from './data';
function App() {
  const taskValues: TaskFieldsModel = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    child: "subtasks",
    resourceInfo: "resources"
  }
  return (
    <div>
      <GanttComponent dataSource={resourceData}
      editSettings={{allowEditing: true, mode: "Dialog", allowAdding: true}}
      toolbar={['Add']}
      viewType="ResourceView"
      showOverAllocation={true}
      enableMultiTaskbar={true}
      taskFields={taskValues} resources={resourceDetails}
      resourceFields={{id: "resourceId", name: "resourceName"}}
      labelSettings={{rightLabel:"resources", taskLabel:"TaskName"}}>
        <Inject services={[Edit, Toolbar]}></Inject>
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="ID" width="100"></ColumnDirective>
          <ColumnDirective field="TaskName" headerText="Name"></ColumnDirective>
          <ColumnDirective field="Duration" textAlign="Right" width="100"></ColumnDirective>
          <ColumnDirective field="resources" headerText="Resources" width="250"></ColumnDirective>
        </ColumnsDirective>
      </GanttComponent>
    </div>
  );
}

export default App;
