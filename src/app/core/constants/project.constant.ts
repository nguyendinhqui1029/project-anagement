import { TicketPriority, TicketType } from "@core/enums/project.enum";

export const TICKET_PRIORITIES_INFO = {
  [TicketPriority.Trivial]: {
      label: 'Trivial',
      description: 'Rất ít quan trọng, hầu như không ảnh hưởng',
      icon: 'trivial.webp'
    },
  [TicketPriority.Low]: {
      label: 'Low',
      description: 'Ưu tiên thấp, nên làm nhưng không khẩn cấp',
      icon: 'low.webp'
    },
  [TicketPriority.Lowest]: {
      label: 'Lowest',
      description: 'Ưu tiên thấp nhất, có thể bỏ qua',
      icon: 'lowest.webp'
    },
  [TicketPriority.Minor]: {
      label: 'Minor',
      description: 'Ưu tiên nhỏ, có thể giải quyết sau',
      icon: 'minor.webp'
    },
  [TicketPriority.Major]: {
      label: 'Major',
      description: 'Ưu tiên lớn, cần giải quyết sớm',
      icon: 'major.webp'
    },
  [TicketPriority.Critical]: {
      label: 'Critical',
      description: 'Ưu tiên cao, cần giải quyết ngay lập tức',
      icon: 'critical.webp'
    },
  [TicketPriority.Blocker]: {
      label: 'Blocker',
      description: 'Đây là một vấn đề chặn.',
      icon: 'blocker.webp'
    },
  [TicketPriority.High]: {
      label: 'High',
      description: 'Đây là một vấn đề quan trọng.',
      icon: 'high.webp'
    },
    [TicketPriority.Highest]: {
      label: 'Highest',
      description: 'Đây là một vấn đề rất quan trọng.',
      icon: 'highest.webp'
    },
    [TicketPriority.Medium]: {
      label: 'Medium',
      description: 'Đây là một vấn đề quan trọng.',
      icon: 'medium.webp'
    },
};

export const TICKET_TYPE_INFO: Record<TicketType, { label: string; description: string; icon: string }> = {
  [TicketType.Bug]: {
    label: 'bug',
    description: 'bug_description',
    icon: 'bug.webp'
  },
  [TicketType.NewFeature]: {
    label: 'feature',
    description: 'feature_description',
    icon: 'new_feature.webp'
  },
  [TicketType.Task]: {
    label: 'task',
    description: 'task_description',
    icon: 'task.webp'
  },
  [TicketType.SubTask]: {
    label: 'subtask',
    description: 'subtask_description',
    icon: 'subtask.webp'
  },
  [TicketType.Incident]: {
    label: 'incident',
    description: 'incident_description',
    icon: 'incident.webp'
  },
  [TicketType.Story]: {
    label: 'story',
    description: 'story_description',
    icon: 'story.webp'
  },
  [TicketType.Epic]: {
    label: 'epic',
    description: 'epic_description', 
    icon: 'epic.webp'
  },
  [TicketType.Improvement]: {
    label: 'improvement',
    description: 'improvement_description',
    icon: 'improvement.webp'
  },
  [TicketType.Defect]: {
    label: 'defect',
    description: 'defect_description',
    icon: 'defect.webp'
  },
  [TicketType.DesignTask]: {
    label: 'design_task',
    description: 'design_task_description',
    icon: 'design_task.webp'
  },
  [TicketType.DevelopmentTask]: {
    label: 'development_task',
    description: 'development_task_description',
    icon: 'development_task.webp'
  },
  [TicketType.Question]: {
    label: 'question',
    description: 'question_description',
    icon: 'question.webp'
  },
  [TicketType.Problem]: {
    label: 'problem',
    description: 'problem_description',
    icon: 'problem.webp'
  }
};