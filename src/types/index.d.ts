declare type Skill = string;

declare type Skills = Skill[]

declare type Job = {
  company: string;
  location: string;
  role: string;
  description: string;
  skills: Skills;
  from: Date;
  to: Date;
}

declare type Jobs = Job[];
