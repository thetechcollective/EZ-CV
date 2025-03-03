export enum SECTIONNAMES {
  interests = "Interest",
  education = "Education",
  experience = "Experience",
  skills = "Skill",
  projects = "Project",
  profiles = "Profile",
  publications = "Publication",
  certifications = "Certification",
  languages = "Language",
  references = "Reference",
  volunteer = "Volunteering",
  summary = "Summary",
  awards = "Award",
  custom = "Custom",
}

export function getSectionNameFromId(id: string) {
  return Object.keys(SECTIONNAMES).includes(id as SECTIONNAMES)
    ? SECTIONNAMES[id as keyof typeof SECTIONNAMES]
    : SECTIONNAMES.custom;
}
