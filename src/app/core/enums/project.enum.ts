export enum ProjectStatus {
  Initiating= 'Initiating',
  OnTrack= 'OnTrack',
  AtRisk= 'AtRisk',
  Delayed= 'Delayed',
  Pending= 'Pending',
  Completed= 'Completed'
}

export enum TicketStatus { 
  Backlog= 'Backlog', 
  Open= 'Open', 
  ToDo= 'ToDo', 
  InProgress= 'In_Progress', 
  InReview= 'In_Review', 
  InTesting= 'In_Testing', 
  Blocked= 'Blocked', 
  Resolved= 'Resolved', 
  Done= 'Done', 
  Closed= 'Closed', 
}

export enum TicketType {
  Epic = 'Epic',
  Story = 'Story',
  Task = 'Task',
  Bug = 'Bug',
  Defect = 'Defect',
  DesignTask = 'DesignTask',
  Improvement = 'Improvement',
  NewFeature = 'NewFeature',
  Incident = 'Incident',
  SubTask = 'SubTask',
  Question = 'Question',
  Problem = 'Problem',
  DevelopmentTask = 'DevelopmentTask'
}

export enum TicketPriority {
  Trivial = 'Trivial',
  Low = 'Low',
  Lowest = 'Lowest',
  Minor = 'Minor',
  Major = 'Major',
  Critical = 'Critical',
  Blocker = 'Blocker',
  Highest = 'Highest',
  High = 'High',
  Medium = 'Medium'
}